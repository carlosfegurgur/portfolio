'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Set mounted on client side
  useEffect(() => {
    setMounted(true);
    
    // Check system preference on mount
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
    setTheme(systemTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme, mounted };
}