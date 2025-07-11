import React from 'react';

export const PopularMenu = () => {
  return (
    <section className="self-center flex w-full max-w-[1339px] flex-col items-stretch text-[64px] font-bold text-center mt-[149px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
      <h2 className="max-md:text-[40px] text-[rgba(248,228,190,1)]">
        popular menu
      </h2>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/575c616fe40c32322137945ebb456299604301d8?placeholderIfAbsent=true"
        className="aspect-[1.44] object-contain w-full"
        alt="Popular menu items"
      />
    </section>
  );
};
