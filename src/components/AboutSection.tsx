import { useScrollReveal } from '@/hooks/useScrollReveal';
import aboutDivider from '@/assets/about-divider.jpg';
import { MapPin, LayoutGrid, Trees, Shield } from 'lucide-react';
import SkyEffects from './SkyEffects';

const features = [
  { icon: MapPin, label: 'ทำเลคุณภาพ', desc: 'คัดเลือกทำเลศักยภาพอย่างพิถีพิถัน' },
  { icon: LayoutGrid, label: 'ออกแบบอย่างลงตัว', desc: 'ใส่ใจทุกพื้นที่ ทุกฟังก์ชันการใช้สอย' },
  { icon: Trees, label: 'ส่วนกลางครบครัน', desc: 'รองรับหลากหลายไลฟ์สไตล์' },
  { icon: Shield, label: 'มาตรฐานศุภาลัย', desc: 'ใส่ใจในทุกรายละเอียด' },
];

const AboutSection = () => {
  const { ref: r1, visible: v1 } = useScrollReveal(0.2);
  const { ref: r2, visible: v2 } = useScrollReveal(0.2);
  const { ref: r3, visible: v3 } = useScrollReveal(0.2);
  const { ref: r4, visible: v4 } = useScrollReveal(0.15);
  const { ref: r5, visible: v5 } = useScrollReveal(0.15);

  return (
    <>
      {/* Part 1: Headline + tagline */}
      <section className="min-h-screen flex items-center justify-center bg-background starlight-bg py-0 px-6 relative overflow-hidden">
        <SkyEffects starCount={120} showGlow={false} fullArea brightness={1.15} maxSize={3.5} minSize={1} glowIntensity={1.2} />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
              <span className="text-gold-light">SUPALAI</span>{' '}
              <span className="text-foreground">CONDOMINIUM</span>
            </h2>
          </div>

          <div ref={r2} className={`reveal reveal-delay-1 ${v2 ? 'visible' : ''}`}>
            <p className="font-body text-xl md:text-2xl text-gold-light leading-relaxed mb-4">
              เพราะความ <span className="gold-text-bright text-4xl md:text-5xl">Wonderful</span> ไม่ได้อยู่แค่ในช่วงเวลาพิเศษ
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              แต่อยู่ในช่วงเวลาเล็กๆ ในวันธรรมดาๆ ด้วย
            </p>
          </div>
        </div>
      </section>

      {/* Parallax image divider */}
      <section
        className="h-[70vh] relative bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${aboutDivider})` }}
      >
        
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div ref={r3} className={`reveal ${v3 ? 'visible' : ''} text-center px-6`}>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
              <span className="gold-text italic">Wonderful</span>
            </p>
            <p className="font-body text-lg md:text-xl text-foreground/90 mt-4">
              ในทุกช่วงเวลาของชีวิต
            </p>
          </div>
        </div>
      </section>

      {/* Part 2: Description - redesigned */}
      <section className="min-h-[80vh] flex items-center justify-center bg-background starlight-bg pt-24 pb-0 md:pb-24 px-6 relative overflow-hidden">
        <SkyEffects starCount={200} showGlow={false} fullArea brightness={1} maxSize={2.4} minSize={0.6} glowIntensity={0.8} />
        <div className="relative z-10 max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div ref={r4} className={`reveal ${v4 ? 'visible' : ''} text-center`}>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-3 tracking-widest uppercase">
              18 Brands
            </p>
            <p className="font-body text-xl md:text-2xl text-foreground/80 leading-relaxed">
              ที่คอนโดศุภาลัย 18 แบรนด์ของเรา ไม่ว่าจะแบรนด์ไหน
            </p>
            {/* Gold decorative line */}
            <div className="flex items-center justify-center mt-8 gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-2 h-2 rounded-full bg-primary/80" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </div>

          {/* Feature cards */}
          <div ref={r5} className={`${v5 ? '' : ''}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <div
                  key={f.label}
                  className={`stagger-item ${v5 ? 'visible' : ''} group flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/40 hover:bg-card transition-all duration-500`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <f.icon className="w-8 h-8 text-foreground/70 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <p className="font-display text-sm md:text-base text-foreground mb-2">{f.label}</p>
                  <p className="font-body text-xs md:text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom text with decorative lines */}
          <div className={`reveal ${v5 ? 'visible' : ''} text-center space-y-4`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-primary/60 text-sm tracking-[0.3em] uppercase font-body">Standard Quality</span>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              พร้อมบริการที่พัฒนามาให้ทุกคนสะดวกสบาย<br />
              และความใส่ใจในทุกรายละเอียด<br />
              ที่ทำให้การอยู่อาศัยของคุณลงตัวกว่าที่เคย
            </p>
            <div className="pt-6">
              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
                เพื่อให้ชีวิตของคุณที่นี่ <span className="font-display italic text-xl md:text-2xl gold-shimmer">Wonderful</span> <span className="text-foreground/80">ได้ทุกวัน</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
