// src/component/PdfViewer.tsx
'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Loader2 } from 'lucide-react';

// Sử dụng worker từ CDN để tránh lỗi build
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

interface PdfViewerProps {
    file: string;
}

export default function PdfViewer({ file }: PdfViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className="flex justify-center bg-gray-100 min-h-full w-full">
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                    <div className="flex flex-col items-center py-20">
                        <Loader2 className="animate-spin text-red-600 mb-2" size={40} />
                        <p className="text-gray-500 font-bold">Đang tải...</p>
                    </div>
                }
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <div key={`page_${index + 1}`} className="mb-4 shadow-lg">
                        <Page
                            pageNumber={index + 1}
                            // Tính toán chiều rộng cho iPad và Mobile
                            width={typeof window !== 'undefined' ? (window.innerWidth < 768 ? window.innerWidth - 30 : 800) : 800}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    </div>
                ))}
            </Document>
        </div>
    );
}