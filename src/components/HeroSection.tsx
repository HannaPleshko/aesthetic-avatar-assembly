
import React from 'react';

export const HeroSection = () => {
  return (
    <section className="mt-0 lg:mt-[-86px] w-full max-w-full">
      <div className="flex w-full flex-col overflow-hidden px-4 sm:px-8 lg:px-20 max-w-full">
        <div className="flex flex-col relative min-h-[70vh] lg:min-h-[1081px] w-full max-w-[1290px] mx-auto pr-0 lg:pr-20 pt-20 sm:pt-32 lg:pt-56 pb-8 lg:pb-0 max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9646fb5565f8172ef6af06ca47bbe26d58bd46ae?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0 rounded-3xl lg:rounded-none"
            alt="Coffee background"
          />
          <div className="absolute inset-0 bg-black/20 lg:bg-transparent rounded-3xl lg:rounded-none"></div>
          
          <div className="relative z-10 px-4 lg:px-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-[112px] font-bold leading-tight lg:leading-none text-[rgba(255,248,232,1)] mb-6 lg:mb-0">
              elza coffee
            </h1>
            <p className="text-[rgba(218,187,158,1)] text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed lg:leading-[47px] mt-6 lg:mt-[86px] mb-8 lg:mb-0 max-w-2xl mx-auto lg:mx-0">
              Today's good mood is sponsored by coffee
              <br />
              search for your coffee now
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-5 text-xl sm:text-2xl text-[rgba(248,228,190,1)] font-normal justify-center lg:justify-start mt-8 lg:mt-[86px] max-w-md mx-auto lg:mx-0 lg:max-w-none">
              <button className="bg-[rgba(247,225,188,0.3)] backdrop-blur-sm flex items-center gap-2.5 overflow-hidden justify-center px-6 sm:px-8 lg:px-9 py-3 rounded-[49px] hover:bg-[rgba(247,225,188,0.4)] transition-all duration-300 w-full sm:w-auto transform hover:scale-105">
                <span className="self-stretch my-auto">shop now</span>
              </button>
              <button className="bg-[rgba(247,225,188,0.1)] backdrop-blur-sm flex items-center gap-2.5 overflow-hidden whitespace-nowrap justify-center px-6 sm:px-8 lg:px-9 py-3 rounded-[49px] hover:bg-[rgba(247,225,188,0.2)] transition-all duration-300 w-full sm:w-auto transform hover:scale-105">
                <span className="self-stretch my-auto">catalog</span>
              </button>
            </div>
          </div>
          
          <article className="relative bg-[rgba(74,39,33,0.85)] backdrop-blur-sm flex w-full max-w-[366px] mx-auto lg:mx-0 items-stretch overflow-hidden text-center mt-12 lg:mt-[155px] pr-4 lg:pr-[22px] rounded-[50px_50px_0px_0px] transform hover:scale-105 transition-all duration-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/16d4724511fc90475f597d74b08fad0cb4c5a740?placeholderIfAbsent=true"
              className="aspect-[0.96] object-contain w-full shadow-[17px_-7px_12px_rgba(0,0,0,0.25)]"
              alt="Coffee cup"
            />
            <div className="flex flex-col items-stretch mt-16 sm:mt-20 lg:mt-[107px] pb-4 lg:pb-0">
              <h2 className="text-2xl sm:text-[28px] font-medium capitalize bg-clip-text text-transparent bg-gradient-to-r from-[#E0A872] via-[#F8E4BE] to-[#FFF3E0]">
                but first coffee
              </h2>
              <button className="justify-center items-center flex gap-2 overflow-hidden text-xs sm:text-[13px] text-[rgba(248,228,190,1)] font-normal mt-6 sm:mt-8 lg:mt-[45px] px-[9px] py-[5px] rounded-[49px] border-[0.902px] border-solid border-[#E0A872] hover:bg-[rgba(224,168,114,0.1)] transition-colors duration-300">
                <span className="self-stretch my-auto">hurry up</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/00ace8551974faa0f57e0d35fc40114156884e30?placeholderIfAbsent=true"
                  className="aspect-square object-contain w-5 sm:w-[22px] self-stretch shrink-0 my-auto"
                  alt="Arrow icon"
                />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
