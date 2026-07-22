import React from 'react';

interface Props {
  animating: boolean;
}

export const CollisionAlertBackground: React.FC<Props> = ({ animating }) => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dark base with red tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0C1220 0%, #12080a 50%, #0C1220 100%)',
        }}
      />

      {/* Red warning pulse */}
      {animating && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255, 59, 48, 0.5) 0%, transparent 70%)',
            animation: 'collision-pulse 3s ease-in-out infinite',
          }}
        />
      )}

      {/* Radar sweep */}
      {animating && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[200%] h-[200%] opacity-[0.06]"
            style={{
              background:
                'conic-gradient(from 0deg, rgba(255, 59, 48, 0.3) 0%, transparent 20%)',
              animation: 'radar-sweep 4s linear infinite',
            }}
          />
        </div>
      )}

      {/* Orbit highlights - elliptical paths */}
      {animating && (
        <>
          <div
            className="absolute top-[20%] left-[15%] w-[70%] h-[60%] opacity-[0.04]"
            style={{
              border: '1px solid rgba(255, 59, 48, 0.4)',
              borderRadius: '50%',
              transform: 'rotateX(70deg)',
              animation: 'orbit-rotate 20s linear infinite',
            }}
          />
          <div
            className="absolute top-[25%] left-[20%] w-[60%] h-[50%] opacity-[0.03]"
            style={{
              border: '1px solid rgba(255, 149, 0, 0.3)',
              borderRadius: '50%',
              transform: 'rotateX(65deg) rotateZ(30deg)',
              animation: 'orbit-rotate 25s linear infinite reverse',
            }}
          />
          <div
            className="absolute top-[15%] left-[10%] w-[80%] h-[70%] opacity-[0.03]"
            style={{
              border: '1px solid rgba(255, 59, 48, 0.2)',
              borderRadius: '50%',
              transform: 'rotateX(75deg) rotateZ(-20deg)',
              animation: 'orbit-rotate 30s linear infinite',
            }}
          />
        </>
      )}

      {/* Red accent dots (conjunction points) */}
      {animating && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(3px 3px at 45% 45%, rgba(255, 59, 48, 0.8) 0%, transparent 100%), ' +
              'radial-gradient(3px 3px at 55% 52%, rgba(255, 59, 48, 0.6) 0%, transparent 100%), ' +
              'radial-gradient(2px 2px at 48% 48%, rgba(255, 149, 0, 0.5) 0%, transparent 100%)',
            animation: 'collision-pulse 2s ease-in-out infinite',
          }}
        />
      )}

      {/* Subtle stars (dimmed) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 90% 70%, rgba(255,255,255,0.3) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};
