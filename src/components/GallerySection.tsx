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
  { imgPc: galleryLivingroom, imgMobile: galleryLivingroomMobile, mobilePosition: 'center 42%', text: 'กับสวนส่วนตัว ที่ระเบียงกว้างๆ' },
  { imgPc: galleryBalcony, imgMobile: galleryBalconyMobile, mobilePosition: 'center 38%', text: 'ที่นั่งดูทีวีได้แบบฟินๆ เพราะพื้นที่ระหว่างทีวีเยอะ' },
  { imgPc: galleryGarden, imgMobile: galleryGardenMobile, mobilePosition: 'center 36%', text: 'ตอนได้ทักทายเพื่อนบ้านตัวจิ๋ว' },
  { imgPc: galleryPet, imgMobile: galleryPetMobile, mobilePosition: 'center 18%', text: 'อยู่ท่ามกลางบรรยากาศสีเขียว ที่สวนส่วนกลาง' },
  { imgPc: galleryJogging, imgMobile: galleryJoggingMobile, mobilePosition: 'center 34%', text: 'วิ่งดูวิวเมืองได้ทุกเย็น ที่ Sky Jogging Track' },
  { imgPc: galleryLocation, imgMobile: galleryLocationMobile, mobilePosition: 'center 36%', text: 'ที่ไปไหนมาไหนสะดวก เพราะอยู่ใกล้ทางด่วน ติดรถไฟฟ้า' },
  { imgPc: gallerySkyview, imgMobile: gallerySkyviewMobile, mobilePosition: 'center 15%', text: 'มองวิวท้องฟ้าทุกวันได้ไม่ซ้ำ' },
];

const GallerySlide = ({
  imgPc,
  imgMobile,
  mobilePosition,
  text,
  index,
  isActive,
  total,
}: {
  imgPc: string;
  imgMobile: string;
  mobilePosition: string;
  text: string;
  index: number;
  isActive: boolean;
  total: number;
}) => {
  const isEven = index % 2 === 0;
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      {/* Mobile image */}
      <div
        className={`absolute inset-0 bg-cover transition-transform duration-[8000ms] ease-out md:hidden ${
          isActive ? 'scale-110' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${imgMobile})`, backgroundPosition: mobilePosition }}
      />
      {/* Desktop image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out hidden md:block ${
          isActive ? 'scale-110' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${imgPc})` }}
      />

      {/* Cinematic gradient overlays - lighter to keep images brighter */}
      <div className="absolute inset-0 bg-black/18" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/42" />
      <div
        className={`absolute inset-0 ${
          isEven
            ? 'bg-gradient-to-r from-black/36 via-transparent to-transparent'
            : 'bg-gradient-to-l from-black/36 via-transparent to-transparent'
        }`}
      />

      {/* Slide counter */}
      <div className="absolute right-5 top-5 z-20 flex items-center gap-2.5 text-white/85 md:right-12 md:top-10 md:gap-3">
        <span className="font-display text-xl gold-text-on-image md:text-4xl">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="h-px w-8 bg-gold-light/60 md:w-16" />
        <span className="font-body text-[10px] tracking-[0.24em] md:text-sm md:tracking-widest" style={{ textShadow: '0 1px 4px hsl(220 20% 8% / 0.6)' }}>
          {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto flex h-full w-full max-w-6xl items-end px-5 md:items-center md:px-12 ${
          isEven ? 'justify-start md:justify-start' : 'justify-start md:justify-end'
        }`}
      >
        <div
          className={`mb-24 max-w-[18rem] text-left transition-all duration-1000 ease-out sm:mb-[28%] sm:max-w-sm md:mb-0 md:max-w-xl md:pb-0 ${
            isActive
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-12 blur-sm'
          }`}
        >
          <div
            className={`mb-4 flex items-center gap-3 transition-all duration-1000 delay-200 md:mb-6 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-px w-12 bg-gradient-to-r from-gold-light to-transparent md:w-24" />
            <span className="font-body text-[10px] uppercase tracking-[0.24em] text-gold-light md:text-xs md:tracking-[0.3em]" style={{ textShadow: '0 1px 4px hsl(220 20% 8% / 0.6)' }}>
              Moment {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <p
            className={`mb-3 transition-all duration-1000 delay-300 md:mb-4 ${
              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            } ${isActive ? 'animate-float' : ''}`}
            style={{ fontFamily: "'Prompt', sans-serif" }}
          >
            <span className="gold-shimmer-on-image text-[3.5rem] leading-[0.88] sm:text-6xl md:text-8xl">Wonderful</span>
          </p>
          <p
            className={`font-light text-base leading-snug text-white transition-all duration-1000 delay-500 sm:text-lg md:text-2xl md:leading-relaxed ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              textShadow: '0 2px 8px hsl(220 20% 8% / 0.7)',
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
                  mobilePosition={item.mobilePosition}
                  text={item.text}
                  index={i}
                  isActive={current === i}
                  total={galleryItems.length}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 h-12 w-12 border-gold/40 bg-background/30 text-gold backdrop-blur-md transition-all hover:scale-110 hover:bg-background/60 hover:text-gold-light md:left-8 md:h-14 md:w-14" />
          <CarouselNext className="right-4 h-12 w-12 border-gold/40 bg-background/30 text-gold backdrop-blur-md transition-all hover:scale-110 hover:bg-background/60 hover:text-gold-light md:right-8 md:h-14 md:w-14" />
        </Carousel>

        {/* Progress + Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-4 px-5 md:bottom-8 md:px-6">
          <div className="h-px w-full max-w-md overflow-hidden bg-white/30">
            <div
              className="h-full bg-gradient-to-r from-gold-light to-white transition-all duration-100 ease-linear"
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
                    ? 'w-10 bg-gold-light'
                    : 'w-1.5 bg-white/50 hover:bg-white/80'
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
