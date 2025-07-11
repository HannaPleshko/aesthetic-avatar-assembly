
import React from 'react';

export const PopularMenu = () => {
  return (
    <section className="flex w-full flex-col items-stretch text-center px-4 sm:px-8 lg:px-[126px] py-8 lg:py-[31px] max-w-full">
      <div className="w-full max-w-[1220px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-playfair font-bold mb-8 lg:mb-12 text-[rgba(248,228,190,1)]">
          popular menu
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/575c616fe40c32322137945ebb456299604301d8?placeholderIfAbsent=true"
          className="aspect-[1.44] object-contain w-full"
          alt="Popular menu items"
        />
      </div>
    </section>
  );
};
