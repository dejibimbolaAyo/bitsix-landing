import React, { useEffect, useState, useCallback } from "react";

interface CarouselSlideProps {
  image: string;
  alt?: string;
  isActive: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  image,
  alt,
  isActive,
}) => (
  <div
    className={`carousel-item absolute inset-0 transition-opacity duration-500 ${
      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
  >
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
);

interface NavigationButtonProps {
  direction: "prev" | "next";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  className = "",
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`btn btn-circle bg-white/20 border-none hover:bg-white/40 transition-all duration-200 ${className}`}
  >
    {direction === "prev" ? "❮" : "❯"}
  </button>
);

interface SlideIndicatorProps {
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const SlideIndicator: React.FC<SlideIndicatorProps> = ({
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full mx-1 transition-all duration-200 ${
      isActive ? "bg-primary" : "bg-white/30 hover:bg-white/50"
    }`}
  />
);

interface CarouselProps {
  slides: {
    image?: string;
    alt?: string;
    title?: string;
    description?: string;
  }[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    },
    [currentSlide, goToSlide]
  );

  const prevSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      const prev = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(prev);
    },
    [currentSlide, goToSlide]
  );

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => nextSlide(), 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Mouse enter/leave handlers for auto-play
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative group h-[400px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <CarouselSlide
            key={slide.image + index}
            {...slide}
            isActive={currentSlide === index}
          />
        ))}
      </div>

      {/* Fixed Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20">
        <NavigationButton
          direction="prev"
          onClick={prevSlide}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
        <NavigationButton
          direction="next"
          onClick={nextSlide}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <SlideIndicator
            key={index}
            isActive={currentSlide === index}
            onClick={(e) => {
              e.preventDefault();
              goToSlide(index);
            }}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 btn btn-circle btn-sm bg-white/20 border-none hover:bg-white/40 z-20"
      >
        {isAutoPlaying ? "⏸" : "▶"}
      </button>
    </div>
  );
};
