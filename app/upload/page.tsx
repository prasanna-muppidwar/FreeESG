"use client";

import Link from "next/link";
import FileUpload from "@/components/FileUpload";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import RootLayout from "../Dashboard/layout";

function UploadComponent() {
  const searchParams = useSearchParams();
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const projectNameParam = searchParams.get("projectName");
    if (projectNameParam) {
      setProjectName(projectNameParam);
    }
  }, [searchParams]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
  };

  const handleUpload = async () => {
    console.log("Uploading files for project:", projectName);
  };

  return (
    <div className="w-full max-w-[90vw] md:max-w-[70vw] p-4 flex flex-col justify-center items-center">
      <FileUpload filename={projectName} onFileUpload={handleUpload} />
    </div>
  );
}

export default function Upload() {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <RootLayout>
        <div className="flex flex-col justify-center items-center p-4 w-full">
          <Suspense
            fallback={
              <div className="flex flex-col justify-center items-center">
                <Loader />
                <p>The report is being generated</p>
              </div>
            }
          >
            <UploadComponent />
          </Suspense>
        </div>
      </RootLayout>
    </div>
  );
}
