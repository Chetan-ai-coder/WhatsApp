'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MobileBlocker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      
      // Comprehensive mobile detection
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|small|x11|sm|mm|sy|cq|cm|cx|ce|oh|ts|lg|um|xi|xo|xu/i;
      const isTouchDevice = () => {
        return (
          (navigator.maxTouchPoints > 0) ||
          ((navigator as any).msMaxTouchPoints > 0)
        );
      };

      // Check for common mobile screen sizes
      const screenWidth = window.innerWidth;
      const isMobileScreenSize = screenWidth < 768; // < tablet breakpoint
      
      const isMobileDevice = mobileRegex.test(userAgent) || isTouchDevice();
      
      return isMobileDevice && isMobileScreenSize;
    };

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    // Initial check
    setIsMobile(checkIsMobile());

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-sm">
        <Image
          src="/icons/whatsapp-logo-full.svg"
          alt="WhatsApp"
          width={80}
          height={80}
          className="w-20 h-20"
        />
        
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white">WhatsApp Web</h1>
          <p className="text-gray-300 text-base">
            WhatsApp Web is designed for desktop and tablet use only.
          </p>
          <p className="text-gray-400 text-sm">
            Please use WhatsApp on your phone or open this link on a desktop or tablet device.
          </p>
        </div>

        <div className="mt-8 space-y-3 w-full">
          <button
            onClick={() => {
              // Redirect to WhatsApp download
              window.open('https://www.whatsapp.com/download', '_blank');
            }}
            className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Download WhatsApp
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Refresh
          </button>
        </div>

        <p className="text-gray-500 text-xs mt-8">
          For security reasons, WhatsApp Web is not available on mobile devices.
        </p>
      </div>
    </div>
  );
}
