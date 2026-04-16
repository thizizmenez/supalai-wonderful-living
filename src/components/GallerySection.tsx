import { useScrollReveal } from '@/hooks/useScrollReveal';
import galleryBalcony from '@/assets/gallery-balcony.jpg';
import galleryLivingroom from '@/assets/gallery-livingroom.jpg';
import galleryPet from '@/assets/gallery-pet.jpg';
import galleryGarden from '@/assets/gallery-garden.jpg';
import galleryJogging from '@/assets/gallery-jogging.jpg';
import galleryLocation from '@/assets/gallery-location.jpg';
import gallerySkyview from '@/assets/gallery-skyview.jpg';

const galleryItems = [
  { img: galleryLivingroom, text: 'Wonderful กับสวนส่วนตัว ที่ระเบียงกว้างๆ' },
  { img: galleryBalcony, text: 'Wonderful ที่นั่งดูทีวีได้แบบฟินๆ เพราะพื้นที่ระหว่างทีวีเยอะ' },
  { img: galleryGarden, text: 'Wonderful ตอนได้ทักทายเพื่อนบ้านตัวจิ๋ว' },
  { img: galleryPet, text: 'Wonderful อยู่ท่ามกลางบรรยากาศสีเขียว ที่สวนส่วนกลาง' },
  { img: galleryJogging, text: 'Wonderful วิ่งดูวิวเมืองได้ทุกเย็น ที่ Sky Jogging Track' },
  { img: galleryLocation, text: 'Wonderful ที่ไปไหนมาไหนสะดวก เพราะอยู่ใกล้ทางด่วน ติดรถไฟฟ้า' },
  { img: gallerySkyview, text: 'Wonderful มองวิวท้องฟ้าทุกวันได้ไม่ซ้ำ' },
];

const GalleryItem = ({ img, text, index }: { img: string; text: string; index: number }) => {
  const { ref, visible } = useScrollReveal(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      className="min-h-[100vh] relative flex items-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div
        ref={ref}
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex ${isEven ? 'justify-start' : 'justify-end'} transition-all duration-1000 ease-out ${
          visible
            ? 'opacity-100 translate-x-0'
            : isEven
              ? 'opacity-0 -translate-x-16'
              : 'opacity-0 translate-x-16'
        }`}
      >
        <div className="max-w-lg p-8 md:p-12">
          <p className={`font-display text-3xl md:text-5xl mb-3 ${visible ? 'animate-float' : ''}`}>
            <span className="gold-text italic">Wonderful</span>
          </p>
          <p className="font-body text-lg md:text-xl text-foreground leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            {text.replace('Wonderful ', '')}
          </p>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section>
      {galleryItems.map((item, i) => (
        <GalleryItem key={i} img={item.img} text={item.text} index={i} />
      ))}

      <div className="min-h-[60vh] flex items-center justify-center bg-background py-24 px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center max-w-3xl mx-auto space-y-6`}>
          <p className="font-display text-2xl md:text-4xl text-foreground">
            ชีวิตจริงที่ <span className="gold-text italic">Wonderful</span> ได้ทุกวัน
          </p>
          <p className="font-body text-xl md:text-2xl text-muted-foreground">
            ที่ <span className="gold-text font-display">SUPALAI CONDOMINIUM</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
