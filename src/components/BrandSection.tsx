import { useScrollReveal } from '@/hooks/useScrollReveal';

const UTM = '/?utm_source=website&utm_medium=landingpage&utm_campaign=supalaiwonderful';

const brands = [
  // Row 1
  { name: 'Supalai City Home', logo: 'https://www.supalai.com/stocks/brand/d150x110/pv/ws/f8uxpvwsyby/city_home.svg', link: 'https://www.supalai.com/project/condo?brand=160205743769758' + UTM, scale: 'scale-[0.8]' },
  { name: 'Supalai City Resort', logo: 'https://www.supalai.com/stocks/brand/d150x110/m5/sq/qjijm5sqpdo/city_resort.svg', link: 'https://www.supalai.com/project/condo?brand=160205772852473' + UTM, scale: 'scale-90' },
  { name: 'Supalai Veranda', logo: 'https://www.supalai.com/stocks/brand/d150x110/1e/9d/pis61e9dx0g/veranda.png', link: 'https://www.supalai.com/project/condo?brand=1600348133395399' + UTM, scale: 'scale-[0.65]' },
  { name: 'Supalai Loft', logo: 'https://www.supalai.com/stocks/brand/d150x110/lk/v3/4ug2lkv3e0x/L-O-F-T.jpg', link: 'https://www.supalai.com/project/condo?brand=1605498616678779' + UTM, scale: 'scale-[0.8]' },
  { name: 'Supalai Lite', logo: 'https://www.supalai.com/stocks/brand/d150x110/ua/km/zzrbuakmxao/lite.png', link: 'https://www.supalai.com/project/condo?brand=1605498558877878' + UTM, scale: 'scale-[0.65]' },
  { name: 'Supalai Park', logo: 'https://www.supalai.com/stocks/brand/d150x110/c1/lb/nogic1lbedv/park.png', link: 'https://www.supalai.com/project/condo?brand=1605498754456560' + UTM, scale: 'scale-[0.65]' },
  // Row 2
  { name: 'Supalai Kram', logo: 'https://www.supalai.com/stocks/brand/d150x110/cr/oi/ueh0croiamu/LOGO-KRAM-s.png', link: 'https://www.supalai.com/project/condo?brand=1728974513583555' + UTM, scale: 'scale-[0.8]' },
  { name: 'Supalai Parc', logo: 'https://www.supalai.com/stocks/brand/d150x110/uv/gr/q47huvgrjui/Untitled-1.jpg', link: 'https://www.supalai.com/project/condo?brand=1681785725347858' + UTM, scale: 'scale-90' },
  { name: 'Supalai Tyme', logo: 'https://www.supalai.com/stocks/brand/d150x110/nd/ny/mitundnyd8a/Logo_Tyme.png', link: 'https://www.supalai.com/project/condo?brand=1712818283066581' + UTM, scale: 'scale-90' },
  { name: 'Supalai Sense', logo: 'https://www.supalai.com/stocks/brand/d150x110/9a/wj/nc3l9awjxge/LOGO_1-1.png', link: 'https://www.supalai.com/project/condo?brand=1690431255456153' + UTM, scale: 'scale-90' },
  { name: 'Supalai Premier', logo: 'https://www.supalai.com/stocks/brand/d150x110/nd/yv/0csgndyvbxm/premier.png', link: 'https://www.supalai.com/project/condo?brand=1600348335702394' + UTM, scale: 'scale-[0.65]' },
  { name: 'Supalai Blu', logo: 'https://www.supalai.com/stocks/brand/d150x110/i5/bu/aiuai5buype/Logo-BLU-Thai.png', link: 'https://www.supalai.com/project/condo?brand=1724210441106953' + UTM, scale: 'scale-[0.8]' },
  // Row 3
  { name: 'Supalai Vista', logo: 'https://www.supalai.com/stocks/brand/d150x110/ge/8f/edi9ge8fomr/Vista.png', link: 'https://www.supalai.com/project/condo?brand=1747644499212132' + UTM, scale: 'scale-[0.65]' },
  { name: 'Supalai Scenic Bay', logo: 'https://www.supalai.com/stocks/brand/d150x110/cg/bn/x4wycgbnh68/%e0%b9%82%e0%b8%a5%e0%b9%82%e0%b8%81%e0%b9%89-%e0%b9%80%e0%b8%81%e0%b9%88%e0%b8%b2.jpg', link: 'https://www.supalai.com/project/condo?brand=1653901936647728' + UTM, scale: 'scale-[0.8]' },
  { name: 'Supalai Blue Whale', logo: 'https://www.supalai.com/stocks/brand/d150x110/xs/pb/7xmtxspbtku/LOGO-SUPALAI-Blue-Whale-B1B.png', link: 'https://www.supalai.com/project/condo?brand=166453376660610' + UTM, scale: 'scale-[0.8]' },
  { name: 'Supalai Elite', logo: 'https://www.supalai.com/stocks/brand/d150x110/id/uh/reqmiduhaji/elite.png', link: 'https://www.supalai.com/project/condo?brand=1605498506975561' + UTM, scale: 'scale-[0.65]' },
  { name: 'Supalai Icon', logo: 'https://www.supalai.com/stocks/brand/d150x110/bv/4t/l1j7bv4t2yd/I-CON.png', link: 'https://www.supalai.com/project/condo?brand=1605505923030375' + UTM, scale: 'scale-[0.65]' },
  { name: 'Supalai Oriental', logo: 'https://www.supalai.com/stocks/brand/d150x110/9v/z4/e5ab9vz4uxy/ORIENTAL.png', link: 'https://www.supalai.com/project/condo?brand=1605505819910613' + UTM, scale: 'scale-[0.8]' },
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

        <div ref={gridRef} className={`${gridVisible ? '' : ''}`}>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, i) => (
              <a
                key={brand.name}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`stagger-item ${gridVisible ? 'visible' : ''} flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="bg-white rounded-lg w-[250px] h-[130px] flex items-center justify-center p-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`max-w-full max-h-full object-contain ${(brand as any).scale || ''}`}
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
