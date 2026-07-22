import React from 'react';

interface Props {
  animating: boolean;
}

export const NightBackground: React.FC<Props> = ({ animating }) => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Deep space base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #05070A 0%, #080c14 40%, #0C1220 100%)',
        }}
      />

      {/* Dense star field layer 1 - small */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1px 1px at 5% 8%, rgba(255,255,255,0.7) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 12% 35%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 20% 15%, rgba(200,220,255,0.6) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 35% 5%, rgba(255,255,255,0.6) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 45% 45%, rgba(200,200,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 55% 20%, rgba(255,255,255,0.7) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 60% 75%, rgba(255,255,255,0.3) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 78% 55%, rgba(200,220,255,0.6) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 85% 10%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 92% 40%, rgba(255,255,255,0.5) 0%, transparent 100%)',
        }}
      />

      {/* Star field layer 2 - medium */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1.5px 1.5px at 8% 22%, rgba(255,255,255,0.8) 0%, transparent 100%), ' +
            'radial-gradient(1.5px 1.5px at 22% 68%, rgba(200,220,255,0.7) 0%, transparent 100%), ' +
            'radial-gradient(1.5px 1.5px at 48% 12%, rgba(255,255,255,0.6) 0%, transparent 100%), ' +
            'radial-gradient(1.5px 1.5px at 65% 48%, rgba(255,255,255,0.7) 0%, transparent 100%), ' +
            'radial-gradient(1.5px 1.5px at 82% 72%, rgba(200,220,255,0.6) 0%, transparent 100%), ' +
            'radial-gradient(1.5px 1.5px at 95% 18%, rgba(255,255,255,0.5) 0%, transparent 100%)',
        }}
      />

      {/* Twinkling stars */}
      {animating && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(2px 2px at 15% 30%, rgba(200,220,255,0.9) 0%, transparent 100%), ' +
              'radial-gradient(2px 2px at 42% 55%, rgba(255,255,255,0.8) 0%, transparent 100%), ' +
              'radial-gradient(2px 2px at 73% 18%, rgba(200,220,255,0.9) 0%, transparent 100%), ' +
              'radial-gradient(2px 2px at 88% 62%, rgba(255,255,255,0.7) 0%, transparent 100%)',
            animation: 'star-twinkle 4s ease-in-out infinite alternate',
          }}
        />
      )}

      {/* Moon glow (upper right) */}
      <div
        className="absolute top-[8%] right-[12%] w-32 h-32"
        style={{
          background:
            'radial-gradient(circle at center, rgba(200, 210, 230, 0.2) 0%, rgba(150, 170, 200, 0.08) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[10%] right-[14%] w-8 h-8 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, rgba(220, 230, 245, 0.6) 0%, rgba(180, 195, 220, 0.3) 60%, transparent 100%)',
          boxShadow: '0 0 30px rgba(180, 195, 220, 0.15), 0 0 60px rgba(180, 195, 220, 0.08)',
        }}
      />

      {/* Earth city lights (bottom) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(40, 80, 140, 0.12) 0%, rgba(20, 50, 100, 0.06) 50%, transparent 80%)',
        }}
      />

      {/* Scattered city light dots */}
      <div
        className="absolute bottom-[5%] left-[20%] right-[20%] h-[15%] opacity-40"
        style={{
          background:
            'radial-gradient(1px 1px at 10% 50%, rgba(255, 200, 100, 0.6) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 25% 30%, rgba(255, 220, 130, 0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 40% 60%, rgba(255, 200, 100, 0.4) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 55% 40%, rgba(255, 210, 120, 0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 70% 55%, rgba(255, 200, 100, 0.3) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 85% 35%, rgba(255, 220, 130, 0.4) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};
