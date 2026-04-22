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
import galleryBalconyMobile from '@/assets/gallery-balcony-mobile.jpg';
import galleryLivingroomMobile from '@/assets/gallery-livingroom-mobile.jpg';
import galleryPetMobile from '@/assets/gallery-pet-mobile.jpg';
import galleryGardenMobile from '@/assets/gallery-garden-mobile.jpg';
import galleryJoggingMobile from '@/assets/gallery-jogging-mobile.jpg';
import galleryLocationMobile from '@/assets/gallery-location-mobile.jpg';
import gallerySkyviewMobile from '@/assets/gallery-skyview-mobile.jpg';


const galleryItems = [
  { imgPc: galleryLivingroom, imgMobile: galleryLivingroomMobile, text: 'กับสวนส่วนตัว ที่ระเบียงกว้างๆ' },
  { imgPc: galleryBalcony, imgMobile: galleryBalconyMobile, text: 'ที่นั่งดูทีวีได้แบบฟินๆ เพราะพื้นที่ระหว่างทีวีเยอะ' },
  { imgPc: galleryGarden, imgMobile: galleryGardenMobile, text: 'ตอนได้ทักทายเพื่อนบ้านตัวจิ๋ว' },
  { imgPc: galleryPet, imgMobile: galleryPetMobile, text: 'อยู่ท่ามกลางบรรยากาศสีเขียว ที่สวนส่วนกลาง' },
  { imgPc: galleryJogging, imgMobile: galleryJoggingMobile, text: 'วิ่งดูวิวเมืองได้ทุกเย็น ที่ Sky Jogging Track' },
  { imgPc: galleryLocation, imgMobile: galleryLocationMobile, text: 'ที่ไปไหนมาไหนสะดวก เพราะอยู่ใกล้ทางด่วน ติดรถไฟฟ้า' },
  { imgPc: gallerySkyview, imgMobile: gallerySkyviewMobile, text: 'มองวิวท้องฟ้าทุกวันได้ไม่ซ้ำ' },
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
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-transparent to-background/50" />
      <div
        className={`absolute inset-0 ${
          isEven
            ? 'bg-gradient-to-r from-background/50 via-transparent to-transparent'
            : 'bg-gradient-to-l from-background/50 via-transparent to-transparent'
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
        className={`relative z-10 w-full h-full max-w-6xl mx-auto px-6 md:px-12 flex items-end md:items-center ${
          isEven ? 'justify-start' : 'justify-end'
        }`}
      >
        {/* Mobile: positioned at lower half with padding above progress bar; Desktop: centered */}
        <div
          className={`max-w-xl transition-all duration-1000 ease-out mb-[30%] md:mb-0 md:pb-0 ${
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
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
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
