import { useEffect, useState } from 'react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroBanner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="h-screen relative flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-[1.5s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6">
            <span className="gold-text italic">SUPALAI</span>
          </h1>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-widest mb-8 text-foreground">
            CONDOMINIUM
          </h2>
        </div>
        <div className={`transition-all duration-[1.5s] delay-500 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-lg md:text-xl text-foreground/80 tracking-wide">
            ชีวิตจริงที่ Wonderful ได้ทุกวัน
          </p>
        </div>
        <div className={`mt-12 transition-all duration-[2s] delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-px h-16 bg-gold/50 mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
