import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { OurStory } from '@/components/OurStory';
import { Services } from '@/components/Services';
import { OfferSection } from '@/components/OfferSection';
import { ReservationForm } from '@/components/ReservationForm';
import { RecommendedProducts } from '@/components/RecommendedProducts';
import { PopularMenu } from '@/components/PopularMenu';
import { BlogSection } from '@/components/BlogSection';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-[rgba(34,21,24,1)] flex flex-col overflow-hidden items-stretch text-[rgba(248,228,190,1)]">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <OurStory />
        
        <Services />
        
        <OfferSection />
        
        <ReservationForm />
        
        <RecommendedProducts />
        
        <PopularMenu />
        
        <div className="flex w-full flex-col items-stretch justify-center mt-[69px] px-[124px] py-[42px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="flex flex-col relative min-h-[526px] w-full pt-[46px] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/298055e0a61a89631623d7c18eb298b17e5625b5?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Coffee shop interior"
            />
            <div className="relative z-10 flex shrink-0 h-[481px] rounded-[39px] max-md:max-w-full" />
          </div>
        </div>
        
        <BlogSection />
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
