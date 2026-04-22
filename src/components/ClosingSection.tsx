import { useScrollReveal } from '@/hooks/useScrollReveal';
import gallerySkyview from '@/assets/gallery-skyview.jpg';
import gallerySkyviewMobile from '@/assets/gallery-skyview-mobile.jpg';

const ClosingSection = () => {
  const { ref: r1, visible: v1 } = useScrollReveal(0.2);

  return (
    <section className="relative flex min-h-screen h-[100svh] items-center justify-center overflow-hidden">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${gallerySkyviewMobile})`, backgroundPosition: 'center 15%' }}
      />
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${gallerySkyview})` }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 mx-auto max-w-[20rem] space-y-8 px-5 text-center md:max-w-4xl md:space-y-10 md:px-6">
        <div ref={r1} className={`reveal ${v1 ? 'visible' : ''} space-y-4 md:space-y-6`}>
          <p className="font-display text-[2rem] leading-tight text-white sm:text-4xl md:text-5xl" style={{ textShadow: '0 2px 12px hsl(220 20% 8% / 0.6)' }}>
            ชีวิตจริงที่{' '}
            <span className="gold-text-on-image mt-2 block text-[3.75rem] leading-[0.9] sm:text-6xl md:mt-0 md:inline-block md:text-7xl">
              Wonderful
            </span>{' '}
            ได้ทุกวัน
          </p>
          <p className="font-body text-base text-white/90 sm:text-xl md:text-2xl" style={{ textShadow: '0 2px 8px hsl(220 20% 8% / 0.6)' }}>
            ที่ <span className="font-display tracking-[0.08em] text-white md:tracking-wider" style={{ fontFamily: "'Prompt', sans-serif" }}>คอนโด SUPALAI</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
