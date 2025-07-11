
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { OurStory } from '@/components/OurStory';
import { Services } from '@/components/Services';
import { OfferSection } from '@/components/OfferSection';
import { ReservationForm } from '@/components/ReservationForm';
import { RecommendedProducts } from '@/components/RecommendedProducts';
import { PopularMenu } from '@/components/PopularMenu';
import { CustomerReviews } from '@/components/CustomerReviews';
import { BlogSection } from '@/components/BlogSection';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-[rgba(34,21,24,1)] flex flex-col overflow-hidden items-stretch text-[rgba(248,228,190,1)] min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        <HeroSection />
        
        <OurStory />
        
        <Services />
        
        <OfferSection />
        
        <ReservationForm />
        
        <RecommendedProducts />
        
        <PopularMenu />
        
        <CustomerReviews />
        
        <div className="flex w-full flex-col items-stretch justify-center mt-12 lg:mt-[69px] px-4 sm:px-8 lg:px-[124px] py-8 lg:py-[42px] max-w-full">
          <div className="flex flex-col relative min-h-[300px] sm:min-h-[400px] lg:min-h-[526px] w-full pt-8 lg:pt-[46px] max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/298055e0a61a89631623d7c18eb298b17e5625b5?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0 rounded-3xl lg:rounded-[39px]"
              alt="Coffee shop interior"
            />
            <div className="relative z-10 flex shrink-0 h-full rounded-3xl lg:rounded-[39px] max-w-full" />
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
