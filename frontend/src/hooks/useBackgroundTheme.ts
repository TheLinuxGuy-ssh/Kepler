import { useState, useEffect, useCallback, useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  BackgroundThemes,
  evaluateTheme,
  isDaytime,
  loadSavedTheme,
  saveThemePreference,
  type BackgroundTheme,
} from '@/utils/backgroundEngine';
import { useWeatherStatus, useCollisions } from '@/hooks/useApi';

export { BackgroundThemes };

function resolveAutoTheme(
  weatherData: ReturnType<typeof useWeatherStatus>['data'],
  collisionsData: ReturnType<typeof useCollisions>['data']
): BackgroundTheme {
  return evaluateTheme({
    weatherStatus: weatherData?.data ?? null,
    collisions: collisionsData?.data ?? null,
    isDaytime: isDaytime(),
  });
}

export function useBackgroundTheme() {
  const prefersReducedMotion = useReducedMotion();
  const weatherQuery = useWeatherStatus();
  const collisionsQuery = useCollisions({ size: 50 });

  const [userPreference, setUserPreference] = useState<
    BackgroundTheme | 'auto'
  >(loadSavedTheme);

  // Compute the auto-detected theme from live data
  const autoTheme = useMemo(
    () => resolveAutoTheme(weatherQuery.data, collisionsQuery.data),
    [weatherQuery.data, collisionsQuery.data]
  );

  // Effective theme: manual override or auto-detected
  const currentTheme: BackgroundTheme =
    userPreference === 'auto' ? autoTheme : userPreference;

  const [isTabActive, setIsTabActive] = useState(true);
  const animating = !prefersReducedMotion && isTabActive;

  // Handle manual theme change
  const setTheme = useCallback((theme: BackgroundTheme | 'auto') => {
    setUserPreference(theme);
    saveThemePreference(theme);
  }, []);

  // Visibility API: pause animations when tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return {
    currentTheme,
    userPreference,
    setTheme,
    animating,
    prefersReducedMotion: !!prefersReducedMotion,
  };
}
