import React from 'react';

interface Props {
  animating: boolean;
}

export const SolarStormBackground: React.FC<Props> = ({ animating }) => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dark space base with orange tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0C1220 0%, #1a0e05 40%, #1c1008 100%)',
        }}
      />

      {/* Solar flare glow (top) */}
      <div
        className="absolute -top-[15%] left-[10%] w-[80%] h-[50%] opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 140, 0, 0.6) 0%, rgba(255, 80, 0, 0.2) 40%, transparent 70%)',
          animation: animating ? 'solar-pulse 8s ease-in-out infinite' : 'none',
        }}
      />

      {/* Secondary flare */}
      <div
        className="absolute -top-[5%] right-[5%] w-[40%] h-[35%] opacity-15"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 180, 0, 0.5) 0%, rgba(255, 100, 0, 0.15) 50%, transparent 80%)',
          animation: animating
            ? 'solar-pulse 6s ease-in-out 2s infinite'
            : 'none',
        }}
      />

      {/* Plasma wave bands */}
      {animating && (
        <>
          <div
            className="absolute top-[20%] -left-[10%] w-[120%] h-[3px] opacity-[0.08]"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255, 120, 0, 0.8) 20%, rgba(255, 80, 0, 1) 50%, rgba(255, 120, 0, 0.8) 80%, transparent 100%)',
              animation: 'plasma-wave 12s linear infinite',
              filter: 'blur(2px)',
            }}
          />
          <div
            className="absolute top-[35%] -left-[10%] w-[120%] h-[2px] opacity-[0.06]"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255, 160, 50, 0.7) 30%, rgba(255, 100, 20, 0.9) 50%, rgba(255, 160, 50, 0.7) 70%, transparent 100%)',
              animation: 'plasma-wave 15s linear 3s infinite',
              filter: 'blur(1.5px)',
            }}
          />
          <div
            className="absolute top-[50%] -left-[10%] w-[120%] h-[2px] opacity-[0.05]"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255, 140, 30, 0.6) 25%, rgba(255, 90, 10, 0.8) 50%, rgba(255, 140, 30, 0.6) 75%, transparent 100%)',
              animation: 'plasma-wave 18s linear 6s infinite',
              filter: 'blur(1px)',
            }}
          />
        </>
      )}

      {/* Glowing particles */}
      {animating && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(2px 2px at 15% 25%, rgba(255, 160, 50, 0.8) 0%, transparent 100%), ' +
              'radial-gradient(1.5px 1.5px at 35% 45%, rgba(255, 120, 0, 0.6) 0%, transparent 100%), ' +
              'radial-gradient(2px 2px at 55% 15%, rgba(255, 200, 80, 0.7) 0%, transparent 100%), ' +
              'radial-gradient(1px 1px at 75% 55%, rgba(255, 140, 30, 0.5) 0%, transparent 100%), ' +
              'radial-gradient(1.5px 1.5px at 25% 70%, rgba(255, 100, 0, 0.4) 0%, transparent 100%), ' +
              'radial-gradient(1px 1px at 65% 35%, rgba(255, 180, 60, 0.6) 0%, transparent 100%)',
            animation: 'particle-drift 20s linear infinite',
          }}
        />
      )}

      {/* Overall atmospheric orange haze */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 120, 0, 0.3) 0%, transparent 40%, rgba(255, 80, 0, 0.2) 70%, transparent 100%)',
          animation: animating ? 'haze-shift 15s ease-in-out infinite' : 'none',
        }}
      />

      {/* Subtle stars (barely visible through storm) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(1px 1px at 10% 60%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 50% 80%, rgba(255,255,255,0.3) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};
