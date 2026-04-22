import { useScrollReveal } from '@/hooks/useScrollReveal';

const TransitionText = () => {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-background bg-pattern pt-0 pb-24 md:pt-24 px-6">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center max-w-3xl mx-auto`}>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          เราเชื่อว่าคอนโดที่ดี คือคอนโดที่ให้ชีวิตจริง
        </p>
        <p className="font-display text-3xl md:text-5xl mt-8">
          <span className="gold-shimmer text-5xl md:text-7xl">Wonderful</span>{' '}
          <span className="text-foreground text-xl md:text-3xl">ได้ทุกวัน</span>{' '}
          <span className="text-lg md:text-2xl">✨</span>
        </p>
      </div>
    </section>
  );
};

export default TransitionText;
