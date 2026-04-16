import { useScrollReveal } from '@/hooks/useScrollReveal';

const AboutSection = () => {
  const { ref: r1, visible: v1 } = useScrollReveal(0.2);
  const { ref: r2, visible: v2 } = useScrollReveal(0.2);
  const { ref: r3, visible: v3 } = useScrollReveal(0.2);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
            <span className="gold-text">SUPALAI</span>{' '}
            <span className="text-foreground">CONDOMINIUM</span>
          </h2>
        </div>

        <div ref={r2} className={`reveal reveal-delay-1 ${v2 ? 'visible' : ''}`}>
          <p className="font-body text-xl md:text-2xl text-gold-light leading-relaxed mb-4">
            เพราะความ <span className="font-display italic text-2xl md:text-3xl gold-text">Wonderful</span> ไม่ได้อยู่แค่ในช่วงเวลาพิเศษ
          </p>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            แต่อยู่ในช่วงเวลาเล็กๆ ในวันธรรมดาๆ ด้วย
          </p>
        </div>

        <div ref={r3} className={`reveal reveal-delay-2 ${v3 ? 'visible' : ''} space-y-6`}>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
            ที่คอนโดศุภาลัย 18 แบรนด์ของเรา ไม่ว่าจะแบรนด์ไหน
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
            เราเลือกโลเคชันมาอย่างดี ตั้งใจออกแบบพื้นที่ในทุกห้อง
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
            มีส่วนกลางที่รองรับหลากหลายไลฟ์สไตล์ พร้อมบริการที่พัฒนามาให้ทุกคนสะดวกสบาย
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
            กับคุณภาพมาตรฐานศุภาลัยที่ใส่ใจในทุกรายละเอียด
          </p>
          <p className="font-body text-lg md:text-xl text-gold mt-8 leading-relaxed">
            เพื่อให้ชีวิตของคุณที่นี่ <span className="font-display italic text-xl md:text-2xl gold-text">Wonderful</span> ได้ทุกวัน
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
