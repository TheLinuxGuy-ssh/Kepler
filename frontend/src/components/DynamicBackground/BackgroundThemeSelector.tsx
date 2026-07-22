import React, { useState, useRef, useEffect } from 'react';
import {
  BackgroundThemes,
  THEME_LABELS,
  THEME_ICONS,
  type BackgroundTheme,
} from '@/utils/backgroundEngine';
import { useBackgroundTheme } from '@/hooks/useBackgroundTheme';
import { MaterialIcon } from '@/components/MaterialIcon';

const allOptions: Array<{ value: BackgroundTheme | 'auto'; label: string; icon: string }> = [
  { value: 'auto', label: 'Auto', icon: 'auto_awesome' },
  ...Object.values(BackgroundThemes).map((t) => ({
    value: t,
    label: THEME_LABELS[t],
    icon: THEME_ICONS[t],
  })),
];

export const BackgroundThemeSelector: React.FC = () => {
  const { userPreference, setTheme, currentTheme } = useBackgroundTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLabel =
    userPreference === 'auto'
      ? `Auto (${THEME_LABELS[currentTheme]})`
      : THEME_LABELS[userPreference];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 border border-border-panel hover:bg-surface-variant/40 transition-ui text-on-surface-variant hover:text-primary-container font-technical-data text-[10px] uppercase cursor-pointer"
        title="Change background theme"
      >
        <MaterialIcon name="palette" className="text-xs" />
        <span className="hidden sm:inline">{currentLabel}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 z-50 min-w-[180px] border border-border-panel bg-surface-container-lowest/95 backdrop-blur-md shadow-lg">
          <div className="py-1">
            {allOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setTheme(opt.value);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left transition-ui font-technical-data text-[11px] cursor-pointer ${
                  userPreference === opt.value
                    ? 'text-primary-container bg-primary-fixed-dim/10'
                    : 'text-on-surface-variant hover:bg-surface-variant/40 hover:text-primary'
                }`}
              >
                <MaterialIcon name={opt.icon} className="text-sm" />
                <span>{opt.label}</span>
                {opt.value === 'auto' && userPreference === 'auto' && (
                  <MaterialIcon name="check" className="text-xs ml-auto text-primary-container" />
                )}
                {opt.value !== 'auto' && userPreference === opt.value && (
                  <MaterialIcon name="check" className="text-xs ml-auto text-primary-container" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
