import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light', // default theme
      setTheme: (t) => set({ theme: t }),
    }),
    {
      name: 'theme-storage', // key for localStorage
    }
  )
);
