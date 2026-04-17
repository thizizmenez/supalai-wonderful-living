import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const videos = [
  { id: 'RGTs0c7Zq8A', title: 'Supalai Condominium' },
  { id: 'RGTs0c7Zq8A', title: 'Supalai Condominium - Lifestyle' },
  { id: 'RGTs0c7Zq8A', title: 'Supalai Condominium - Facilities' },
];

const VideoSection = () => {
  const { ref, visible } = useScrollReveal(0.1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleSelect = (i: number) => {
    setActiveIndex(i);
    setPlaying(false);
  };

  const active = videos[activeIndex];

  return (
    <section className="flex flex-col items-center justify-center bg-background pt-[60px] pb-12 md:py-12 relative">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative z-10 w-full max-w-6xl mx-auto px-0 md:px-6`}>
        {/* Main video */}
        <div
          className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          {!playing ? (
            <>
              <img
                src={`https://img.youtube.com/vi/${active.id}/maxresdefault.jpg`}
                alt={active.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 flex items-center justify-center transition-colors group-hover:bg-background/30">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gold flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-gold-light animate-glow-pulse">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
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

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-3 md:gap-5 mt-4 md:mt-6 px-4 md:px-0">
          {videos.map((v, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-label={`Play ${v.title}`}
              className={`relative aspect-video rounded-md overflow-hidden group transition-all ${
                activeIndex === i
                  ? 'ring-2 ring-gold shadow-lg shadow-gold/20'
                  : 'ring-1 ring-border opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute inset-0 flex items-center justify-center transition-colors ${
                activeIndex === i ? 'bg-background/20' : 'bg-background/50 group-hover:bg-background/30'
              }`}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold flex items-center justify-center bg-background/40">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
