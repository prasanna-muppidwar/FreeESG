"use client";
import React, { Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "../../components/ui/button";
import Styles from "./Response.module.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import App from "../Dashboard/layout/sidebar/Sidebar";
import EditableHtml from "@/components/editableHtml";

const Edit = () => {
  const searchParams = useSearchParams();
  const response = searchParams.get("response");
  const responseRef = useRef<HTMLDivElement>(null);

  let decodedResponse = "";
  if (response && response.startsWith("%")) {
    decodedResponse = decodeURIComponent(response);
  } else {
    decodedResponse = response || "";
  }
  const cleanResponse = decodedResponse.replace(/""/g, '"');

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
  

  return (
    <div className="flex max-w-screen items-center justify-center">
      {/* <App /> */}
      <div className={Styles.editContainer}>
        <h1 className={`text-3xl font-bold text-center ${Styles.header}`}>
          Edit Response
        </h1>
        <div ref={responseRef} className={Styles.editContent}>
          <EditableHtml initialHtml={cleanResponse} />
        </div>
        <div className="flex">
          <Button
            onClick={handleDownload}
            className={`mt-4 mx-auto ${Styles.downloadButton}`}
          >
            Download Response
          </Button>
        </div>
      </div>
    </div>
  );
};

const EditWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Edit />
  </Suspense>
);

export default EditWithSuspense;