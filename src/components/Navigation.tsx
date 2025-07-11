import React from 'react';

export const Navigation = () => {
  return (
    <header className="relative z-10 flex w-full items-center justify-between px-[34px] max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/32eb3d426dc7534083fe659b4cbec1378c2157a9?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[72px] self-stretch z-0 shrink-0 my-auto"
        alt="Elza Coffee Logo"
      />
      <nav className="self-stretch relative z-0 flex min-w-60 items-center gap-[30px] text-xl text-[rgba(255,248,232,1)] font-normal whitespace-nowrap justify-between w-[618px] my-auto pl-[30px] py-[30px] max-md:max-w-full">
        <div className="absolute z-0 flex w-[86px] shrink-0 h-[75px] rounded-[0px_0px_30px_30px] left-[15px] top-0" />
        <a href="#home" className="self-stretch z-0 my-auto hover:text-[rgba(218,187,158,1)] transition-colors">
          Home
        </a>
        <a href="#menu" className="self-stretch z-0 my-auto hover:text-[rgba(218,187,158,1)] transition-colors">
          menu
        </a>
        <a href="#services" className="self-stretch z-0 my-auto hover:text-[rgba(218,187,158,1)] transition-colors">
          services
        </a>
        <a href="#product" className="self-stretch z-0 my-auto hover:text-[rgba(218,187,158,1)] transition-colors">
          product
        </a>
        <a href="#blog" className="self-stretch z-0 my-auto hover:text-[rgba(218,187,158,1)] transition-colors">
          blog
        </a>
        <a href="#contact" className="self-stretch z-0 my-auto hover:text-[rgba(218,187,158,1)] transition-colors">
          contact
        </a>
      </nav>
      <div className="absolute z-0 flex gap-[7px] right-[670px] bottom-[31px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/f3f059b3c54fbb27e1e5237cc82df77aa0bc167e?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0"
          alt="Social Icon 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/71e1e75126ff7d292df68bba7b6db5385ab105ff?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0"
          alt="Social Icon 2"
        />
      </div>
    </header>
  );
};
