import React from 'react';

interface Props {
  animating: boolean;
}

export const AuroraBackground: React.FC<Props> = ({ animating }) => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dark base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #05070A 0%, #080c14 50%, #0C1220 100%)',
        }}
      />

      {/* Aurora band - green */}
      <div
        className="absolute top-[5%] left-[-10%] w-[120%] h-[35%] opacity-[0.12]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(50, 205, 50, 0.4) 20%, rgba(80, 255, 80, 0.6) 40%, rgba(50, 205, 50, 0.4) 60%, transparent 100%)',
          filter: 'blur(20px)',
          animation: animating
            ? 'aurora-wave 10s ease-in-out infinite'
            : 'none',
          transformOrigin: 'center center',
        }}
      />

      {/* Aurora band - purple */}
      <div
        className="absolute top-[10%] left-[-5%] w-[110%] h-[25%] opacity-[0.08]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(148, 100, 255, 0.5) 30%, rgba(180, 120, 255, 0.6) 50%, rgba(148, 100, 255, 0.4) 70%, transparent 100%)',
          filter: 'blur(25px)',
          animation: animating
            ? 'aurora-wave 14s ease-in-out 2s infinite reverse'
            : 'none',
          transformOrigin: 'center center',
        }}
      />

      {/* Aurora band - cyan accent */}
      <div
        className="absolute top-[15%] left-[-8%] w-[116%] h-[20%] opacity-[0.06]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0, 229, 255, 0.3) 30%, rgba(0, 200, 230, 0.4) 50%, rgba(0, 229, 255, 0.3) 70%, transparent 100%)',
          filter: 'blur(18px)',
          animation: animating
            ? 'aurora-wave 12s ease-in-out 4s infinite'
            : 'none',
          transformOrigin: 'center center',
        }}
      />

      {/* Atmospheric glow at horizon */}
      <div
        className="absolute bottom-[30%] left-0 right-0 h-[20%]"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(50, 205, 50, 0.06) 0%, rgba(80, 100, 200, 0.03) 50%, transparent 100%)',
        }}
      />

      {/* Scattered stars */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1px 1px at 10% 70%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 50% 65%, rgba(255,255,255,0.3) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 70% 75%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
            'radial-gradient(1px 1px at 90% 85%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
            'radial-gradient(1.5px 1.5px at 15% 90%, rgba(200,255,200,0.4) 0%, transparent 100%), ' +
            'radial-gradient(1.5px 1.5px at 60% 92%, rgba(200,220,255,0.3) 0%, transparent 100%)',
        }}
      />

      {/* Green-purple gradient overlay for mood */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background:
            'linear-gradient(160deg, rgba(50, 205, 50, 0.3) 0%, transparent 30%, rgba(148, 100, 255, 0.2) 60%, transparent 100%)',
          animation: animating ? 'haze-shift 20s ease-in-out infinite' : 'none',
        }}
      />
    </div>
  );
};
