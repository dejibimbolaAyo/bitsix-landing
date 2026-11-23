import React, { useState, useEffect, useCallback } from "react";
import { tinaField } from "tinacms/dist/react";
import { Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsListProps {
  data: any;
}

const MiniStarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex gap-0.5">
      {stars.map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-secondary text-secondary"
              : "text-neutral/20"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsTestimonialsList: React.FC<TestimonialsListProps> = ({ data }) => {
  const {
    testimonialsTestimonialsListTitle,
    testimonialsTestimonialsListSubtitle,
    items,
  } = data;

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const validItems = items?.filter(Boolean) || [];

  const visibleCount = 2;
  const maxIndex = Math.max(0, validItems.length - visibleCount);

  const goTo = useCallback((index: number) => {
    setCurrent(Math.min(index, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || validItems.length < 2) return;
    const interval = setInterval(() => next(), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next, validItems.length]);

  const renderCard = (item: any) => (
    <div className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-card border border-neutral/10 shadow-md h-full">
      <div>
        {item.rating && (
          <div className="mb-4">
            <MiniStarRating rating={item.rating} />
          </div>
        )}
        <p
          className="text-base sm:text-lg text-neutral/80 italic leading-relaxed"
          data-tina-field={tinaField(item, "quote")}
        >
          "{item.quote}"
        </p>
      </div>
      <div className="flex items-center gap-3 border-t border-neutral/10 pt-4 mt-8">
        {item.avatar ? (
          <img
            src={item.avatar}
            alt={item.authorName}
            className="w-10 h-10 rounded-full object-cover border border-primary/10"
            data-tina-field={tinaField(item, "avatar")}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 text-primary font-bold text-sm">
            {item.authorName ? item.authorName.charAt(0) : "P"}
          </div>
        )}
        <div>
          <div
            className="font-semibold text-primary text-xs"
            data-tina-field={tinaField(item, "authorName")}
          >
            {item.authorName || "Partner"}
          </div>
          <div className="text-[10px] text-neutral/60">
            {item.authorRole && <span data-tina-field={tinaField(item, "authorRole")}>{item.authorRole}</span>}
            {item.authorRole && item.companyType && <span className="mx-1">•</span>}
            {item.companyType && (
              <span
                className="font-medium text-primary"
                data-tina-field={tinaField(item, "companyType")}
              >
                {item.companyType}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="site-section bg-paper">
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              More Stories
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            data-tina-field={tinaField(data, "testimonialsTestimonialsListTitle")}
          >
            {testimonialsTestimonialsListTitle || "What Our Partners Say"}
          </h2>
          {testimonialsTestimonialsListSubtitle && (
            <p
              className="text-lg text-neutral/70"
              data-tina-field={tinaField(data, "testimonialsTestimonialsListSubtitle")}
            >
              {testimonialsTestimonialsListSubtitle}
            </p>
          )}
        </div>

        {/* Carousel */}
        {validItems.length > 0 ? (
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
              >
                {validItems.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="min-w-0 shrink-0"
                    style={{ width: `calc(${100 / visibleCount}% - ${6 * (visibleCount - 1) / visibleCount}rem)` }}
                  >
                    {renderCard(item)}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {validItems.length > visibleCount && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className="btn btn-circle btn-sm bg-white border border-neutral/10 shadow-md hover:bg-neutral-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 text-neutral-600" />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: maxIndex + 1 }, (_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === current
                          ? "bg-primary w-6"
                          : "bg-neutral/20 hover:bg-neutral/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  disabled={current >= maxIndex}
                  className="btn btn-circle btn-sm bg-white border border-neutral/10 shadow-md hover:bg-neutral-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4 text-neutral-600" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-neutral/50">
            No testimonials found.
          </div>
        )}

      </div>
    </section>
  );
};

export default TestimonialsTestimonialsList;
