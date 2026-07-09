import { useEffect, useState } from 'react';

export function useStoredState<T>(key: string, defaultValue: T) {
  const storageKey = `portfolio:${key}`;

  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? (JSON.parse(raw) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch {
      // localStorage unavailable (e.g. private browsing) - fail silently
    }
  }, [storageKey, value]);

  return [value, setValue] as const;
}
