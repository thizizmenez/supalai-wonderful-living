import { useEffect, useState } from 'react';
import heroBanner from '@/assets/hero-banner.jpg';
import heroBannerMobile from '@/assets/hero-banner-mobile.jpg';

const HeroBanner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen h-[100svh] items-center justify-center overflow-hidden">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${heroBannerMobile})`, backgroundPosition: 'center center' }}
      />
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="relative z-10 mx-auto max-w-[20rem] px-5 text-center md:max-w-4xl md:px-6">
        <div className={`transition-all duration-[2s] delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mx-auto h-16 w-px animate-pulse bg-gold-light/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
