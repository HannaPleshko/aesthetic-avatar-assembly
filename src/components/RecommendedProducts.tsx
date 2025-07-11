
import React from 'react';

export const RecommendedProducts = () => {
  const products = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/7ed6bd5c4a9573e38085553ea5e1f4efecb352a3?placeholderIfAbsent=true",
      type: "arabica",
      roast: "dark roast",
      heartIcon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/df0108ce9240faae3727e71fe717575e72da8c6a?placeholderIfAbsent=true",
      cartIcon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/5e95b7f798c20a8be3b222e8e2787f58da2db65c?placeholderIfAbsent=true"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/deb3b8280cc98d9572e9c3744af8851361c93682?placeholderIfAbsent=true",
      type: "house blend",
      roast: "dark roast",
      heartIcon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/df0108ce9240faae3727e71fe717575e72da8c6a?placeholderIfAbsent=true",
      cartIcon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/2a31520b8fa7b18494b78634a7953bbc209144da?placeholderIfAbsent=true"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/a8d1a91182bcddd325d84d88c40bbbf9576bca55?placeholderIfAbsent=true",
      type: "Robusta",
      roast: "dark roast",
      heartIcon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/df0108ce9240faae3727e71fe717575e72da8c6a?placeholderIfAbsent=true",
      cartIcon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/73e4be1075a30083b26493d13afca86809c42c39?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="flex w-full flex-col items-stretch px-4 sm:px-8 lg:px-[126px] py-8 lg:py-[31px] max-w-full">
      <div className="w-full max-w-[1220px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-playfair font-bold text-center mb-8 lg:mb-12 text-[rgba(248,228,190,1)]">
          recommended
        </h2>
        <div className="flex w-full items-center gap-9 overflow-hidden text-lg text-white font-inter font-normal text-center leading-[34px] justify-center flex-wrap">
          {products.map((product, index) => (
            <article
              key={index}
              className="bg-[rgba(173,113,74,0.35)] self-stretch relative flex min-w-60 flex-col grow shrink w-[294px] my-auto rounded-[35px] hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={product.image}
                className="aspect-[1.09] object-contain w-[361px] self-center z-0 max-w-full"
                alt={`${product.type} coffee`}
              />
              <div className="bg-[rgba(255,255,255,0.15)] self-center z-0 flex min-h-[69px] w-full max-w-[367px] items-center overflow-hidden justify-between px-2.5 py-[18px] rounded-[0px_0px_35px_35px]">
                <div className="self-stretch flex items-center gap-3 overflow-hidden justify-center my-auto">
                  <div className="border self-stretch my-auto border-white border-solid px-2 py-1">
                    {product.type}
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/208e253f1dc57423d6ec29d00f4becf9b35171d3?placeholderIfAbsent=true"
                    className="aspect-[0.04] object-contain w-px self-stretch shrink-0 my-auto"
                    alt="Separator"
                  />
                  <div className="self-stretch my-auto">{product.roast}</div>
                </div>
              </div>
              <button
                className="aspect-[1] object-contain w-9 absolute z-0 h-9 right-[13px] bottom-[79px] hover:scale-110 transition-transform"
                aria-label="Add to cart"
              >
                <img
                  src={product.cartIcon}
                  className="w-full h-full"
                  alt="Add to cart"
                />
              </button>
              <button
                className="aspect-[1] object-contain w-6 absolute z-0 h-6 left-[23px] top-5 hover:scale-110 transition-transform"
                aria-label="Add to favorites"
              >
                <img
                  src={product.heartIcon}
                  className="w-full h-full"
                  alt="Add to favorites"
                />
              </button>
            </article>
          ))}
        </div>
        <div className="self-center flex gap-1.5 overflow-hidden mt-[57px] px-[26px] py-[9px] max-md:mt-10 max-md:px-5">
          <button
            className="aspect-[1] object-contain w-[45px] shrink-0 rounded-[30px] hover:scale-110 transition-transform"
            aria-label="Previous products"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/56714e9ea0501922fdd475d152beea2a19859dd1?placeholderIfAbsent=true"
              className="w-full h-full"
              alt="Previous"
            />
          </button>
          <button
            className="aspect-[1] object-contain w-[45px] shrink-0 hover:scale-110 transition-transform"
            aria-label="Next products"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/a1c8c7f4fcfac68bff6d571c27fe6cfb909b9082?placeholderIfAbsent=true"
              className="w-full h-full"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
