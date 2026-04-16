import { useScrollReveal } from '@/hooks/useScrollReveal';
import gallerySkyview from '@/assets/gallery-skyview.jpg';

const ClosingSection = () => {
  const { ref: r1, visible: v1 } = useScrollReveal(0.2);
  const { ref: r2, visible: v2 } = useScrollReveal(0.3);

  return (
    <section
      className="min-h-screen relative flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${gallerySkyview})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-10">
        <div ref={r1} className={`reveal ${v1 ? 'visible' : ''} space-y-6`}>
          <p className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            ชีวิตจริงที่ <span className="gold-text italic">Wonderful</span> ได้ทุกวัน
          </p>
          <p className="font-body text-xl md:text-2xl text-foreground/70">
            ที่ <span className="gold-text font-display tracking-wider">SUPALAI CONDOMINIUM</span>
          </p>
        </div>

        <div ref={r2} className={`reveal reveal-delay-2 ${v2 ? 'visible' : ''}`}>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
