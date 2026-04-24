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
      <div className="absolute inset-0 bg-black/22" />
      <div className="relative z-10 mx-auto max-w-[20rem] space-y-8 px-5 text-center md:max-w-4xl md:space-y-10 md:px-6">
        <div className={`transition-all duration-[1.5s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} space-y-4 md:space-y-6`}>
          <p className="font-display text-[2rem] leading-tight text-white sm:text-4xl md:text-5xl" style={{ textShadow: '0 2px 12px hsl(220 20% 8% / 0.6)' }}>
            ชีวิตจริงที่{' '}
          <span className="mt-2 block text-[3.75rem] leading-[1.08] text-white sm:text-6xl md:mt-0 md:inline-block md:text-7xl" style={{ textShadow: '0 2px 12px hsl(220 20% 8% / 0.6)' }}>
            Wonderful
          </span>{' '}
            ได้ทุกวัน
          </p>
          <p className="font-body text-base text-white/90 sm:text-xl md:text-2xl" style={{ textShadow: '0 2px 8px hsl(220 20% 8% / 0.6)' }}>
            ที่ <span className="tracking-[0.08em] text-white md:tracking-wider" style={{ textShadow: '0 2px 8px hsl(220 20% 8% / 0.6)' }}>คอนโด SUPALAI</span>
          </p>
        </div>
        <div className={`transition-all duration-[2s] delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mx-auto h-16 w-px animate-pulse bg-gold-light/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
