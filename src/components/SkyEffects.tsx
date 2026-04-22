import { useMemo } from 'react';

interface SkyEffectsProps {
  starCount?: number;
  showGlow?: boolean;
  fullArea?: boolean;
}

const SkyEffects = ({ starCount = 80, showGlow = true, fullArea = false }: SkyEffectsProps) => {
  const stars = useMemo(
    () =>
      Array.from({ length: starCount }, (_, i) => ({
        id: i,
        top: fullArea ? Math.random() * 100 : Math.random() * 70,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 0.8,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
        opacity: 0.4 + Math.random() * 0.6,
      })),
    [starCount, fullArea]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Soft sky glow gradient */}
      {showGlow && (
        <>
          <div
            className="sky-glow absolute -top-1/4 left-1/2 -translate-x-1/2 w-[120%] h-[60%]"
            style={{
              background:
                'radial-gradient(ellipse at center, hsl(45 80% 70% / 0.18) 0%, hsl(40 60% 50% / 0.08) 35%, transparent 70%)',
            }}
          />
          <div
            className="sky-glow absolute top-0 right-0 w-[60%] h-[50%]"
            style={{
              background:
                'radial-gradient(circle at top right, hsl(220 60% 80% / 0.12) 0%, transparent 60%)',
              animationDelay: '4s',
            }}
          />
        </>
      )}

      {/* Twinkling stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SkyEffects;
