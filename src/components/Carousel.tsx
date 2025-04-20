"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Proyect from "@/types/proyect";

interface CarouselProps {
  proyects: Proyect[];
}

const Carousel = ({ proyects }: CarouselProps) => {
  const [items, setItems] = useState(proyects);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const handleNextClick = () => {
    if (items.length > 5) {
      const newList = [...items];
      const first = newList.shift();
      setItems([...newList, first!]);
      setDirection("down");
    }
  };

  const handlePrevClick = () => {
    if (items.length > 5) {
      const newList = [...items];
      const last = newList.pop();
      setItems([last!, ...newList]);
      setDirection("up");
    }
  };

  const variants = {
    initial: (dir: "up" | "down") => ({
      opacity: 0,
      y: dir === "down" ? 88 : -88,
    }),
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: (dir: "up" | "down") => ({
      opacity: 0,
      y: dir === "down" ? -88 : 88,
    }),
  };

  return (
    <div className="relative flex flex-col justify-center max-w-lg w-full px-6 py-14 gap-6 h-[548px]">
      <div className="overflow-hidden flex-1 flex flex-col justify-center items-center gap-6">
        <AnimatePresence mode="popLayout" custom={direction}>
          {items.slice(0, 5).map(proyect => (
            <motion.button
              key={proyect.id}
              className="py-3 h-fit w-full flex items-center justify-center bg-dark-light"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
              layout
            >
              <span className="text-4xl truncate">{proyect.description}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 flex flex-col justify-between items-center z-10">
        <button
          onClick={handlePrevClick}
          className="bg-dark-light w-12 h-12 rounded-full"
        >
          ↑
        </button>
        <button
          onClick={handleNextClick}
          className="bg-dark-light w-12 h-12 rounded-full"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default Carousel;
