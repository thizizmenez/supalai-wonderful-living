import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import galleryBalcony from '@/assets/gallery-balcony.jpg';
import galleryLivingroom from '@/assets/gallery-livingroom.jpg';
import galleryPet from '@/assets/gallery-pet.jpg';
import galleryGarden from '@/assets/gallery-garden.jpg';
import galleryJogging from '@/assets/gallery-jogging.jpg';
import galleryLocation from '@/assets/gallery-location.jpg';
import gallerySkyview from '@/assets/gallery-skyview.jpg';

// NOTE: imgMobile currently reuses the desktop image as a placeholder.
// Replace each `imgMobile` with a portrait/mobile-optimized image when available.
const galleryItems = [
  { imgPc: galleryLivingroom, imgMobile: galleryLivingroom, text: 'กับสวนส่วนตัว ที่ระเบียงกว้างๆ' },
  { imgPc: galleryBalcony, imgMobile: galleryBalcony, text: 'ที่นั่งดูทีวีได้แบบฟินๆ เพราะพื้นที่ระหว่างทีวีเยอะ' },
  { imgPc: galleryGarden, imgMobile: galleryGarden, text: 'ตอนได้ทักทายเพื่อนบ้านตัวจิ๋ว' },
  { imgPc: galleryPet, imgMobile: galleryPet, text: 'อยู่ท่ามกลางบรรยากาศสีเขียว ที่สวนส่วนกลาง' },
  { imgPc: galleryJogging, imgMobile: galleryJogging, text: 'วิ่งดูวิวเมืองได้ทุกเย็น ที่ Sky Jogging Track' },
  { imgPc: galleryLocation, imgMobile: galleryLocation, text: 'ที่ไปไหนมาไหนสะดวก เพราะอยู่ใกล้ทางด่วน ติดรถไฟฟ้า' },
  { imgPc: gallerySkyview, imgMobile: gallerySkyview, text: 'มองวิวท้องฟ้าทุกวันได้ไม่ซ้ำ' },
];

const GallerySlide = ({
  imgPc,
  imgMobile,
  text,
  index,
  isActive,
  total,
}: {
  imgPc: string;
  imgMobile: string;
  text: string;
  index: number;
  isActive: boolean;
  total: number;
}) => {
  const isEven = index % 2 === 0;
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Mobile image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out md:hidden ${
          isActive ? 'scale-110' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${imgMobile})` }}
      />
      {/* Desktop image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out hidden md:block ${
          isActive ? 'scale-110' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${imgPc})` }}
      />

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
      <div
        className={`absolute inset-0 ${
          isEven
            ? 'bg-gradient-to-r from-background/80 via-background/20 to-transparent'
            : 'bg-gradient-to-l from-background/80 via-background/20 to-transparent'
        }`}
      />

      {/* Slide counter */}
      <div className="absolute top-6 md:top-10 right-6 md:right-12 z-20 flex items-center gap-3 text-foreground/70">
        <span className="font-display text-2xl md:text-4xl gold-text-bright">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="h-px w-10 md:w-16 bg-gold/50" />
        <span className="font-body text-xs md:text-sm tracking-widest">
          {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full h-full max-w-6xl mx-auto px-6 md:px-12 flex items-center ${
          isEven ? 'justify-start' : 'justify-end'
        }`}
      >
        <div
          className={`max-w-xl transition-all duration-1000 ease-out ${
            isActive
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-12 blur-sm'
          }`}
        >
          {/* Decorative line */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-1000 delay-200 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-gold to-transparent" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-light">
              Moment {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <p
            className={`mb-4 transition-all duration-1000 delay-300 ${
              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            } ${isActive ? 'animate-float' : ''}`}
            style={{ fontFamily: "'Prompt', sans-serif" }}
          >
            <span className="gold-shimmer text-6xl md:text-8xl">Wonderful</span>
          </p>
          <p
            className={`text-lg md:text-2xl text-foreground leading-relaxed font-light transition-all duration-1000 delay-500 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.8)',
              fontFamily: "'Prompt', sans-serif",
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    });
  }, [api]);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const duration = 6000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / duration) * 100, 100));
    }, 50);
    return () => clearInterval(interval);
  }, [current]);

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
                <GallerySlide
                  imgPc={item.imgPc}
                  imgMobile={item.imgMobile}
                  text={item.text}
                  index={i}
                  isActive={current === i}
                  total={galleryItems.length}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 h-12 w-12 md:h-14 md:w-14 bg-background/30 backdrop-blur-md border-gold/40 text-gold hover:bg-background/60 hover:text-gold-light hover:scale-110 transition-all" />
          <CarouselNext className="right-4 md:right-8 h-12 w-12 md:h-14 md:w-14 bg-background/30 backdrop-blur-md border-gold/40 text-gold hover:bg-background/60 hover:text-gold-light hover:scale-110 transition-all" />
        </Carousel>

        {/* Progress + Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4 px-6">
          <div className="w-full max-w-md h-px bg-foreground/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-center gap-2">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  current === i
                    ? 'w-10 bg-gold'
                    : 'w-1.5 bg-foreground/40 hover:bg-foreground/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
