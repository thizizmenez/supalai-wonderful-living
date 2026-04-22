import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Play } from 'lucide-react';
import SkyEffects from './SkyEffects';

const videos = [
  { id: 'RGTs0c7Zq8A', title: 'Supalai Condominium', subtitle: 'แนะนำโครงการ', label: 'Overview' },
  { id: 'RGTs0c7Zq8A', title: 'Lifestyle', subtitle: 'ไลฟ์สไตล์ที่ลงตัว', label: 'Lifestyle' },
  { id: 'RGTs0c7Zq8A', title: 'Facilities', subtitle: 'ส่วนกลางครบครัน', label: 'Facilities' },
];

const VideoSection = () => {
  const { ref, visible } = useScrollReveal(0.1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleSelect = (i: number) => {
    if (i === activeIndex) return;
    setActiveIndex(i);
    setPlaying(false);
  };

  const active = videos[activeIndex];

  return (
    <section className="flex flex-col items-center justify-center bg-background starlight-bg pt-[60px] pb-16 md:py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gold/5 blur-[120px] pointer-events-none" />
      <SkyEffects starCount={45} showGlow={false} fullArea brightness={0.65} maxSize={1.8} minSize={0.5} glowIntensity={0.5} />

      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6`}>
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-light">Watch the story</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h3 className="font-display text-2xl md:text-4xl text-foreground">
            สัมผัสประสบการณ์ <span className="gold-text-bright">Wonderful</span>
          </h3>
        </div>

        {/* Main video with frame */}
        <div className="relative">
          {/* Decorative gold corners */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/60 z-20 pointer-events-none" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold/60 z-20 pointer-events-none" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold/60 z-20 pointer-events-none" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/60 z-20 pointer-events-none" />

          <div
            className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer ring-1 ring-gold/20"
            onClick={() => !playing && setPlaying(true)}
          >
            {!playing ? (
              <>
                <img
                  key={active.id + activeIndex}
                  src={`https://img.youtube.com/vi/${active.id}/maxresdefault.jpg`}
                  alt={active.title}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 animate-fade-in"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 transition-opacity group-hover:from-black/70" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full border border-gold-light/50 animate-ping" />
                    <div className="absolute inset-0 rounded-full border border-gold-light/30 animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-gold-light flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-white group-hover:bg-black/50 animate-glow-pulse">
                      <Play className="w-8 h-8 md:w-12 md:h-12 text-gold-light ml-1 group-hover:text-white transition-colors" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Video info bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <div className="flex items-end justify-between gap-4">
                    <div className="animate-fade-in" key={`info-${activeIndex}`}>
                      <p className="font-body text-xs tracking-[0.25em] uppercase text-gold-light mb-2" style={{ textShadow: '0 1px 4px hsl(220 20% 8% / 0.6)' }}>
                        {active.label}
                      </p>
                      <h4 className="font-display text-xl md:text-3xl text-white mb-1" style={{ textShadow: '0 2px 8px hsl(220 20% 8% / 0.6)' }}>
                        {active.title}
                      </h4>
                      <p className="font-body text-sm md:text-base text-white/80" style={{ textShadow: '0 2px 6px hsl(220 20% 8% / 0.6)' }}>
                        {active.subtitle}
                      </p>
                    </div>
                    <span className="hidden md:block font-display text-5xl gold-text-on-image opacity-80">
                      {String(activeIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <iframe
                key={active.id + activeIndex}
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={active.title}
              />
            )}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-10">
          {videos.map((v, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                aria-label={`Play ${v.title}`}
                className={`group relative text-left transition-all duration-500 ${
                  isActive ? 'scale-100' : 'scale-95 hover:scale-100'
                }`}
              >
                <div
                  className={`relative aspect-video rounded-md overflow-hidden transition-all duration-500 ${
                    isActive
                      ? 'ring-2 ring-gold shadow-xl shadow-gold/30'
                      : 'ring-1 ring-border opacity-60 group-hover:opacity-100 group-hover:ring-gold/40'
                  }`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? 'bg-gradient-to-t from-black/70 to-transparent' : 'bg-black/50 group-hover:bg-black/30'
                  }`} />

                  <div className={`absolute top-2 left-2 font-display text-lg md:text-xl transition-colors ${
                    isActive ? 'gold-text-on-image' : 'text-white/70'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {isActive && (
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
                      <span className="text-[10px] tracking-widest uppercase text-gold-light font-body">Now</span>
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'border-gold-light bg-black/40 scale-100'
                        : 'border-gold-light/60 bg-black/30 scale-90 group-hover:scale-100 group-hover:border-gold-light'
                    }`}>
                      <Play className="w-3 h-3 md:w-4 md:h-4 text-gold-light ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                </div>

                {/* Caption */}
                <div className="mt-3 hidden md:block">
                  <p className={`font-body text-[10px] tracking-[0.25em] uppercase transition-colors ${
                    isActive ? 'text-gold-light' : 'text-muted-foreground group-hover:text-foreground/70'
                  }`}>
                    {v.label}
                  </p>
                  <p className={`font-display text-sm mt-0.5 transition-colors ${
                    isActive ? 'text-foreground' : 'text-foreground/60 group-hover:text-foreground'
                  }`}>
                    {v.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
