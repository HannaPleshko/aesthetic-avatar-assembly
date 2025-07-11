import React from 'react';

export const HeroSection = () => {
  return (
    <section className="mt-[-86px] w-full max-md:max-w-full">
      <div className="flex w-full flex-col overflow-hidden px-20 max-md:max-w-full max-md:pl-5">
        <div className="flex flex-col relative min-h-[1081px] w-full max-w-[1290px] pr-20 pt-56 max-md:max-w-full max-md:pr-5 max-md:pt-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9646fb5565f8172ef6af06ca47bbe26d58bd46ae?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt="Coffee background"
          />
          <h1 className="relative text-[112px] font-bold max-md:max-w-full max-md:text-[40px] text-[rgba(255,248,232,1)]">
            elza coffee
          </h1>
          <p className="relative text-[rgba(218,187,158,1)] text-2xl font-normal leading-[47px] mt-[86px] max-md:max-w-full max-md:mt-10">
            Today's good mood is sponsored by coffee
            <br />
            search for your coffee now
          </p>
          <div className="relative flex w-[393px] max-w-full items-stretch gap-5 text-2xl text-[rgba(248,228,190,1)] font-normal justify-between mt-[86px] max-md:mt-10">
            <button className="bg-[rgba(247,225,188,0.3)] flex items-center gap-2.5 overflow-hidden justify-center px-9 py-3 rounded-[49px] max-md:px-5 hover:bg-[rgba(247,225,188,0.4)] transition-colors">
              <span className="self-stretch my-auto">shop now</span>
            </button>
            <button className="bg-[rgba(247,225,188,0.1)] flex items-center gap-2.5 overflow-hidden whitespace-nowrap justify-center px-9 py-3 rounded-[49px] max-md:px-5 hover:bg-[rgba(247,225,188,0.2)] transition-colors">
              <span className="self-stretch my-auto">catalog</span>
            </button>
          </div>
          <article className="relative bg-[rgba(74,39,33,0.85)] flex w-[366px] max-w-full items-stretch overflow-hidden text-center mt-[155px] pr-[22px] rounded-[50px_50px_0px_0px] max-md:mt-10 max-md:pr-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/16d4724511fc90475f597d74b08fad0cb4c5a740?placeholderIfAbsent=true"
              className="aspect-[0.96] object-contain w-full shadow-[17px_-7px_12px_rgba(0,0,0,0.25)]"
              alt="Coffee cup"
            />
            <div className="flex flex-col items-stretch mt-[107px] max-md:mt-10">
              <h2 className="text-[28px] font-medium capitalize bg-clip-text bg-[linear-gradient(251deg,#E0A872_13.76%,#F8E4BE_49.91%,#FFF3E0_58.47%,#E0A872_95.09%)]">
                but first coffee
              </h2>
              <button className="justify-center items-center flex gap-2 overflow-hidden text-[13px] text-[rgba(248,228,190,1)] font-normal mt-[45px] px-[9px] py-[5px] rounded-[49px] border-[0.902px] border-solid border-[#E0A872] max-md:mt-10 hover:bg-[rgba(224,168,114,0.1)] transition-colors">
                <span className="self-stretch my-auto">hurry up</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/00ace8551974faa0f57e0d35fc40114156884e30?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[22px] self-stretch shrink-0 my-auto"
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
