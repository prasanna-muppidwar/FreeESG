import { supabase } from "@/lib/supabaseClient";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Modal from "./Modal";
import Loader from "./Loader";

interface FileUploadProps {
  onFileUpload: (files: File[]) => void;
  filename: string;
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'An unexpected error occurred';
};

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, filename }) => {
  const [file, setFile] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [response, setResponse] = useState('');
  const [insights, setInsights] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModalSpinner, setShowModalSpinner] = useState(false);

  const searchParams = useSearchParams();
  const [projectName, setProjectName] = useState('');
  // const router = useRouter();

  useEffect(() => {
    const projectNameParam = searchParams.get('projectName');
    if (projectNameParam) {
      setProjectName(projectNameParam);
    }
  }, [searchParams]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) setFile(Array.from(files));
  };

  const callLLm = async (formData: FormData) => {
    try {
      console.log('Calling LLM with formData:', formData);
      const response = await fetch('http://localhost:8000/api/process', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }

      const data = await response.json();
      console.log('LLM Response:', data);

      setResponse(data.formatted_table);
      setInsights(data.insights);
      localStorage.setItem('response', JSON.stringify(data.formatted_table));
      localStorage.setItem('insights', JSON.stringify(data.insights));
    } catch (error) {
      console.error('Error calling LLM:', error);
      setModalTitle('Error');
      setModalMessage(getErrorMessage(error));
      setModalOpen(true);
    }
  };

  const uploadFile = async () => {
    if (file.length === 0) {
      setModalTitle('No file selected');
      setModalMessage('Please select a file to upload.');
      setModalOpen(true);
      return false;
    }
    setUploading(true);

    try {
      console.log('Uploading files for project:', projectName);

      const uploadPromise = file.map(async (file) => {
        const { data, error } = await supabase.storage
          .from('FreeESG')
          .upload(`${projectName}/${file.name}`, file);

        if (error) {
          console.error('Error uploading file:', error.message);
          setModalTitle('Error uploading file');
          setModalMessage(error.message);
          setModalOpen(true);
          return false;
        }
        return data;
      });

      await Promise.all(uploadPromise);

      onFileUpload(file);
      setModalTitle('Success');
      setModalMessage('File uploaded successfully.');
      setModalOpen(true);

      const { data: files, error: filesError } = await supabase.storage
        .from('FreeESG')
        .list(`${projectName}/`, {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
        });

      if (filesError) {
        console.error(filesError);
        return false;
      }

      const validFiles = files.filter(
        (file) => file.name !== '.emptyFolderPlaceholder'
      );
      const fileNames = validFiles.map((file) => file.name);
      const fileUrls = validFiles.map(
        (file) =>
          supabase.storage.from('FreeESG').getPublicUrl(`${projectName}/${file.name}`)
            .data.publicUrl
      );

      const { error: insertError } = await supabase
        .from('projects')
        .update({ document_url: fileUrls })
        .eq('project_name', projectName);

      if (insertError) {
        console.error(
          'Error inserting URLs into the table:',
          insertError.message
        );
        setModalTitle('Error inserting URLs');
        setModalMessage(insertError.message);
        setModalOpen(true);
        return false;
      }

      setModalTitle('Success');
      setModalMessage('File URLs inserted successfully.');
      setModalOpen(true);
      return true;
    } catch (error) {
      console.error('Unexpected error uploading file:', error);
      setModalTitle('Unexpected error');
      setModalMessage(getErrorMessage(error));
      setModalOpen(true);
      return false;
    } finally {
      setUploading(false);
    }
  };

  const handleUploadAndProcess = async () => {
    setShowModalSpinner(true);
    const uploadSuccess = await uploadFile();
    setShowModalSpinner(false);

    if (uploadSuccess && file.length > 0) {
      setProcessing(true); // Start processing
      const formData = new FormData();

      // Append each file individually
      for (let i = 0; i < file.length; i++) {
        formData.append('docs', file[i]);
      }

      await callLLm(formData);
      setProcessing(false); // End processing
    }
  };

  return (
    <div className="h-[85vh] flex flex-col justify-center items-center relative">
      {uploading && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
          <Loader />
        </div>
      )}
      <form className="form">
        <span className="form-title">Upload files for: {filename}</span>
        <label className="drop-container">
          <span className="drop-title">Drop files here</span>
          or
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            required
            id="file-input"
            className="bg-black"
          />
        </label>
        <Button
          className="mt-4 h-12 rounded-xl text-white w-full bg-gray-900 flex justify-center items-center"
          onClick={handleUploadAndProcess}
          disabled={uploading}
        >
          {processing ? 'Building Report...' : 'Build Report'}
        </Button>
        {processing && (
          <div className="mt-4 text-center">
            <Loader />
          </div>
        )}
        {response && (
          <div className="mt-4 text-center">
            <Link href="/response">
              <p className="inline-block px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                View Response
              </p>
            </Link>
          </div>
        )}
      </form>
      <Modal
        isOpen={modalOpen}
        title={modalTitle}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default FileUpload;
