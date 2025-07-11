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
    <section className="flex w-full flex-col overflow-hidden items-stretch justify-center mt-[75px] px-[132px] py-[67px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="w-full max-w-[1175px] max-md:max-w-full">
        <h2 className="text-[64px] font-bold max-md:text-[40px] text-[rgba(248,228,190,1)]">
          services
        </h2>
        <div className="flex gap-[40px_79px] text-base text-[rgba(248,228,190,1)] font-normal text-center justify-between flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
          {services.map((service, index) => (
            <article
              key={index}
              className={`${service.bgColor} flex min-h-[225px] flex-col overflow-hidden items-center justify-between w-[170px] px-8 py-10 rounded-[35px] max-md:px-5 hover:scale-105 transition-transform cursor-pointer`}
            >
              <img
                src={service.icon}
                className="aspect-[1] object-contain w-[107px] max-w-full"
                alt={`${service.title} icon`}
              />
              <div className="border mt-[18px] border-[rgba(248,228,190,1)] border-solid px-2 py-1">
                {service.title}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
