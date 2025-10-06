import React, { useEffect } from 'react';

const CustomScrollBar: React.FC = () => {
  useEffect(() => {
    // Add custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      /* Custom scrollbar for webkit browsers (Chrome, Safari, Edge) */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f8fafc;
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #3B82F6;
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #2563EB;
      }
      
      /* Horizontal scrollbar - always visible */
      ::-webkit-scrollbar:horizontal {
        height: 8px;
      }
      
      ::-webkit-scrollbar-thumb:horizontal {
        background: #3B82F6;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:horizontal:hover {
        background: #2563EB;
      }
      
      /* For Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #3B82F6 #f8fafc;
      }
      
      /* Ensure scrollbars are always visible */
      body {
        overflow: auto !important;
      }
      
      /* Global smooth scrolling */
      html {
        scroll-behavior: smooth;
      }
      
      /* Optional: Style for specific containers */
      .always-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #3B82F6 #f8fafc;
      }
      
      .always-scrollbar::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      
      .always-scrollbar::-webkit-scrollbar-track {
        background: #f8fafc;
        border-radius: 3px;
      }
      
      .always-scrollbar::-webkit-scrollbar-thumb {
        background: #3B82F6;
        border-radius: 3px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default CustomScrollBar;