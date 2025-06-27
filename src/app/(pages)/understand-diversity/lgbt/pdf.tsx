// "use client";

// import {
//   useRef,
//   useState,
// } from 'react';

// import dynamic from 'next/dynamic';

// const PDFViewer = dynamic(
//   () =>
//     import("@/features/understand-diversity/components/PdfViewer"),
//   { ssr: false }
// );

// export default function MyPDFModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const modalRef = useRef<HTMLDivElement>(null);

//   const handleClickOutside = (e: React.MouseEvent) => {
//     if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div className="text-center bg-white transition-shadow duration-300 p-4 rounded-lg pb-17">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="hover:cursor-pointer bg-[#D8902E] hover:bg-[#ffb349] text-white px-4 py-2 rounded"
//       >
//         Saiba mais!
//       </button>

//       {isOpen && (
//         <div
//           onClick={handleClickOutside}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-60"
//         >
//           <div
//             ref={modalRef}
//             className="bg-white rounded-lg shadow-lg w-[90%] max-w-[800px] h-[80%] p-4"
//           >
//             <div className="h-full">
//               <PDFViewer />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
