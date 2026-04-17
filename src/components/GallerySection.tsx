import { useScrollReveal } from '@/hooks/useScrollReveal';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';
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

const GallerySlide = ({ img, text, index, isActive }: { img: string; text: string; index: number; isActive: boolean }) => {
  const isEven = index % 2 === 0;
  return (
    <div className="relative w-full h-[100vh] md:h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black/30" />
      <div className={`relative z-10 w-full h-full max-w-6xl mx-auto px-6 md:px-12 flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
        <div
          className={`max-w-lg p-6 md:p-12 transition-all duration-1000 ease-out ${
            isActive
              ? 'opacity-100 translate-x-0'
              : isEven
                ? 'opacity-0 -translate-x-16'
                : 'opacity-0 translate-x-16'
          }`}
        >
          <p className={`mb-3 ${isActive ? 'animate-float' : ''}`} style={{ fontFamily: "'Prompt', sans-serif" }}>
            <span className="gold-text-bright text-5xl md:text-7xl">Wonderful</span>
          </p>
          <p className="text-base md:text-xl text-foreground leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)', fontFamily: "'Prompt', sans-serif" }}>
            {text.replace('Wonderful ', '')}
          </p>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const { ref, visible } = useScrollReveal(0.2);
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section>
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {galleryItems.map((item, i) => (
              <CarouselItem key={i} className="pl-0 basis-full">
                <GallerySlide img={item.img} text={item.text} index={i} isActive={current === i} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 h-10 w-10 md:h-12 md:w-12 bg-background/40 border-gold/40 text-gold hover:bg-background/60 hover:text-gold-light" />
          <CarouselNext className="right-4 md:right-8 h-10 w-10 md:h-12 md:w-12 bg-background/40 border-gold/40 text-gold hover:bg-background/60 hover:text-gold-light" />
        </Carousel>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                current === i ? 'w-8 bg-gold' : 'w-2 bg-foreground/40 hover:bg-foreground/60'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="min-h-[60vh] flex items-center justify-center bg-background bg-pattern py-24 px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center max-w-3xl mx-auto space-y-6`}>
          <p className="font-display text-2xl md:text-4xl text-foreground">
            ชีวิตจริงที่ <span className="gold-text-bright text-5xl md:text-6xl">Wonderful</span> ได้ทุกวัน
          </p>
          <p className="font-body text-xl md:text-2xl text-muted-foreground">
            ที่ <span className="font-display text-gold-light" style={{ fontFamily: "'Prompt', sans-serif" }}>SUPALAI CONDOMINIUM</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
