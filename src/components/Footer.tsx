import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full mt-[109px] max-md:max-w-full max-md:mt-10">
      <div className="flex w-full flex-col overflow-hidden items-stretch pt-[67px] max-md:max-w-full">
        <div className="flex items-center gap-2.5 overflow-hidden text-base text-black font-normal justify-center mr-[88px] max-md:mr-2.5">
          <div className="self-stretch my-auto">
            <span className="text-[rgba(255,243,224,1)]">social media:</span>
          </div>
          <a href="#" className="hover:scale-110 transition-transform" aria-label="Social media 1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/635c10ded504336381230822034cc7e585d54241?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
              alt="Social media icon"
            />
          </a>
          <a href="#" className="hover:scale-110 transition-transform" aria-label="Social media 2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/c426fdd34be747ce7afe62ea325b48a536c0c847?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
              alt="Social media icon"
            />
          </a>
          <a href="#" className="hover:scale-110 transition-transform" aria-label="Social media 3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/5ed66b0169d0c291e8b7db429013117b3c547496?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
              alt="Social media icon"
            />
          </a>
        </div>
        <div className="bg-[rgba(83,53,41,1)] w-full overflow-hidden max-md:max-w-full">
          <div className="bg-blend-lighten w-full pb-3.5 max-md:max-w-full max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[23%] max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/5eca821f8be8147e13b11d5059f476ded7260a38?placeholderIfAbsent=true"
                  className="aspect-[0.68] object-contain w-[323px] mt-[-51px] shrink-0 max-w-full grow"
                  alt="Elza Coffee logo"
                />
              </div>
              <div className="w-[77%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col items-stretch text-base font-normal mt-[103px] max-md:max-w-full max-md:mt-10">
                  <nav className="flex items-center gap-[40px_41px] text-[rgba(255,243,224,1)] justify-center flex-wrap max-md:max-w-full">
                    <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center my-auto px-[30px] py-5 max-md:px-5">
                      <h3 className="text-xl">about</h3>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">our story</a>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">FAQ</a>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">careers</a>
                    </div>
                    <div className="self-stretch flex min-w-60 flex-col overflow-hidden items-stretch justify-center my-auto px-[30px] py-5 max-md:px-5">
                      <h3 className="text-xl">customer recourses</h3>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">menu</a>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">locations</a>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">support</a>
                    </div>
                    <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center my-auto px-[30px] py-5 max-md:px-5">
                      <h3 className="text-xl">services</h3>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">payment options</a>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">refunds & exchanges</a>
                      <a href="#" className="mt-7 hover:text-[rgba(218,187,158,1)] transition-colors">limitation of liability</a>
                    </div>
                    <address className="self-stretch flex min-w-60 flex-col overflow-hidden my-auto px-[30px] py-5 max-md:px-5 not-italic">
                      <div className="self-stretch flex items-center gap-2.5 overflow-hidden px-2 py-2.5">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9180f363af96a1ddafd80b450cd70654d1593866?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                          alt="Location icon"
                        />
                        <div className="self-stretch my-auto">
                          12 jhon Avenue #35 - new York
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap mt-7 px-2 py-2.5">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/f8b330954e86b80a537386ee18bd1e4115939a61?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                          alt="Email icon"
                        />
                        <a href="mailto:elizacoffee@coffee.com" className="self-stretch my-auto hover:text-[rgba(218,187,158,1)] transition-colors">
                          elizacoffee@coffee.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5 overflow-hidden font-bold mt-7 px-2 py-2.5">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/24549c9eb049755d4a0d2e7759de2dff90089661?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                          alt="Phone icon"
                        />
                        <a href="tel:+1-222-34-eliza" className="self-stretch my-auto hover:text-[rgba(218,187,158,1)] transition-colors">
                          <span className="font-normal">+1-222-34-</span>
                          <span className="font-normal uppercase">eliza</span>
                        </a>
                      </div>
                    </address>
                  </nav>
                  <div className="flex flex-col items-center text-[#fff3e0] justify-center ml-[171px] mt-[25px] max-md:ml-2.5">
                    <div>Created By Elinaui9</div>
                    <div className="mt-1.5">
                      Copyright 2023 Eliza Coffee . All rights reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
