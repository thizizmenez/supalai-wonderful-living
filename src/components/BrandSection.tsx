import { useScrollReveal } from '@/hooks/useScrollReveal';

const brands = [
  'SUPALAI PREMIER',
  'SUPALAI ELITE',
  'SUPALAI PRIME',
  'SUPALAI VERANDA',
  'SUPALAI CITY RESORT',
  'SUPALAI PARK',
  'SUPALAI LITE',
  'SUPALAI LOFT',
  'SUPALAI VISTA',
  'SUPALAI MONTE',
  'SUPALAI RIVER RESORT',
  'SUPALAI ORIENTAL',
  'SUPALAI CASA RIVA',
];

const BrandSection = () => {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal(0.2);
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.1);

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

        <div ref={gridRef} className={`reveal ${gridVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map((brand, i) => (
              <div
                key={brand}
                className="p-4 md:p-6 border border-border rounded-lg text-center hover:border-gold/50 hover:bg-surface-elevated transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <p className="font-body text-sm md:text-base text-secondary-foreground tracking-wide">
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
