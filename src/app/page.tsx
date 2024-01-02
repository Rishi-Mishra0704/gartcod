import React, { useState, useEffect } from 'react';
import IconComponent from '@/components/IconComponent';

export default function Home() {
  const [icons, setIcons] = useState<('chrome' | 'terminal' | 'mobile')[]>([
    'chrome',
    'terminal',
    'mobile',
  ]);
  const [currentColor, setCurrentColor] = useState<string>('#ffeb3b'); // Initial color

  return (
   <></>
  )
}
