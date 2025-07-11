import React, { useState } from 'react';

export const OurStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="flex w-full flex-col items-stretch justify-center px-[126px] py-[31px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-[rgba(248,228,190,1)] text-[54px] font-bold leading-[113px] z-10 mr-[78px] max-md:text-[40px] max-md:leading-[92px] max-md:mr-2.5">
          our story
        </h2>
        <div className="flex w-full flex-col items-stretch justify-center px-2 py-[7px] rounded-[35px] max-md:max-w-full">
          <div className="bg-[rgba(173,113,74,0.35)] overflow-hidden pr-14 rounded-[35px] max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[44%] max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/2879ce83c812d13c7e17c175e90a7eaf3ecf0c8d?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-full shadow-[0px_240px_67px_rgba(32,19,22,0)] mt-[-55px] max-md:max-w-full max-md:mt-10"
                  alt="Coffee story illustration"
                />
              </div>
              <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col self-stretch items-stretch font-normal my-auto max-md:max-w-full max-md:mt-10">
                  <p className="text-white text-lg leading-[39px] max-md:max-w-full">
                    Eliza is an online coffee store that offers the widest
                    selection of specialty coffees and teas from around the
                    world. From medium-dark roast single origin to flavored
                    espresso beans, they offer a variety of ethically sourced
                    products to tantalize any customer's palate. For those
                    looking for unique brewing equipment, Eliza also carries a
                    full range of quality espresso makers, grinders, brewers,
                    French presses and more. On top of all that, their
                    baristas are highly trained professionals who know exactly
                    how to make the perfect cup for each customer. Whether
                    it's for home or business use, Eliza has you covered - all
                    conveniently available at the click of a button!
                  </p>
                  <button className="text-white text-justify text-xl leading-none underline decoration-solid decoration-auto underline-offset-auto capitalize underline border mt-[41px] border-white border-solid max-md:mr-0.5 max-md:mt-10 hover:text-[rgba(218,187,158,1)] transition-colors w-fit">
                    more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-[69px] items-stretch gap-2.5 mt-[33px]">
          <button
            className={`flex w-4 shrink-0 h-4 rounded-[50%] ${currentSlide === 0 ? 'bg-[rgba(215,176,160,1)]' : 'bg-[rgba(116,79,64,1)]'}`}
            onClick={() => setCurrentSlide(0)}
            aria-label="Slide 1"
          />
          <button
            className={`flex w-4 shrink-0 h-4 rounded-[50%] ${currentSlide === 1 ? 'bg-[rgba(215,176,160,1)]' : 'bg-[rgba(116,79,64,1)]'}`}
            onClick={() => setCurrentSlide(1)}
            aria-label="Slide 2"
          />
          <button
            className={`flex w-4 shrink-0 h-4 rounded-[50%] ${currentSlide === 2 ? 'bg-[rgba(215,176,160,1)]' : 'bg-[rgba(116,79,64,1)]'}`}
            onClick={() => setCurrentSlide(2)}
            aria-label="Slide 3"
          />
        </div>
      </div>
    </section>
  );
};
