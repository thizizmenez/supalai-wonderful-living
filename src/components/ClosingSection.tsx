import { useScrollReveal } from '@/hooks/useScrollReveal';
import gallerySkyview from '@/assets/gallery-skyview.jpg';
import gallerySkyviewMobile from '@/assets/gallery-skyview-mobile.jpg';

const ClosingSection = () => {
  const { ref: r1, visible: v1 } = useScrollReveal(0.2);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${gallerySkyviewMobile})` }}
      />
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${gallerySkyview})` }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-10">
        <div ref={r1} className={`reveal ${v1 ? 'visible' : ''} space-y-6`}>
          <p className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            ชีวิตจริงที่ <span className="gold-text-bright text-5xl md:text-7xl">Wonderful</span> ได้ทุกวัน
          </p>
          <p className="font-body text-xl md:text-2xl text-foreground/70">
            ที่ <span className="font-display tracking-wider text-gold-light" style={{ fontFamily: "'Prompt', sans-serif" }}>คอนโด SUPALAI</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
