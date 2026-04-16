import { useScrollReveal, useParallax } from '@/hooks/useScrollReveal';
import galleryBalcony from '@/assets/gallery-balcony.jpg';
import galleryLivingroom from '@/assets/gallery-livingroom.jpg';
import galleryPet from '@/assets/gallery-pet.jpg';
import galleryGarden from '@/assets/gallery-garden.jpg';
import galleryJogging from '@/assets/gallery-jogging.jpg';
import galleryLocation from '@/assets/gallery-location.jpg';
import gallerySkyview from '@/assets/gallery-skyview.jpg';

const galleryItems = [
  { img: galleryBalcony, text: 'Wonderful กับสวนส่วนตัว ที่ระเบียงกว้างๆ' },
  { img: galleryLivingroom, text: 'Wonderful ที่นั่งดูทีวีได้แบบฟินๆ เพราะพื้นที่ระหว่างทีวีเยอะ' },
  { img: galleryPet, text: 'Wonderful ตอนได้ทักทายเพื่อนบ้านตัวจิ๋ว' },
  { img: galleryGarden, text: 'Wonderful อยู่ท่ามกลางบรรยากาศสีเขียว ที่สวนส่วนกลาง' },
  { img: galleryJogging, text: 'Wonderful วิ่งดูวิวเมืองได้ทุกเย็น ที่ Sky Jogging Track' },
  { img: galleryLocation, text: 'Wonderful ที่ไปไหนมาไหนสะดวก เพราะอยู่ใกล้ทางด่วน ติดรถไฟฟ้า' },
  { img: gallerySkyview, text: 'Wonderful มองวิวท้องฟ้าทุกวันได้ไม่ซ้ำ' },
];

const GalleryItem = ({ img, text, index }: { img: string; text: string; index: number }) => {
  const parallaxRef = useParallax();
  const { ref, visible } = useScrollReveal(0.15);
  const isEven = index % 2 === 0;

  return (
    <div ref={parallaxRef} className="parallax-section min-h-[80vh] relative flex items-center">
      <div className="parallax-bg" style={{ backgroundImage: `url(${img})` }} />
      <div className="absolute inset-0 bg-background/50" />
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex ${isEven ? 'justify-start' : 'justify-end'}`}
      >
        <div className={`max-w-lg p-8 md:p-12 bg-background/70 backdrop-blur-md rounded-lg border border-border`}>
          <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed">
            <span className="gold-text font-display italic text-2xl md:text-3xl">Wonderful</span>
            <br />
            <span className="mt-3 block text-lg md:text-xl text-secondary-foreground">
              {text.replace('Wonderful ', '')}
            </span>
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

      {/* Closing text */}
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
