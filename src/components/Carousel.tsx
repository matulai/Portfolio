"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Chevron from "@/components/Chevron";
import type Proyect from "@/types/proyect";

interface CarouselProps {
  proyects: Proyect[];
  setSelectedProyect: (proyect: Proyect) => void;
}

const Carousel = ({ proyects, setSelectedProyect }: CarouselProps) => {
  const [items, setItems] = useState(proyects);
  const [isAnimating, setIsAnimating] = useState(false);
  const offsetRef = useRef(0);

  const rotateItems = (count: number) => {
    if (isAnimating) return;

    setIsAnimating(true);

    const newItems = [...items];
    let nextItems;
    if (count > 0) {
      const moved = newItems.splice(0, count);
      nextItems = [...newItems, ...moved];
    } else {
      const abs = Math.abs(count);
      const moved = newItems.slice(-abs);
      const remaining = newItems.slice(0, -abs);
      nextItems = [...moved, ...remaining];
    }

    setItems(nextItems);
    setSelectedProyect(nextItems[2]!);

    offsetRef.current = count;
    // To prevent the animation from being triggered again immediately
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleOnClick = (index: number) => {
    if (index === 2 || isAnimating) return;
    const count = index - 2;
    rotateItems(count);
  };

  const handlePrevClick = () => {
    if (isAnimating) return;
    rotateItems(-1);
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    rotateItems(1);
  };

  const variants = {
    initial: (custom: number) => ({
      opacity: 0,
      y: 88 * custom,
    }),
    animate: (_custom: number) => ({
      opacity: 1,
      y: 0,
    }),
    exit: (custom: number) => ({
      opacity: 0,
      y: -88 * custom,
    }),
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 px-6 max-w-lg w-full">
      <button
        onClick={handlePrevClick}
        className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-dark-light hover:bg-grey-dark hover:text-black"
      >
        <Chevron />
      </button>
      <div className="flex flex-col items-center gap-6 w-full overflow-hidden">
        <AnimatePresence mode="popLayout" custom={offsetRef.current}>
          {items.slice(0, 5).map((proyect, index) => {
            const isActive = index === 2;

            return (
              <motion.button
                key={proyect.id}
                className={`flex justify-center py-3 w-3/4 cursor-pointer text-4xl truncate ${isActive ? "w-full scale-y-110 bg-grey-dark text-black" : "bg-dark-light"} hover:bg-grey-dark hover:text-black`}
                onClick={() => handleOnClick(index)}
                custom={offsetRef.current}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                layout
              >
                <motion.span layout transition={{ duration: 0.3 }}>
                  {proyect.title}
                </motion.span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
      <button
        onClick={handleNextClick}
        className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-dark-light hover:bg-grey-dark hover:text-black"
      >
        <Chevron className="rotate-180" />
      </button>
    </div>
  );
};

export default Carousel;
