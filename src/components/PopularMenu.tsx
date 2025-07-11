
import React from 'react';

export const PopularMenu = () => {
  return (
    <section className="w-full max-w-full">
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-8 lg:px-0 py-8 lg:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-bold mb-8 lg:mb-12 text-[rgba(248,228,190,1)] font-pacifico">
          popular menu
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/575c616fe40c32322137945ebb456299604301d8?placeholderIfAbsent=true"
          className="aspect-[1.44] object-contain w-full max-w-full rounded-2xl shadow-lg"
          alt="Popular menu items"
        />
      </div>
    </section>
  );
};
