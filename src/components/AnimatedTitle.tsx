"use client";

import { useEffect, useState } from "react";

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle = ({ text }: AnimatedTitleProps) => {
  const [styles, setStyles] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setStyles(prev => [...prev, `opacity-100 translate-x-0`]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const arrayText = text.split("");

  return (
    <h1 className="flex flex-row gap-1 text-4xl drop-shadow-[8px_8px_2px_rgba(211,211,211,0.25)] md:gap-2 md:text-5xl lg:text-6xl lg:gap-3 2xl:text-7xl 2xl:gap-4">
      {arrayText.map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ease-out ${styles[index] ? styles[index] : "opacity-0 translate-x-14"}`}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;
