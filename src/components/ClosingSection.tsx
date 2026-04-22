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
        style={{ backgroundImage: `url(${gallerySkyviewMobile})`, backgroundPosition: 'center center' }}
      />
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${gallerySkyview})` }}
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative z-10 mx-auto max-w-[20rem] space-y-8 px-5 text-center md:max-w-4xl md:space-y-10 md:px-6">
        <div ref={r1} className={`reveal ${v1 ? 'visible' : ''} space-y-4 md:space-y-6`}>
          <p className="font-display text-[2rem] leading-tight text-foreground sm:text-4xl md:text-5xl">
            ชีวิตจริงที่{' '}
            <span className="gold-text-bright mt-2 block text-[3.75rem] leading-[0.9] sm:text-6xl md:mt-0 md:inline-block md:text-7xl">
              Wonderful
            </span>{' '}
            ได้ทุกวัน
          </p>
          <p className="font-body text-base text-foreground/80 sm:text-xl md:text-2xl">
            ที่ <span className="font-display tracking-[0.08em] text-gold-light md:tracking-wider" style={{ fontFamily: "'Prompt', sans-serif" }}>คอนโด SUPALAI</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
