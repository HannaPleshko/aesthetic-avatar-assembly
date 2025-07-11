
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { Services } from '../components/Services';
import { OurStory } from '../components/OurStory';
import { PopularMenu } from '../components/PopularMenu';
import { RecommendedProducts } from '../components/RecommendedProducts';
import { OfferSection } from '../components/OfferSection';
import { CustomerReviews } from '../components/CustomerReviews';
import { Newsletter } from '../components/Newsletter';

const Index = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(180deg, #221518 0%, #3D2527 50%, #221518 100%)'
    }}>
      <Navigation />
      <HeroSection />
      <Services />
      <OurStory />
      <PopularMenu />
      <RecommendedProducts />
      <OfferSection />
      <CustomerReviews />
      <Newsletter />
    </div>
  );
};

export default Index;
