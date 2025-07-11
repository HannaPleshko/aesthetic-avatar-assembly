
import React from 'react';

export const Services = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9784ae9497007810f507d4c0e0f02d8f3f57fb15?placeholderIfAbsent=true",
      title: "equipment",
      bgColor: "bg-[rgba(84,55,42,1)]"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/416fdd5e04b218d8db568722630a2d240c027331?placeholderIfAbsent=true",
      title: "type of coffee",
      bgColor: "bg-[rgba(84,55,43,1)]"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/1a50b27db5170fda12e03c072095fb3d8b223f6a?placeholderIfAbsent=true",
      title: "take a way",
      bgColor: "bg-[rgba(84,55,43,1)]"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/224c8c56702f2289237a19f09dd10fd167fcc2d3?placeholderIfAbsent=true",
      title: "beans variant",
      bgColor: "bg-[rgba(84,55,43,1)]"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/04530c39b9b77fa15117b87ea299b73f0beec3db?placeholderIfAbsent=true",
      title: "pastry",
      bgColor: "bg-[rgba(84,55,43,1)]"
    }
  ];

  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch justify-center mt-12 lg:mt-[75px] px-4 sm:px-8 lg:px-[132px] py-8 lg:py-[67px] max-w-full">
      <div className="w-full max-w-[1175px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-bold text-center lg:text-left mb-8 lg:mb-16 text-[rgba(248,228,190,1)]">
          services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-[40px] text-sm sm:text-base text-[rgba(248,228,190,1)] font-normal text-center">
          {services.map((service, index) => (
            <article
              key={index}
              className={`${service.bgColor} flex min-h-[180px] sm:min-h-[200px] lg:min-h-[225px] flex-col overflow-hidden items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
            >
              <img
                src={service.icon}
                className="aspect-square object-contain w-16 sm:w-20 lg:w-[107px] max-w-full mb-4"
                alt={`${service.title} icon`}
              />
              <div className="border border-[rgba(248,228,190,1)] border-solid px-2 py-1 rounded text-xs sm:text-sm lg:text-base">
                {service.title}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
