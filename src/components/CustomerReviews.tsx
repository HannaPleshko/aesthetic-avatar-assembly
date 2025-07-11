
import React, { useState, useEffect } from 'react';

export const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The coffee here is absolutely amazing! I've been a regular customer for over a year now, and the quality never disappoints. The baristas are knowledgeable and always make the perfect cup. Highly recommend their Ethiopian blend!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9932b32?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best coffee shop in town! The atmosphere is cozy, the staff is friendly, and the coffee is top-notch. I love coming here to work on my laptop. Their cold brew is exceptional, and the pastries are fresh every day.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "I'm a coffee connoisseur, and Eliza Coffee exceeds all my expectations. The single-origin beans are carefully selected, and you can taste the difference. The latte art is beautiful, and the service is impeccable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Outstanding experience every time! The coffee is consistently excellent, and the staff remembers my order. The ambiance is perfect for both casual meetings and quiet reading. Their espresso is the best in the city!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000); // Change review every 6 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-[126px] py-12 lg:py-[75px] max-w-full">
      <div className="w-full max-w-[1220px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-playfair font-bold text-center mb-12 lg:mb-16 text-[rgba(248,228,190,1)]">
          customer reviews
        </h2>
        
        <div className="bg-[rgba(173,113,74,0.35)] rounded-[35px] p-6 lg:p-12 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-32 h-32 lg:w-48 lg:h-48 flex-shrink-0 order-1 lg:order-1">
              <img
                src={reviews[currentReview].image}
                className="w-full h-full object-cover rounded-full shadow-2xl transition-all duration-500 ease-in-out"
                alt={`${reviews[currentReview].name} profile`}
              />
            </div>
            
            <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
              <div className="flex justify-center lg:justify-start mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              
              <blockquote className="text-white text-lg sm:text-xl lg:text-xl font-inter leading-relaxed mb-6 lg:mb-8 italic">
                "{reviews[currentReview].text}"
              </blockquote>
              
              <cite className="text-[rgba(248,228,190,1)] text-lg sm:text-xl lg:text-2xl font-playfair font-semibold not-italic">
                — {reviews[currentReview].name}
              </cite>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`flex w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                currentReview === index 
                  ? 'bg-[rgba(215,176,160,1)] scale-125' 
                  : 'bg-[rgba(116,79,64,1)] hover:bg-[rgba(160,120,100,1)]'
              }`}
              onClick={() => setCurrentReview(index)}
              aria-label={`Review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
