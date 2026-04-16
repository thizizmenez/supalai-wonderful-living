import { useScrollReveal } from '@/hooks/useScrollReveal';

const VideoSection = () => {
  const { ref, visible } = useScrollReveal(0.1);
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-2 pb-4 relative">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative z-10 w-full max-w-6xl mx-auto px-6`}>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
          onClick={(e) => {
            const iframe = (e.currentTarget.querySelector('iframe') as HTMLIFrameElement);
            const thumb = (e.currentTarget.querySelector('.video-thumb') as HTMLElement);
            if (iframe && thumb) {
              thumb.style.display = 'none';
              iframe.style.display = 'block';
              iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
            }
          }}
        >
          <div className="video-thumb absolute inset-0">
            <img
              src="https://img.youtube.com/vi/RGTs0c7Zq8A/maxresdefault.jpg"
              alt="Supalai Condominium Video"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center transition-colors group-hover:bg-background/30">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gold flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-gold-light animate-glow-pulse">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/RGTs0c7Zq8A?autoplay=0&rel=0"
            className="w-full h-full hidden"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Supalai Condominium"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
