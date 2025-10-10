// import React from "react";

// interface PopUpProps {
//   isOpen: boolean;
//   onClose: () => void;
//   images: string[];
// }

// const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, images }) => {
//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 px-20 py-8 md:p-12 overflow-y-auto hide-scrollbar"
//       onClick={onClose}
//     >
//       <style>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//       <div 
//         className="bg-white rounded-lg w-full max-w-md md:max-w-3xl relative shadow-2xl overflow-hidden my-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Desktop/Tablet: 3 columns (horizontal), Mobile: 1 column (vertical stack) */}
//         <div className="flex flex-col md:flex-row md:divide-x divide-y md:divide-y-0 divide-[#C8AB6E]">
//           {images.map((image, idx) => (
//             <div 
//               key={idx} 
//               className="flex-1 border-[#C8AB6E] md:border-y-2 md:border-l-2 md:border-r-0 md:last:border-r-2"
//             >
//               <img 
//                 src={image} 
//                 alt={`Image ${idx + 1}`}
//                 className="w-full h-auto md:h-[85vh] object-fill"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopUp;

import React from "react";

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 px-20 py-8 md:p-12 overflow-y-auto hide-scrollbar"
      onClick={onClose}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div 
        className="bg-white  w-full max-w-md md:max-w-2xl relative shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Desktop/Tablet: 3 columns (horizontal), Mobile: 1 column (vertical stack) */}
        <div className="flex flex-col md:flex-row md:divide-x-2 divide-y-2 md:divide-y-0 divide-[#C8AB6E]">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="flex-1"
            >
              <img 
                src={image} 
                alt={`Image ${idx + 1}`}
                className="w-full h-auto md:h-[85vh] object-fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopUp;