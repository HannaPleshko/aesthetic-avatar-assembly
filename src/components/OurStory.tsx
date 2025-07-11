
import React, { useState, useEffect } from 'react';

export const OurStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/2879ce83c812d13c7e17c175e90a7eaf3ecf0c8d?placeholderIfAbsent=true",
      text: "Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9ed2d7343363cd3cf2f278a18ffbfde0bc7bbed7?placeholderIfAbsent=true",
      text: "Our journey began in 2015 when our founder discovered the perfect blend of tradition and innovation. We source our beans directly from small family farms around the world, ensuring fair trade practices and sustainable farming methods."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/a0ba0536f03cf7019d46dba5ed2783b833cca83c?placeholderIfAbsent=true",
      text: "Today, Eliza Coffee stands as a testament to quality and craftsmanship. Our state-of-the-art roasting facility combines traditional techniques with modern technology to bring out the unique flavors of each bean."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full max-w-full">
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-8 lg:px-0 py-8 lg:py-16">
        <h2 className="text-[rgba(248,228,190,1)] text-3xl sm:text-4xl lg:text-[54px] font-bold leading-tight lg:leading-[113px] mb-8 lg:mb-12 text-center lg:text-left font-caveat">
          our story
        </h2>
        <div className="flex w-full flex-col items-stretch justify-center px-2 py-[7px] rounded-[35px] max-w-full">
          <div className="bg-[rgba(173,113,74,0.35)] overflow-hidden rounded-[35px] max-w-full">
            <div className="flex flex-col lg:flex-row items-center gap-5 p-6 lg:p-8">
              <div className="w-full lg:w-[44%] order-2 lg:order-1">
                <img
                  src={slides[currentSlide].image}
                  className="aspect-square object-cover w-full rounded-2xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
                  alt="Coffee story illustration"
                />
              </div>
              <div className="w-full lg:w-[56%] order-1 lg:order-2 lg:ml-5">
                <div className="flex flex-col items-stretch font-inter font-normal py-6 lg:py-8 min-h-[200px] justify-center">
                  <p className="text-white text-lg leading-relaxed mb-8 lg:mb-12 px-4 lg:px-0 text-center lg:text-left transition-all duration-500 ease-in-out">
                    {slides[currentSlide].text}
                  </p>
                  <button className="text-white text-lg leading-none underline decoration-solid capitalize border border-white border-solid px-6 py-3 rounded-lg hover:text-[rgba(218,187,158,1)] hover:bg-white/10 transition-all duration-300 w-fit mx-auto lg:mx-0">
                    more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 mt-8 justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`flex w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-[rgba(215,176,160,1)] scale-125' 
                  : 'bg-[rgba(116,79,64,1)] hover:bg-[rgba(160,120,100,1)]'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
