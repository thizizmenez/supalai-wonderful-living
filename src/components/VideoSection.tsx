import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Play } from 'lucide-react';

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
    <section className="relative flex flex-col items-center justify-center pt-[60px] pb-16 md:py-24 overflow-hidden bg-gradient-to-b from-[hsl(220_30%_8%)] via-[hsl(220_28%_10%)] to-[hsl(220_30%_8%)]">
      {/* Rich background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,hsl(40_85%_55%/0.15),transparent_70%)]" />
        <div className="absolute bottom-0 left-1/4 w-[40%] h-[40%] bg-[radial-gradient(circle,hsl(38_80%_50%/0.1),transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[35%] h-[35%] bg-[radial-gradient(circle,hsl(42_85%_55%/0.08),transparent_70%)] blur-3xl" />
      </div>

      {/* Top/bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(40_85%_55%/0.4)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(40_85%_55%/0.4)] to-transparent" />

      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6`}>
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(42_90%_60%)]" />
            <span className="font-body text-xs tracking-[0.35em] uppercase text-[hsl(42_90%_65%)]">
              Watch the story
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(42_90%_60%)]" />
          </div>
          <h3 className="font-display text-3xl md:text-5xl text-white">
            สัมผัสประสบการณ์{' '}
            <span
              className="font-elegant italic"
              style={{
                background: 'linear-gradient(135deg, hsl(45 95% 70%), hsl(40 90% 55%), hsl(35 85% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 8px hsl(40 90% 50% / 0.4))',
              }}
            >
              Wonderful
            </span>
          </h3>
        </div>

        {/* Main video */}
        <div className="relative">
          {/* Glow behind player */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(40_85%_55%/0.2)] via-[hsl(45_90%_60%/0.3)] to-[hsl(40_85%_55%/0.2)] blur-2xl rounded-2xl opacity-70" />

          {/* Decorative gold corners */}
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[hsl(42_90%_60%)] z-20 pointer-events-none" />
          <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-[hsl(42_90%_60%)] z-20 pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-[hsl(42_90%_60%)] z-20 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[hsl(42_90%_60%)] z-20 pointer-events-none" />

          <div
            className="relative aspect-video rounded-xl overflow-hidden shadow-[0_25px_80px_-15px_hsl(40_80%_40%/0.5)] group cursor-pointer ring-1 ring-[hsl(42_90%_60%/0.4)]"
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
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 transition-opacity group-hover:from-black/75" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full border border-[hsl(42_90%_60%/0.6)] animate-ping" />
                    <div className="absolute inset-0 rounded-full border border-[hsl(42_90%_60%/0.3)] animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-[hsl(42_90%_60%)] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-black/60 shadow-[0_0_40px_hsl(42_90%_60%/0.5)]">
                      <Play className="w-8 h-8 md:w-12 md:h-12 text-[hsl(45_95%_65%)] ml-1 transition-colors" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Video info bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <div className="flex items-end justify-between gap-4">
                    <div className="animate-fade-in" key={`info-${activeIndex}`}>
                      <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(45_95%_70%)] mb-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
                        {active.label}
                      </p>
                      <h4 className="font-display text-2xl md:text-4xl text-white mb-1" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                        {active.title}
                      </h4>
                      <p className="font-body text-sm md:text-base text-white/85" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
                        {active.subtitle}
                      </p>
                    </div>
                    <span
                      className="hidden md:block font-elegant italic text-6xl opacity-90"
                      style={{
                        background: 'linear-gradient(135deg, hsl(45 95% 70%), hsl(38 85% 50%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
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
        <div className="grid grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-12">
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
                  className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-500 ${
                    isActive
                      ? 'ring-2 ring-[hsl(42_90%_60%)] shadow-[0_15px_40px_-10px_hsl(40_85%_50%/0.6)]'
                      : 'ring-1 ring-white/10 opacity-70 group-hover:opacity-100 group-hover:ring-[hsl(42_90%_60%/0.5)]'
                  }`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' : 'bg-black/50 group-hover:bg-black/30'
                  }`} />

                  <div
                    className={`absolute top-2 left-2 font-elegant italic text-xl md:text-2xl transition-all ${
                      isActive ? 'text-[hsl(45_95%_70%)]' : 'text-white/70'
                    }`}
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {isActive && (
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full ring-1 ring-[hsl(42_90%_60%/0.5)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(45_95%_60%)] animate-pulse" />
                      <span className="text-[10px] tracking-widest uppercase text-[hsl(45_95%_70%)] font-body">Now</span>
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                      isActive
                        ? 'border-[hsl(42_90%_60%)] bg-black/40 scale-100 shadow-[0_0_20px_hsl(42_90%_60%/0.5)]'
                        : 'border-[hsl(42_90%_60%/0.7)] bg-black/30 scale-90 group-hover:scale-100 group-hover:border-[hsl(42_90%_60%)]'
                    }`}>
                      <Play className="w-3 h-3 md:w-4 md:h-4 text-[hsl(45_95%_65%)] ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="mt-3 hidden md:block">
                  <p className={`font-body text-[10px] tracking-[0.3em] uppercase transition-colors ${
                    isActive ? 'text-[hsl(45_95%_65%)]' : 'text-white/50 group-hover:text-white/70'
                  }`}>
                    {v.label}
                  </p>
                  <p className={`font-display text-sm mt-1 transition-colors ${
                    isActive ? 'text-white' : 'text-white/60 group-hover:text-white/90'
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
