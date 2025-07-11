
import React, { useState, useEffect } from 'react';

export const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely love the coffee here! The atmosphere is cozy and the staff is incredibly friendly. My morning routine wouldn't be the same without their amazing lattes.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9412d6e?w=100&h=100&fit=crop&crop=face",
      location: "New York"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Best coffee in town! The beans are fresh and the baristas really know their craft. I've been coming here for over a year and it never disappoints.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "San Francisco"
    },
    {
      name: "Emma Davis",
      rating: 4,
      comment: "Great place to work and enjoy quality coffee. The wifi is fast and the environment is perfect for productivity. Their pastries are also delicious!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "Los Angeles"
    },
    {
      name: "David Wilson",
      rating: 5,
      comment: "The coffee quality here is exceptional. You can really taste the difference in their carefully selected beans. The pour-over method they use is perfect.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Chicago"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="w-full max-w-full">
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-8 lg:px-0 py-8 lg:py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-bold text-center mb-8 lg:mb-16 text-[rgba(248,228,190,1)] font-kaushan">
          what our customers say
        </h2>
        
        <div className="relative bg-[rgba(173,113,74,0.35)] rounded-[35px] p-4 lg:p-8 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 lg:px-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center max-w-2xl mx-auto">
                  <div className="flex justify-center mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-white text-lg leading-relaxed mb-6 italic">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                    />
                    <div className="text-left">
                      <h4 className="text-[rgba(248,228,190,1)] font-semibold text-lg">
                        {review.name}
                      </h4>
                      <p className="text-[rgba(218,187,158,1)] text-sm">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? reviews.length - 1 : currentSlide - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % reviews.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-[rgba(215,176,160,1)] scale-125' 
                  : 'bg-[rgba(116,79,64,1)] hover:bg-[rgba(160,120,100,1)]'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
