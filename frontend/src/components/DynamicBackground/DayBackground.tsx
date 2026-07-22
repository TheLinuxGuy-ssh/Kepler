import React from 'react';

interface Props {
  animating: boolean;
}

export const DayBackground: React.FC<Props> = ({ animating }) => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient: deep space transitioning to lighter blue */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0C1220 0%, #0a1628 30%, #0d1f3c 60%, #1a3a5c 100%)',
        }}
      />

      {/* Subtle star field (fewer, fainter for daytime) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.3) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.2) 0%, transparent 100%), ' +
            'radial-gradient(1.5px 1.5px at 50% 10%, rgba(255,255,255,0.25) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 75% 25%, rgba(255,255,255,0.15) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 90% 55%, rgba(255,255,255,0.2) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.15) 0%, transparent 100%)',
          opacity: 0.6,
        }}
      />

      {/* Earth glow from bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60%]"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 100%, rgba(64, 160, 255, 0.15) 0%, rgba(30, 90, 180, 0.08) 40%, transparent 70%)',
        }}
      />

      {/* Soft blue atmosphere band */}
      <div
        className="absolute bottom-[20%] left-0 right-0 h-[15%]"
        style={{
          background:
            'linear-gradient(0deg, rgba(100, 180, 255, 0.06) 0%, rgba(135, 206, 250, 0.1) 50%, rgba(100, 180, 255, 0.03) 100%)',
        }}
      />

      {/* Gentle cloud layers */}
      {animating && (
        <>
          <div
            className="absolute bottom-[15%] -left-[20%] w-[140%] h-[8%] opacity-[0.04]"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 70%, transparent 100%)',
              animation: 'bg-drift-slow 120s linear infinite',
            }}
          />
          <div
            className="absolute bottom-[25%] -left-[30%] w-[160%] h-[5%] opacity-[0.03]"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 75%, transparent 100%)',
              animation: 'bg-drift-slow 180s linear infinite reverse',
            }}
          />
        </>
      )}

      {/* Sun glow (top right corner) */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] opacity-30"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 220, 130, 0.4) 0%, rgba(255, 200, 80, 0.1) 40%, transparent 70%)',
        }}
      />
    </div>
  );
};
