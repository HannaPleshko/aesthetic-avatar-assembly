
import React from 'react';

export const OfferSection = () => {
  return (
    <section className="w-full max-w-full">
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-8 lg:px-0 py-8 lg:py-16">
        <h2 className="text-[rgba(248,228,190,1)] text-3xl sm:text-4xl lg:text-[56px] font-bold leading-loose mb-8 lg:mb-12 text-center lg:text-left font-kaushan">
          offer
        </h2>
        <div className="bg-[rgba(173,113,74,0.35)] overflow-hidden rounded-[35px] p-4 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-full lg:w-[63%] order-2 lg:order-1">
              <div className="flex flex-col text-[rgba(248,228,190,1)] font-normal text-center lg:text-left">
                <div className="text-2xl lg:text-[32px] leading-relaxed lg:leading-[70px] mb-4">
                  <span className="text-[rgba(248,228,190,1)]">up to </span>
                  <span className="text-3xl lg:text-[48px] text-[rgba(248,228,190,1)]">50%</span>
                  <span className="text-[rgba(248,228,190,1)]"> off</span>
                </div>
                <p className="text-white text-lg leading-relaxed mb-6 lg:mb-[53px]">
                  At our cafe, we take pride in providing our customers with
                  the best coffee around. Our carefully-selected coffees
                  come from some of the most renowned coffee growing regions
                  in the world, ensuring that each cup is unrivaled in
                  flavor and freshness.
                </p>
                <button className="bg-[rgba(247,225,188,0.3)] flex items-center gap-2.5 overflow-hidden text-xl lg:text-2xl justify-center px-6 lg:px-9 py-3 rounded-[49px] hover:bg-[rgba(247,225,188,0.4)] transition-colors w-fit mx-auto lg:mx-0">
                  <span className="self-stretch my-auto">shop now</span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[37%] order-1 lg:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9ed2d7343363cd3cf2f278a18ffbfde0bc7bbed7?placeholderIfAbsent=true"
                className="aspect-[1.09] object-contain w-full shadow-[19px_0px_24px_rgba(0,0,0,0.25)] rounded-2xl"
                alt="Coffee offer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
