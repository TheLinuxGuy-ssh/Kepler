import React from 'react';

interface Props {
  animating: boolean;
}

export const MeteorBackground: React.FC<Props> = ({ animating }) => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dark space base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #05070A 0%, #0C1220 50%, #101418 100%)',
        }}
      />

      {/* Dense star field */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1px 1px at 5% 10%, rgba(255,255,255,0.7) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 15% 45%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 25% 20%, rgba(200,220,255,0.6) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 35% 70%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 45% 35%, rgba(255,255,255,0.6) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 55% 55%, rgba(200,220,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 65% 15%, rgba(255,255,255,0.7) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 75% 80%, rgba(255,255,255,0.3) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 85% 40%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 95% 25%, rgba(200,220,255,0.6) 0%, transparent 100%)',
        }}
      />

      {/* Shooting star trails */}
      {animating && (
        <>
          <div
            className="absolute h-[1px] opacity-0"
            style={{
              top: '12%',
              left: '-5%',
              width: '35%',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,1) 100%)',
              animation: 'meteor-streak 6s linear 0s infinite',
              transform: 'rotate(-25deg)',
              transformOrigin: 'right center',
            }}
          />
          <div
            className="absolute h-[1px] opacity-0"
            style={{
              top: '28%',
              left: '10%',
              width: '25%',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(200,220,255,0.1) 15%, rgba(200,220,255,0.7) 75%, rgba(200,220,255,0.9) 100%)',
              animation: 'meteor-streak 8s linear 3s infinite',
              transform: 'rotate(-15deg)',
              transformOrigin: 'right center',
            }}
          />
          <div
            className="absolute h-[1px] opacity-0"
            style={{
              top: '8%',
              left: '30%',
              width: '20%',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,240,200,0.1) 10%, rgba(255,240,200,0.6) 70%, rgba(255,240,200,0.8) 100%)',
              animation: 'meteor-streak 10s linear 7s infinite',
              transform: 'rotate(-35deg)',
              transformOrigin: 'right center',
            }}
          />
          <div
            className="absolute h-[1px] opacity-0"
            style={{
              top: '20%',
              left: '50%',
              width: '18%',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0.7) 100%)',
              animation: 'meteor-streak 12s linear 5s infinite',
              transform: 'rotate(-20deg)',
              transformOrigin: 'right center',
            }}
          />
        </>
      )}

      {/* Light particle dust */}
      {animating && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 100%), ' +
              'radial-gradient(1px 1px at 40% 60%, rgba(200,220,255,0.4) 0%, transparent 100%), ' +
              'radial-gradient(1.5px 1.5px at 60% 20%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
              'radial-gradient(1px 1px at 80% 50%, rgba(200,220,255,0.3) 0%, transparent 100%)',
            animation: 'particle-drift 25s linear infinite',
          }}
        />
      )}

      {/* Faint blue atmospheric glow at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%]"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(64, 160, 255, 0.04) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
