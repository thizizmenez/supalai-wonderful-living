import { useScrollReveal, useParallax } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const VideoSection = () => {
  const { ref, visible } = useScrollReveal(0.1);
  const parallaxRef = useParallax();
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={parallaxRef} className="parallax-section min-h-screen flex items-center justify-center bg-secondary py-24 relative">
      <div className="parallax-bg bg-secondary/50" />
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative z-10 w-full max-w-6xl mx-auto px-6`}>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          {!playing ? (
            <div
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setPlaying(true)}
            >
              <img
                src="https://img.youtube.com/vi/RGTs0c7Zq8A/maxresdefault.jpg"
                alt="Supalai Condominium Video"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/40 flex items-center justify-center transition-colors group-hover:bg-background/30">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gold flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-gold-light">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/RGTs0c7Zq8A?autoplay=1&rel=0"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Supalai Condominium"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
