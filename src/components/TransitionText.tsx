import { useScrollReveal } from '@/hooks/useScrollReveal';

const TransitionText = () => {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-background py-24 px-6">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center max-w-3xl mx-auto`}>
        <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
          เราเชื่อว่าคอนโดที่ดี คือคอนโดที่ให้ชีวิตจริง
        </p>
        <p className="font-display text-3xl md:text-5xl mt-8">
          <span className="gold-text italic">Wonderful</span>{' '}
          <span className="text-foreground">ได้ทุกวัน</span>{' '}
          <span className="text-2xl md:text-4xl">✨</span>
        </p>
      </div>
    </section>
  );
};

export default TransitionText;
