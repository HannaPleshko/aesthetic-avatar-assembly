
import React from 'react';

export const OfferSection = () => {
  return (
    <section className="w-full overflow-hidden px-4 sm:px-8 lg:px-[126px] py-8 lg:py-[31px] max-w-full">
      <div className="w-full max-w-[1220px] mx-auto pt-[60px] max-md:pt-8">
        <div className="w-full pb-1.5 px-1.5 rounded-[35px] max-md:max-w-full">
          <h2 className="text-[rgba(248,228,190,1)] text-3xl sm:text-4xl lg:text-[56px] font-playfair font-bold leading-loose z-10 mt-[-46px] ml-[61px] max-md:text-center max-md:ml-0 max-md:mt-0 max-md:mb-8">
            offer
          </h2>
          <div className="bg-[rgba(173,113,74,0.35)] overflow-hidden px-[52px] py-[23px] rounded-[35px] max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[63%] max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col self-stretch text-[rgba(248,228,190,1)] font-inter font-normal my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-[32px] leading-[70px] font-playfair font-bold">
                    <span className="text-[rgba(248,228,190,1)]">up to </span>
                    <span className="text-[48px] text-[rgba(248,228,190,1)]">50%</span>
                    <span className="text-[rgba(248,228,190,1)]"> off</span>
                  </div>
                  <p className="text-white text-lg leading-[39px] self-stretch max-md:max-w-full">
                    At our cafe, we take pride in providing our customers with
                    the best coffee around. Our carefully-selected coffees
                    come from some of the most renowned coffee growing regions
                    in the world, ensuring that each cup is unrivaled in
                    flavor and freshness.
                  </p>
                  <button className="bg-[rgba(247,225,188,0.3)] flex items-center gap-2.5 overflow-hidden text-2xl justify-center mt-[53px] px-9 py-3 rounded-[49px] max-md:mt-10 max-md:px-5 hover:bg-[rgba(247,225,188,0.4)] transition-colors w-fit">
                    <span className="self-stretch my-auto font-inter">shop now</span>
                  </button>
                </div>
              </div>
              <div className="w-[37%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9ed2d7343363cd3cf2f278a18ffbfde0bc7bbed7?placeholderIfAbsent=true"
                  className="aspect-[1.09] object-contain w-full shadow-[19px_0px_24px_rgba(0,0,0,0.25)] grow max-md:mt-10"
                  alt="Coffee offer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
