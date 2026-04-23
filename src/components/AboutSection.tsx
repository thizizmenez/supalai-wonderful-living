import { useScrollReveal } from '@/hooks/useScrollReveal';
import SkyEffects from './SkyEffects';

const AboutSection = () => {
  const { ref: r1, visible: v1 } = useScrollReveal(0.2);
  const { ref: r2, visible: v2 } = useScrollReveal(0.2);
  const { ref: r3, visible: v3 } = useScrollReveal(0.15);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background starlight-bg py-24 px-6 relative overflow-hidden">
      <SkyEffects starCount={45} showGlow={false} fullArea brightness={0.65} maxSize={1.8} minSize={0.5} glowIntensity={0.5} />
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
            <span className="text-foreground">คอนโด</span>{' '}
            <span className="text-gold-light">SUPALAI</span>
          </h2>
        </div>

        <div ref={r2} className={`reveal reveal-delay-1 ${v2 ? 'visible' : ''}`}>
          <p className="font-body text-xl md:text-2xl text-gold-light leading-relaxed mb-4">
            เพราะความ <span className="gold-shimmer text-4xl md:text-5xl">Wonderful</span> ไม่ได้อยู่แค่ในช่วงเวลาพิเศษ
          </p>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            แต่อยู่ในช่วงเวลาเล็กๆ ในวันธรรมดาๆ ด้วย
          </p>
        </div>

        <div ref={r3} className={`reveal reveal-delay-2 ${v3 ? 'visible' : ''} space-y-4`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-body">Standard Quality</span>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            เราเลือกโลเคชั่นมาอย่างดี ตั้งใจออกแบบพื้นที่ในทุกห้อง มีส่วนกลางที่รองรับหลากหลายไลฟ์สไตล์ พร้อมบริการที่พัฒนา<br />
            มาให้ทุกคนสะดวกสบาย กับคุณภาพมาตรฐานศุภาลัยที่ใส่ใจในทุกรายละเอียด
          </p>
          <div className="pt-6">
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
              เพื่อให้ชีวิตของคุณที่นี่ <span className="font-display italic text-xl md:text-2xl gold-shimmer">Wonderful</span> <span className="text-foreground/80">ได้ทุกวัน</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
