import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Star, Quote, Sparkles } from "lucide-react";

interface FeaturedTestimonialsProps {
  data: any;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex gap-1">
      {stars.map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-secondary text-secondary"
              : "text-neutral/20"
          }`}
        />
      ))}
    </div>
  );
};

const FeaturedTestimonials: React.FC<FeaturedTestimonialsProps> = ({ data }) => {
  const {
    testimonialsFeaturedTestimonialsTitle,
    testimonialsFeaturedTestimonialsSubtitle,
    quote,
    authorName,
    authorRole,
    companyType,
    rating = 5,
    avatar,
  } = data;

  return (
    <section className="relative py-20 bg-base-200/50">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Executive Feedback
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            data-tina-field={tinaField(data, "testimonialsFeaturedTestimonialsTitle")}
          >
            {testimonialsFeaturedTestimonialsTitle || "Client Spotlight"}
          </h2>
          {testimonialsFeaturedTestimonialsSubtitle && (
            <p
              className="text-lg text-neutral/70"
              data-tina-field={tinaField(data, "testimonialsFeaturedTestimonialsSubtitle")}
            >
              {testimonialsFeaturedTestimonialsSubtitle}
            </p>
          )}
        </div>

        {/* Featured Testimonial Card */}
        {quote && (
          <div className="max-w-4xl mx-auto relative rounded-3xl bg-card border border-neutral/10 shadow-xl p-8 sm:p-12 md:p-16 overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-secondary/[0.02] to-transparent pointer-events-none" />
            
            {/* Big quote mark icon */}
            <Quote className="absolute top-10 left-10 w-24 h-24 text-secondary/[0.04] pointer-events-none transform -translate-x-4 -translate-y-4" />

            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* Star Rating */}
              <div className="mb-6 flex justify-center">
                <StarRating rating={rating} />
              </div>

              {/* Quote Quote */}
              <blockquote
                className="text-xl sm:text-2xl font-medium text-primary leading-relaxed mb-8 max-w-3xl"
                data-tina-field={tinaField(data, "quote")}
              >
                "{quote}"
              </blockquote>

              {/* Profile Details */}
              <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-neutral/10 pt-8 w-full justify-center">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={authorName}
                    className="w-14 h-14 rounded-full object-cover border border-secondary/20 shadow"
                    data-tina-field={tinaField(data, "avatar")}
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center border border-secondary/20 text-primary font-bold text-lg">
                    {authorName ? authorName.charAt(0) : "C"}
                  </div>
                )}
                <div className="text-center sm:text-left">
                  <div
                    className="font-bold text-primary text-base"
                    data-tina-field={tinaField(data, "authorName")}
                  >
                    {authorName}
                  </div>
                  <div className="text-xs text-neutral/70 flex flex-wrap justify-center sm:justify-start items-center gap-1.5">
                    <span data-tina-field={tinaField(data, "authorRole")}>{authorRole}</span>
                    <span className="hidden sm:inline text-neutral/30">•</span>
                    <span 
                      className="font-semibold text-secondary"
                      data-tina-field={tinaField(data, "companyType")}
                    >
                      {companyType}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedTestimonials;
