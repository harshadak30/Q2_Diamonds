

// interface ApplicationsPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ApplicationsPopup: React.FC<ApplicationsPopupProps> = ({ isOpen, onClose }) => {
//   const applications = [
//     {
//       title: 'DEFENCE',
//       image: 'https://via.placeholder.com/400x300/1a1a1a/fff?text=DEFENCE',
//       specs: [
//         { value: '3X', description: 'Higher power density' },
//         { value: '~80%', description: 'Smaller devices' },
//         { value: '10/10', description: 'MOHS Scale Highly Durable under Rigorous Condition' }
//       ]
//     },
//     {
//       title: '5G/6G',
//       image: 'https://via.placeholder.com/400x300/4a4a4a/fff?text=5G/6G',
//       specs: [
//         { value: 'HIGHEST', description: 'Linearity ensures signal fidelity' },
//         { value: '100%', description: 'Linearity ensures signal fidelity' },
//         { value: 'Best Balance of', description: 'Mobility, Power & Heat Management for 5G/6G Infrastructure' }
//       ]
//     },
//     {
//       title: 'RADAR',
//       image: 'https://via.placeholder.com/400x300/6a6a6a/fff?text=RADAR',
//       specs: [
//         { value: '5X', description: 'Thermal Conductivity than Gan on SiC' },
//         { value: '', description: 'Frequency Capability: Ka-band and beyond' },
//         { value: '80%', description: 'Efficiency (Pout / PDC)' }
//       ]
//     }
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 overflow-y-auto">
//       <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl my-8">
//         <div className="flex justify-between items-center p-4 border-b border-gray-200">
//           <h2 className="text-xl font-bold text-gray-800">Applications</h2>
//           <button 
//             onClick={onClose}
//             className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//           >
//           </button>
//         </div>
        
//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {applications.map((app, index) => (
//               <div key={index} className="flex flex-col">
//                 <div className="relative h-48 bg-gray-900 rounded overflow-hidden mb-4">
//                   <img 
//                     src={app.image} 
//                     alt={app.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <h3 className="text-3xl font-bold text-white tracking-wider">{app.title}</h3>
//                   </div>
//                 </div>
                
//                 <div className="space-y-3">
//                   {app.specs.map((spec, specIndex) => (
//                     <div key={specIndex} className="text-center">
//                       <div className="text-4xl font-bold text-amber-600 mb-1">
//                         {spec.value}
//                       </div>
//                       <div className="text-xs text-gray-700 leading-tight px-2">
//                         {spec.description}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationsPopup;


interface ApplicationsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationsPopup: React.FC<ApplicationsPopupProps> = ({ isOpen, onClose }) => {
  const applications = [
    {
      title: 'DEFENCE',
      image: '/images/defence.jpg', // Replace with your actual image path
      specs: [
        { value: '3X', description: 'Higher power density' },
        { value: '80%', description: 'Smaller devices' },
        { value: '10/10', description: 'MOHS Scale Highly Durable under Rigorous Condition' }
      ]
    },
    {
      title: 'RADAR',
      image: '/images/radar.jpg', // Replace with your actual image path
      specs: [
        { value: 'HIGHEST', description: 'Linearity ensures signal fidelity' },
        { value: '100%', description: 'Lower Junction Temperature 100% v/s GaN on SiC' },
        { value: 'Best Balance of', description: 'Mobility, Power & Heat Management for 5G/6G Infrastructure' }
      ]
    },
    {
      title: '5G/6G',
      image: '/images/5g-6g.jpg', // Replace with your actual image path
      specs: [
        { value: '5X', description: 'Thermal Conductivity than GaN on SiC' },
        { value: 'Ka-band and beyond', description: 'Frequency Capability' },
        { value: '80%', description: 'Efficiency (Pout / PDC)' }
      ]
    }
  ];

  // Handle click outside the popup
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl my-8">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Applications</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 bg-gray-900 rounded-lg overflow-hidden mb-4 shadow-md">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white tracking-wider">{app.title}</h3>
                  </div>
                </div>
                
                {/* Specifications */}
                <div className="space-y-4">
                  {app.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-center">
                      <div className="text-4xl font-bold text-amber-600 mb-1">
                        {spec.value}
                      </div>
                      <div className="text-xs text-gray-700 leading-tight px-2">
                        {spec.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPopup;