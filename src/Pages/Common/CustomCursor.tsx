import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isWhiteBg, setIsWhiteBg] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    // Update mouse position
    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Check background color at cursor position
      checkBackgroundColor(e.clientX, e.clientY);
    };

    // Check if element under cursor has white background or white image
    const checkBackgroundColor = (x: number, y: number) => {
      const element = document.elementFromPoint(x, y) as HTMLElement;
      if (!element) return;
      
      // Get computed background color
      const bgColor = window.getComputedStyle(element).backgroundColor;
      
      // Check if it's an image element
      const isImageElement = 
        element.tagName === 'IMG' || 
        element.tagName === 'PICTURE' ||
        element.querySelector('img');
      
      // Check if background is white (rgb(255, 255, 255) or #ffffff)
      const isWhiteBackground = 
        bgColor === 'rgb(255, 255, 255)' || 
        bgColor === '#ffffff' ||
        bgColor === '#fff' ||
        // Handle rgba white
        bgColor.startsWith('rgba(255, 255, 255') ||
        // Handle other white variations
        element.classList.contains('bg-white') ||
        element.closest('.bg-white') !== null;

      // Check for white images
      let isWhiteImage = false;
      if (isImageElement) {
        const imgElement = element.tagName === 'IMG' 
          ? element as HTMLImageElement 
          : element.querySelector('img') as HTMLImageElement;
        
        if (imgElement) {
          isWhiteImage = isImageMostlyWhite(imgElement, x, y);
        }
      }

      setIsWhiteBg(isWhiteBackground || isWhiteImage);
    };

    // Check if image is mostly white at cursor position
    const isImageMostlyWhite = (img: HTMLImageElement, x: number, y: number): boolean => {
      // Create a canvas to analyze image pixels
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx || !img.complete || img.naturalWidth === 0) return false;

      try {
        // Set canvas size to image size
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        // Draw image to canvas
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        
        // Get image position and dimensions
        const rect = img.getBoundingClientRect();
        const scaleX = img.naturalWidth / rect.width;
        const scaleY = img.naturalHeight / rect.height;
        
        // Calculate image coordinates
        const imgX = Math.floor((x - rect.left) * scaleX);
        const imgY = Math.floor((y - rect.top) * scaleY);
        
        // Ensure coordinates are within image bounds
        if (imgX < 0 || imgY < 0 || imgX >= img.naturalWidth || imgY >= img.naturalHeight) {
          return false;
        }
        
        // Get pixel data at cursor position
        const pixel = ctx.getImageData(imgX, imgY, 1, 1).data;
        
        // Check if pixel is mostly white (RGB values close to 255)
        const isWhitePixel = pixel[0] > 200 && pixel[1] > 200 && pixel[2] > 200;
        
        return isWhitePixel;
      } catch (error) {
        console.warn('Could not analyze image pixel:', error);
        return false;
      }
    };

    // Smooth animation loop
    const animate = () => {
      // Dot follows cursor instantly
      dotX = mouseX;
      dotY = mouseY;

      // Ring follows with slight delay for smooth effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      // Apply transforms
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) scale(${isPointer ? 1.5 : 1})`;

      // Control visibility based on isPointer state
      if (isPointer) {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
      } else {
        dot.style.opacity = '1';
        ring.style.opacity = ringOpacity;
      }

      requestAnimationFrame(animate);
    };

    // Check if hovering over clickable element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    // Reset pointer state when mouse leaves clickable elements
    const handleMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget === null || 
          (e.relatedTarget as HTMLElement).tagName === 'HTML') {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, [isPointer]);

  // Determine colors based on background
  const dotColor = isWhiteBg ? '#CDAE64' : '#3B82F6';
  const ringColor = isWhiteBg ? '#CDAE64' : '#3B82F6';
  const ringOpacity = isWhiteBg ? '0.8' : '0.5';
  const shadowColor = isWhiteBg ? 'rgba(205, 174, 100, 0.6)' : 'rgba(59, 130, 246, 0.6)';

  return (
    <>
      {/* Small circle (cursor tip) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          opacity: isPointer ? 0 : 1
        }}
      >
        <div 
          className="w-2 h-2 rounded-full transition-colors duration-300"
          style={{
            backgroundColor: dotColor,
            boxShadow: `0 0 10px ${shadowColor}`
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          opacity: isPointer ? 0 : ringOpacity
        }}
      >
        <div 
          className="w-10 h-10 border-2 rounded-full transition-colors duration-300"
          style={{
            borderColor: ringColor
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;