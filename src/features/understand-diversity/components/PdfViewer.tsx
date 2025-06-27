"use client";
import '@react-pdf-viewer/core/lib/styles/index.css';

import {
  Viewer,
  Worker,
} from '@react-pdf-viewer/core';

export default function PDFViewer() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <Viewer fileUrl="/lgbt.pdf" />
    </Worker>
  );
}
