import { useScrollReveal } from '@/hooks/useScrollReveal';
import brandLogos from '@/assets/brand-logos.png';

const BrandSection = () => {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal(0.2);
  const { ref: logoRef, visible: logoVisible } = useScrollReveal(0.1);

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-16`}>
          <p className="font-body text-lg text-muted-foreground mb-4 tracking-widest uppercase">
            The Brand of
          </p>
          <h2 className="font-display text-3xl md:text-5xl">
            <span className="gold-text">SUPALAI</span>{' '}
            <span className="text-foreground">CONDOMINIUM</span>
          </h2>
        </div>

        <div ref={logoRef} className={`reveal ${logoVisible ? 'visible' : ''} flex justify-center`}>
          <img
            src={brandLogos}
            alt="Supalai Condominium Brand Logos"
            className="w-full max-w-4xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
