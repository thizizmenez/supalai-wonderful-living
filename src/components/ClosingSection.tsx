import { useScrollReveal } from '@/hooks/useScrollReveal';
import gallerySkyview from '@/assets/gallery-skyview.jpg';

const ClosingSection = () => {
  const { ref: r1, visible: v1 } = useScrollReveal(0.2);

  return (
    <section
      className="min-h-screen relative flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${gallerySkyview})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-10">
        <div ref={r1} className={`reveal ${v1 ? 'visible' : ''} space-y-6`}>
          <p className="font-display text-3xl md:text-5xl text-white leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
            ชีวิตจริงที่ <span className="gold-text-bright text-5xl md:text-7xl">Wonderful</span> ได้ทุกวัน
          </p>
          <p className="font-body text-xl md:text-2xl text-white/80" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            ที่ <span className="font-display tracking-wider gold-shimmer" style={{ fontFamily: "'Prompt', sans-serif" }}>SUPALAI CONDOMINIUM</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
