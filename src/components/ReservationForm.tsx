import React, { useState } from 'react';

export const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Handle form submission here
    alert('Reservation request submitted!');
  };

  return (
    <section className="w-full mt-[124px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-[64px] font-bold text-center max-md:max-w-full max-md:text-[40px] text-[rgba(248,228,190,1)]">
        Reserve a Table
      </h2>
      <div className="bg-[rgba(173,113,74,0.35)] flex w-full flex-col overflow-hidden items-center justify-center px-[70px] py-[55px] max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[1196px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[44%] max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/a0ba0536f03cf7019d46dba5ed2783b833cca83c?placeholderIfAbsent=true"
                className="aspect-[0.91] object-contain w-full grow max-md:max-w-full max-md:mt-10"
                alt="Restaurant interior"
              />
            </div>
            <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
              <form
                onSubmit={handleSubmit}
                className="min-h-[410px] w-full self-stretch font-normal my-auto max-md:max-w-full max-md:mt-10"
              >
                <div className="bg-white border flex min-h-[54px] w-full items-center gap-3 overflow-hidden text-[21px] text-[rgba(157,135,129,1)] whitespace-nowrap flex-wrap pl-3 pr-6 py-3.5 rounded-xl border-[rgba(214,214,214,1)] border-solid max-md:max-w-full max-md:pr-5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/09c924a21ec5d18a295b0b1220fe5a4471a364ea?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                    alt="Calendar icon"
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="self-stretch my-auto bg-transparent outline-none flex-1"
                    placeholder="Date"
                    required
                  />
                </div>
                
                <div className="flex w-full gap-[37px] text-[21px] text-[rgba(157,135,129,1)] whitespace-nowrap flex-wrap mt-[34px] max-md:max-w-full">
                  <div className="bg-white border flex min-w-60 items-center gap-3 overflow-hidden flex-1 shrink basis-[0%] pl-3 pr-6 py-3.5 rounded-xl border-[rgba(214,214,214,1)] border-solid max-md:pr-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/98a7b436989820fcb31c3d56d33b4dfbfec8cca6?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="Clock icon"
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="self-stretch my-auto bg-transparent outline-none flex-1"
                      placeholder="Time"
                      required
                    />
                  </div>
                  <div className="bg-white border relative flex min-w-60 items-center gap-3 overflow-hidden flex-1 shrink basis-[0%] pl-3 pr-6 py-3.5 rounded-xl border-[rgba(214,214,214,1)] border-solid max-md:pr-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/b94829799ecaa3f6b35e6b356be7ed0faf389d4f?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch z-0 shrink-0 my-auto"
                      alt="Guest icon"
                    />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="self-stretch z-0 my-auto bg-transparent outline-none flex-1"
                      required
                    >
                      <option value="">Guest</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/c9de8702d47e9cd88993c546bb2ba7a53e8e5cf0?placeholderIfAbsent=true"
                      className="aspect-[0.96] object-contain w-[23px] absolute z-0 shrink-0 translate-x-[0%] -translate-y-2/4 h-6 right-[17px] top-2/4"
                      alt="Dropdown arrow"
                    />
                  </div>
                </div>
                
                <div className="flex w-full gap-[37px] text-[21px] text-[rgba(157,135,129,1)] mt-[34px] max-md:max-w-full">
                  <div className="bg-white border flex min-w-60 w-full items-center gap-3 overflow-hidden flex-wrap flex-1 shrink basis-[0%] pl-3 pr-6 py-3.5 rounded-xl border-[rgba(214,214,214,1)] border-solid max-md:max-w-full max-md:pr-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/3dc4b326a57edaf802f81954b730380a99bdf364?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="User icon"
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="self-stretch my-auto bg-transparent outline-none flex-1"
                      placeholder="your name"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex w-full gap-[37px] text-[21px] text-[rgba(157,135,129,1)] mt-[34px] max-md:max-w-full">
                  <div className="bg-white border flex min-w-60 w-full items-center gap-3 overflow-hidden flex-wrap flex-1 shrink basis-[0%] pl-3 pr-6 py-3.5 rounded-xl border-[rgba(214,214,214,1)] border-solid max-md:max-w-full max-md:pr-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/b73473093cafe687e877440a515a567f1cbf5ad9?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="Phone icon"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="self-stretch my-auto bg-transparent outline-none flex-1"
                      placeholder="your phone"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex w-full gap-5 flex-wrap mt-[34px] max-md:max-w-full">
                  <div className="bg-white border flex min-w-60 items-center gap-3 overflow-hidden text-[21px] text-[rgba(157,135,129,1)] w-[322px] pl-3 pr-6 py-3.5 rounded-xl border-[rgba(214,214,214,1)] border-solid max-md:pr-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/76f298b0f8ad939cc3cf216e46fe6d44aa81ed85?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="Email icon"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="self-stretch my-auto bg-transparent outline-none flex-1"
                      placeholder="your email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="justify-center items-center bg-[rgba(247,225,188,0.10)] flex min-h-[55px] gap-3 overflow-hidden text-2xl text-[rgba(248,228,190,1)] whitespace-nowrap flex-1 shrink basis-[0%] pl-3 pr-6 py-3 rounded-[49px] border-2 border-solid border-[#E0A872] max-md:pr-5 hover:bg-[rgba(247,225,188,0.2)] transition-colors"
                  >
                    <span className="self-stretch my-auto">reserve</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
