'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Button onClick={() => setTheme('light')}>Light</Button>
      <Button onClick={() => setTheme('dark')}>Dark</Button>
    </div>
  );
}
