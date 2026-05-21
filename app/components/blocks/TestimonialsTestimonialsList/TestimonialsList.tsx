import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Star, MessageSquare } from "lucide-react";

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

  return (
    <section className="relative py-20 bg-base-100">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
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

        {/* Testimonials Grid */}
        {items && items.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item: any, idx: number) => {
              if (!item) return null;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-card border border-neutral/10 shadow-md hover:shadow-lg transition-all duration-300 relative"
                >
                  <div>
                    {/* Star Rating */}
                    {item.rating && (
                      <div className="mb-4">
                        <MiniStarRating rating={item.rating} />
                      </div>
                    )}

                    {/* Quote */}
                    <p
                      className="text-sm text-neutral/80 italic leading-relaxed mb-6"
                      data-tina-field={tinaField(item, "quote")}
                    >
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-3 border-t border-neutral/10 pt-4 mt-auto">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.authorName}
                        className="w-10 h-10 rounded-full object-cover border border-secondary/20"
                        data-tina-field={tinaField(item, "avatar")}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20 text-primary font-bold text-sm">
                        {item.authorName ? item.authorName.charAt(0) : "C"}
                      </div>
                    )}
                    <div>
                      <div
                        className="font-semibold text-primary text-xs"
                        data-tina-field={tinaField(item, "authorName")}
                      >
                        {item.authorName}
                      </div>
                      <div className="text-[10px] text-neutral/60">
                        <span data-tina-field={tinaField(item, "authorRole")}>{item.authorRole}</span>
                        <span className="mx-1">•</span>
                        <span 
                          className="font-medium text-secondary"
                          data-tina-field={tinaField(item, "companyType")}
                        >
                          {item.companyType}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
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
