import React from 'react';

export const BlogSection = () => {
  const blogs = [
    {
      title: "how to make a great coffee",
      content: "Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French press, pour the measured grounds into the bottom of the press followed by hot water (between 195-205 degrees Fahrenheit). Let sit for three minutes before gently pushing down on the filter to trap the grounds at the bottom; this will create an intense flavor with slightly heavier body than filtered methods. If you have neither a French press nor filter, just pour your measured grounds directly into a mug or vessel and top with piping hot water. Give it a stir and let it sit for 3-4 minutes before consuming--but don't leave it too long as this method won't produce quite as bold of a flavor as either filtering or pressing would!",
      image: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/030c935a48b331f642d2c71864d390622a70b281?placeholderIfAbsent=true",
      hasChart: true
    },
    {
      title: "Why does caffeine make us stay awake?",
      content: "Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like dopamine that can make you feel more awake. The combination of these effects makes caffeine a stimulant that is all-too common in both food and drinks to give us an extra boost of energy when we need it most. It's no wonder why so many people rely on caffeinated beverages - it really can make us stay awake!",
      hasPercentages: true
    },
    {
      title: "Different types of coffee Explained",
      content: "Coffee is a staple in the lives of many and comes in a variety of forms. Whether you prefer hot or iced, espresso-based or filter, you're spoilt for choice. To help beginners navigate their first foray into the world of coffee, let's breakdown some basic categories: Espresso is an especially intense type of brewed coffee made by forcing pressurized water through finely ground beans. It has a strong flavor and can be used to make all manner of delicious drinks like flat whites, cappuccinos and lattes. Filter coffee is made with a paper filter that holds back most grounds before allowing the liquid to drip down into your cup. Its taste is less intense than that of espresso but still robust enough to serve with milk or flavored syrups if desired. Cold brew on the other hand isn't actually brewed using heat but rather steeped in cold water overnight to produce a smooth yet sweet drink - great over ice! Finally there's nitro which takes cold brew and injects it (through nitrogen) with carbon dioxide for an even creamier texture and slightly sweet flavor profile. No matter what you choose, chances are you won't be disappointed!",
      image: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/67268851122ee203953ac3e4273da427fb276762?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="flex w-full flex-col items-stretch mt-48 max-md:max-w-full max-md:mt-10">
      <h2 className="text-[64px] font-bold text-center max-md:max-w-full max-md:text-[40px] text-[rgba(248,228,190,1)]">
        our blog
      </h2>
      <div className="bg-[rgba(83,54,42,1)] relative flex h-[567px] w-full flex-col overflow-hidden max-md:max-w-full">
        <div className="self-stretch z-0 flex min-h-[565px] w-full items-center gap-[30px] overflow-hidden font-normal pl-[35px] py-[94px] max-md:pl-5">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-[rgba(153,125,108,1)] self-stretch flex min-w-60 flex-col overflow-hidden items-stretch w-[534px] my-auto pt-[21px] pb-10 px-[49px] rounded-[35px] max-md:max-w-full max-md:px-5"
            >
              <h3 className="text-white text-2xl leading-[52px] border border-white border-solid px-2 py-1">
                {blog.title}
              </h3>
              <p className="text-[rgba(246,229,218,1)] text-sm leading-8 mt-[19px] max-md:max-w-full max-md:mr-1.5">
                {blog.content}
              </p>
              <div className="flex items-start gap-5 justify-between mt-14 max-md:max-w-full max-md:mt-10">
                {blog.hasChart && (
                  <div className="text-[9px] text-black leading-5">
                    <img
                      src={blog.image}
                      className="aspect-[6.67] object-contain w-[233px] mx-2.5"
                      alt="Coffee composition chart"
                    />
                    <div className="flex min-h-6 gap-[7px] overflow-hidden mt-5 px-[11px] py-0.5">
                      <div className="bg-[rgba(255,231,207,1)] flex w-[18px] shrink-0 h-[18px] rounded-[50%]" />
                      <div>steamed milk</div>
                      <div className="bg-white flex w-[18px] shrink-0 h-[18px] rounded-[50%]" />
                      <div>milk foam</div>
                      <div className="bg-[rgba(83,58,47,1)] flex w-[18px] shrink-0 h-[18px] rounded-[50%]" />
                      <div>espersso</div>
                    </div>
                  </div>
                )}
                {blog.hasPercentages && (
                  <div className="flex items-center gap-3.5 overflow-hidden text-[13px] text-[rgba(248,228,190,1)] leading-7 justify-center grow shrink basis-auto">
                    <div className="self-stretch flex flex-col overflow-hidden items-center justify-center my-auto px-3.5 py-[9px]">
                      <div className="border border-[rgba(248,228,190,1)] border-solid px-2 py-1">
                        50%
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col overflow-hidden items-center justify-center my-auto px-3.5 py-[9px]">
                      <div className="border border-[rgba(248,228,190,1)] border-solid px-2 py-1">
                        75%
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col overflow-hidden items-center justify-center my-auto px-3.5 py-[9px]">
                      <div className="border border-[rgba(248,228,190,1)] border-solid px-2 py-1">
                        100%
                      </div>
                    </div>
                  </div>
                )}
                {blog.image && !blog.hasChart && (
                  <img
                    src={blog.image}
                    className="aspect-[3.97] object-contain w-[222px] max-w-full mt-14 max-md:mt-10"
                    alt="Coffee types illustration"
                  />
                )}
                <button className="text-white text-justify text-xl leading-none underline decoration-solid decoration-auto underline-offset-auto capitalize underline border mt-[53px] border-white border-solid max-md:mt-10 hover:text-[rgba(218,187,158,1)] transition-colors">
                  more
                </button>
              </div>
            </article>
          ))}
        </div>
        <button
          className="rotate-[3.141592653589793rad] absolute z-0 flex items-center gap-2.5 overflow-hidden px-3 py-1 right-[63px] bottom-6 hover:scale-110 transition-transform"
          aria-label="Previous blog posts"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/14901175367b5bd1bbafaae96d9c0ccb78f5f574?placeholderIfAbsent=true"
            className="aspect-[0.56] object-contain w-5 self-stretch my-auto"
            alt="Previous arrow"
          />
        </button>
      </div>
    </section>
  );
};
