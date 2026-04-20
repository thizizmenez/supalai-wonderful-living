import { useEffect, useState } from 'react';
import heroBanner from '@/assets/hero-banner.jpg';

// NOTE: heroBannerMobile currently reuses the desktop image as a placeholder.
// Replace with a portrait/mobile-optimized image when available.
const heroBannerMobile = heroBanner;

const HeroBanner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${heroBannerMobile})` }}
      />
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-10">
        <div className={`transition-all duration-[1.5s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} space-y-6`}>
          <p className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            ชีวิตจริงที่ <span className="gold-text-bright text-5xl md:text-7xl">Wonderful</span> ได้ทุกวัน
          </p>
          <p className="font-body text-xl md:text-2xl text-foreground/70">
            ที่ <span className={`font-display tracking-wider ${loaded ? 'gold-shimmer' : 'gold-text'}`} style={{ fontFamily: "'Prompt', sans-serif", fontStyle: 'normal' }}>SUPALAI CONDOMINIUM</span>
          </p>
        </div>
        <div className={`transition-all duration-[2s] delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-px h-16 bg-gold/50 mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
