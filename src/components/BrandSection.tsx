import { useScrollReveal } from '@/hooks/useScrollReveal';
import brandCityHome from '@/assets/brand-city-home.png';
import brandCityResort from '@/assets/brand-city-resort.png';
import brandVeranda from '@/assets/brand-veranda.png';
import brandLoft from '@/assets/brand-loft.png';
import brandLite from '@/assets/brand-lite.png';
import brandPark from '@/assets/brand-park.png';
import brandKram from '@/assets/brand-kram.png';
import brandParc from '@/assets/brand-parc.png';
import brandTyme from '@/assets/brand-tyme.png';
import brandSense from '@/assets/brand-sense.png';
import brandPremier from '@/assets/brand-premier.png';
import brandBlu from '@/assets/brand-blu.png';
import brandVista from '@/assets/brand-vista.png';
import brandScenicBay from '@/assets/brand-scenic-bay.png';
import brandBlueWhale from '@/assets/brand-blue-whale.png';
import brandElite from '@/assets/brand-elite.png';
import brandIcon from '@/assets/brand-icon.png';
import brandOriental from '@/assets/brand-oriental.png';

const brands = [
  { name: 'Supalai City Home', logo: brandCityHome },
  { name: 'Supalai City Resort', logo: brandCityResort },
  { name: 'Supalai Veranda', logo: brandVeranda },
  { name: 'Supalai Loft', logo: brandLoft },
  { name: 'Supalai Lite', logo: brandLite },
  { name: 'Supalai Park', logo: brandPark },
  { name: 'Supalai Kram', logo: brandKram },
  { name: 'Supalai Parc', logo: brandParc },
  { name: 'Supalai Tyme', logo: brandTyme },
  { name: 'Supalai Sense', logo: brandSense },
  { name: 'Supalai Premier', logo: brandPremier },
  { name: 'Supalai Blu', logo: brandBlu },
  { name: 'Supalai Vista', logo: brandVista },
  { name: 'Supalai Scenic Bay', logo: brandScenicBay },
  { name: 'Supalai Blue Whale', logo: brandBlueWhale },
  { name: 'Supalai Elite', logo: brandElite },
  { name: 'Supalai Icon', logo: brandIcon },
  { name: 'Supalai Oriental', logo: brandOriental },
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
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand, i) => (
              <div
                key={brand.name}
                className="flex items-center justify-center hover:scale-105 transition-transform duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-[200px] h-[100px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
