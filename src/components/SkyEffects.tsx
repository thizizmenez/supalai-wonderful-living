import { useMemo } from 'react';

interface SkyEffectsProps {
  /** Number of stars to render */
  starCount?: number;
  /** Show the soft sky glow gradient overlay */
  showGlow?: boolean;
  /** Distribute stars across full container height instead of top 70% */
  fullArea?: boolean;
  /** Base brightness multiplier for stars (0-1+). Default 1. */
  brightness?: number;
  /** Maximum star size in pixels. Default 3.3 */
  maxSize?: number;
  /** Minimum star size in pixels. Default 0.8 */
  minSize?: number;
  /** Glow shadow intensity multiplier (0-1+). Default 1 */
  glowIntensity?: number;
}

const SkyEffects = ({
  starCount = 80,
  showGlow = true,
  fullArea = false,
  brightness = 1,
  maxSize = 3.3,
  minSize = 0.8,
  glowIntensity = 1,
}: SkyEffectsProps) => {
  const stars = useMemo(
    () =>
      Array.from({ length: starCount }, (_, i) => {
        const sizeRange = Math.max(0.1, maxSize - minSize);
        const baseOpacity = 0.4 + Math.random() * 0.6;
        return {
          id: i,
          top: fullArea ? Math.random() * 100 : Math.random() * 70,
          left: Math.random() * 100,
          size: Math.random() * sizeRange + minSize,
          delay: Math.random() * 4,
          duration: 2 + Math.random() * 3,
          opacity: Math.min(1, baseOpacity * brightness),
        };
      }),
    [starCount, fullArea, brightness, maxSize, minSize]
  );

  const shadow =
    glowIntensity > 0
      ? `0 0 ${6 * glowIntensity}px rgba(255, 240, 200, ${0.9 * glowIntensity}), 0 0 ${12 * glowIntensity}px rgba(255, 220, 150, ${0.5 * glowIntensity})`
      : 'none';

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
            boxShadow: shadow,
          }}
        />
      ))}
    </div>
  );
};

export default SkyEffects;
