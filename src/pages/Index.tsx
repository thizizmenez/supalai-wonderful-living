import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import VideoSection from '@/components/VideoSection';
import TransitionText from '@/components/TransitionText';
import GallerySection from '@/components/GallerySection';
import ProjectListing from '@/components/ProjectListing';
import ClosingSection from '@/components/ClosingSection';

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <HeroBanner />
      <AboutSection />
      <VideoSection />
      <GallerySection />
      <ProjectListing />
      <ClosingSection />
    </div>
  );
};

export default Index;
