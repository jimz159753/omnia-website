"use client";

import { useMediaQuery, useTheme } from "@/hooks/useCustomMediaQuery";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

const ImageCatalog: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="relative flex justify-center items-center">
        {/* Main Image Container */}
        <div style={{ width: "fit-content", position: "relative" }}>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            width={isMobile ? '100%' : 600}
            height={isMobile ? '100%' : 800}
            className="w-[350px] h-full object-cover select-none"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <FiChevronLeft
                className="text-white p-2 rounded-full z-10 cursor-pointer"
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  zIndex: 10,
                }}
                onClick={goToPrevious}
                color="black"
                size={40}
              />

              <FiChevronRight
                className="text-white p-2 rounded-full z-10 cursor-pointer"
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  zIndex: 10,
                }}
                onClick={goToNext}
                color="black"
                size={40}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCatalog;
