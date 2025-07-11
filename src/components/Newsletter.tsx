import React, { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <section className="w-full text-[21px] text-[rgba(248,228,190,1)] font-normal mt-[189px] max-md:max-w-full max-md:mt-10">
      <div className="bg-[rgba(173,113,74,0.35)] flex w-full flex-col overflow-hidden items-center justify-center px-20 py-[26px] max-md:max-w-full max-md:px-5">
        <div className="flex min-h-[305px] flex-col items-center justify-center px-[15px] py-[31px] max-md:max-w-full">
          <h2 className="text-center max-md:max-w-full">
            subscribe to our newsletter, discounts and promotions
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-[540px] mt-[54px] max-md:mt-10">
            <div className="bg-white border flex min-h-[54px] max-w-full w-full items-center gap-3 text-[rgba(157,135,129,1)] flex-wrap pl-3 pr-6 py-3.5 rounded-xl border-[rgba(214,214,214,1)] border-solid max-md:pr-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/2a1f6d5cf57f768f464d2bd8862e8a5d7bfe1143?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                alt="Email icon"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="self-stretch my-auto bg-transparent outline-none flex-1"
                placeholder="Your Email Address"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[rgba(247,225,188,0.3)] flex items-center gap-2.5 overflow-hidden text-2xl whitespace-nowrap justify-center mt-[54px] px-9 py-3 rounded-[49px] max-md:mt-10 max-md:px-5 hover:bg-[rgba(247,225,188,0.4)] transition-colors w-full"
            >
              <span className="self-stretch my-auto">subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
