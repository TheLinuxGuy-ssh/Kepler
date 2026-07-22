import type { WeatherStatus, Collision } from '@/services/api';

export const BackgroundThemes = {
  DAY: 'day',
  NIGHT: 'night',
  SOLAR_STORM: 'solar-storm',
  AURORA: 'aurora',
  METEOR_SHOWER: 'meteor-shower',
  COLLISION_ALERT: 'collision-alert',
} as const;

export type BackgroundTheme =
  (typeof BackgroundThemes)[keyof typeof BackgroundThemes];

export const THEME_LABELS: Record<BackgroundTheme, string> = {
  [BackgroundThemes.DAY]: 'Day',
  [BackgroundThemes.NIGHT]: 'Night',
  [BackgroundThemes.SOLAR_STORM]: 'Solar Storm',
  [BackgroundThemes.AURORA]: 'Aurora',
  [BackgroundThemes.METEOR_SHOWER]: 'Meteor Shower',
  [BackgroundThemes.COLLISION_ALERT]: 'Collision Alert',
};

export const THEME_ICONS: Record<BackgroundTheme, string> = {
  [BackgroundThemes.DAY]: 'wb_sunny',
  [BackgroundThemes.NIGHT]: 'dark_mode',
  [BackgroundThemes.SOLAR_STORM]: 'local_fire_department',
  [BackgroundThemes.AURORA]: 'nightlight',
  [BackgroundThemes.METEOR_SHOWER]: 'comet',
  [BackgroundThemes.COLLISION_ALERT]: 'warning',
};

interface ConditionInput {
  weatherStatus: WeatherStatus | null | undefined;
  collisions: Collision[] | null | undefined;
  isDaytime: boolean;
}

// Priority: higher number = more critical, overrides lower
const THEME_PRIORITY: Record<BackgroundTheme, number> = {
  [BackgroundThemes.COLLISION_ALERT]: 100,
  [BackgroundThemes.SOLAR_STORM]: 80,
  [BackgroundThemes.AURORA]: 60,
  [BackgroundThemes.METEOR_SHOWER]: 40,
  [BackgroundThemes.NIGHT]: 20,
  [BackgroundThemes.DAY]: 10,
};

export function evaluateTheme(conditions: ConditionInput): BackgroundTheme {
  const candidates: { theme: BackgroundTheme; priority: number }[] = [];

  // Day/Night is always a candidate
  candidates.push({
    theme: conditions.isDaytime
      ? BackgroundThemes.DAY
      : BackgroundThemes.NIGHT,
    priority: conditions.isDaytime
      ? THEME_PRIORITY[BackgroundThemes.DAY]
      : THEME_PRIORITY[BackgroundThemes.NIGHT],
  });

  // Check weather status for solar storm / aurora / meteor
  if (conditions.weatherStatus) {
    const ws = conditions.weatherStatus;

    // Solar storm: elevated active storm or flare count
    if (ws.active_storm_count > 0 || ws.active_flare_count >= 2) {
      candidates.push({
        theme: BackgroundThemes.SOLAR_STORM,
        priority: THEME_PRIORITY[BackgroundThemes.SOLAR_STORM],
      });
    }

    // Aurora: high Kp index (>= 5 is geomagnetic storm territory)
    if (ws.kp_index >= 5) {
      candidates.push({
        theme: BackgroundThemes.AURORA,
        priority: THEME_PRIORITY[BackgroundThemes.AURORA],
      });
    }
  }

  // Check collisions for high-risk conjunctions
  if (conditions.collisions && conditions.collisions.length > 0) {
    const highRisk = conditions.collisions.some(
      (c) =>
        c.risk_level === 'CRITICAL' ||
        (c.risk_level === 'HIGH' && c.status === 'PENDING')
    );
    if (highRisk) {
      candidates.push({
        theme: BackgroundThemes.COLLISION_ALERT,
        priority: THEME_PRIORITY[BackgroundThemes.COLLISION_ALERT],
      });
    }
  }

  // Pick the highest priority candidate
  candidates.sort((a, b) => b.priority - a.priority);
  return candidates[0]?.theme ?? BackgroundThemes.DAY;
}

export function isDaytime(): boolean {
  const hour = new Date().getUTCHours();
  return hour >= 6 && hour < 18;
}

const STORAGE_KEY = 'kepler-bg-theme';

export function loadSavedTheme(): BackgroundTheme | 'auto' {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (
      saved === 'auto' ||
      Object.values(BackgroundThemes).includes(saved as BackgroundTheme)
    ) {
      return saved as BackgroundTheme | 'auto';
    }
  } catch {
    // localStorage unavailable
  }
  return 'auto';
}

export function saveThemePreference(theme: BackgroundTheme | 'auto'): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable
  }
}
