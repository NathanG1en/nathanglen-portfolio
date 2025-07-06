"use client";
import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50 }: { text: string, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayedText(''); // Clear text on re-render
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <span className="font-mono">
      {displayedText}
      <span
        className="animate-blink inline-block w-2.5 h-5 bg-current ml-1"
        style={{ transform: 'translateY(0.25rem)' }}
      />
    </span>
  );
};

export default Typewriter; 