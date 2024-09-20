"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "../../components/ui/button";
import Styles from "./Response.module.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Link from "next/link";
import { FaFileDownload, FaEdit } from "react-icons/fa";
import RootLayout from "../Dashboard/layout";

const Response = () => {
  const searchParams = useSearchParams();
  const responseRef = useRef<HTMLDivElement>(null);
  const [processing, setProcessing] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [insights, setInsights] = useState("");
  const [cleanResponse, setCleanResponse] = useState("");
  const [citations, setCitations] = useState<string[]>([]);

  useEffect(() => {
    const storedResponse = localStorage.getItem("response");
    const storedInsights = localStorage.getItem("insights");
    const storedCitations = localStorage.getItem("citations");
    if (storedResponse) {
      setCleanResponse(JSON.parse(storedResponse));
    }
    if (storedInsights) {
      setInsights(JSON.parse(storedInsights));
    }
    if (storedCitations) {
      setCitations(JSON.parse(storedCitations));
    }
  }, []);

  const handleDownload = () => {
    const input = responseRef.current;
    if (input) {
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = imgProps.width;
          const imgHeight = imgProps.height;

          const scaleFactor = pdfWidth / imgWidth;

          const increasedWidth = imgWidth * scaleFactor * 0.9;
          const increasedHeight = imgHeight * scaleFactor * 1.4;

          const leftMargin = 10;
          const topMargin = 10;

          let currentHeight = 0;

          while (currentHeight < increasedHeight) {
            const remainingHeight = increasedHeight - currentHeight;
            const pageHeight = remainingHeight > pdfHeight ? pdfHeight : remainingHeight;
            const yOffset = topMargin;

            pdf.addImage(
              imgData,
              "PNG",
              leftMargin,
              yOffset,
              increasedWidth,
              pageHeight,
              undefined,
              'FAST'
            );

            currentHeight += pageHeight;

            if (currentHeight < increasedHeight) {
              pdf.addPage();
            }
          }

          pdf.save("response.pdf");
        })
        .catch((error) => {
          console.error("Error generating PDF", error);
        });
    } else {
      console.error("Invalid element: responseRef is null");
    }
  };

  useEffect(() => {
    // Get files from query params or any other logic to retrieve uploaded files
    const uploadedFiles = searchParams.get("files");
    if (uploadedFiles) {
      setFiles(JSON.parse(uploadedFiles));
    }
  }, [searchParams]);

  const generateInsights = async () => {
    setProcessing(true);
    try {
      const formData = new FormData();
      files.forEach((file) => formData.append('docs', file));

      const response = await fetch('http://localhost:8000/api/process', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to generate insights');
      }

      const data = await response.json();
      setInsights(data.insights["generate insights based on the processed files"]);
      setCitations(data.citations);
      localStorage.setItem("citations", JSON.stringify(data.citations));
    } catch (error) {
      console.error('Error generating insights:', error);
      setInsights("Failed to generate insights. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <RootLayout>
      <div className={Styles.responseContainer}>
        <h1 className={`text-3xl font-bold text-center ${Styles.header}`}>
          Response
        </h1>
        <div ref={responseRef} className={Styles.responseContent}>
          {cleanResponse.split("\n").map((line, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: line }} />
            </div>
          ))}
          <div className={Styles.citations}>
            <h2>Citations</h2>
            <ul>
              {citations.map((citation, index) => (
                <li key={index}>{citation}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={Styles.buttonContainer}>
          <Link
            href={{
              pathname: "/edit",
              query: { response: encodeURIComponent(cleanResponse) },
            }}
          >
            <Button className={`mt-4 mx-2 text-center ${Styles.actionButton}`}>
              Edit Response
              <FaEdit />
            </Button>
          </Link>
          <Button
            onClick={handleDownload}
            className={`mt-4 mx-2 ${Styles.actionButton} bg-green-500`}
          >
            Download Response
            <FaFileDownload />
          </Button>
        </div>
      </div>
    </RootLayout>
  );
};

const ResponsePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Response />
  </Suspense>
);

export default ResponsePage;
