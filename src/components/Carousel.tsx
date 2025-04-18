"use client";

import { useState, useRef, useEffect } from "react";
import Proyect from "@/types/proyect";

// const carousel = carouselRef.current;
//     if (index === 2) {
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setIndex(proyects.length - 4);
//       }, 490);
//     } else if (index === proyects.length - 3) {
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setIndex(3);
//       }, 490);
//     } else {
//       setIsTransitioning(true);
//     }

const proyects: Proyect[] = [
  {
    id: 123,
    description: "Proyecto 6",
    image: "/path/to/image7.jpg",
    tags: ["tag13", "tag14"],
  },
  {
    id: 0,
    description: "Proyecto 7",
    image: "/path/to/image7.jpg",
    tags: ["tag13", "tag14"],
  },
  {
    id: 1,
    description: "Proyecto 8",
    image: "/path/to/image8.jpg",
    tags: ["tag15", "tag16"],
  },
  {
    id: 2,
    description: "Proyecto 1",
    image: "/path/to/image1.jpg",
    tags: ["tag1", "tag2"],
  },
  {
    id: 3,
    description: "Proyecto 2",
    image: "/path/to/image2.jpg",
    tags: ["tag3", "tag4"],
  },
  {
    id: 4,
    description: "Proyecto 3",
    image: "/path/to/image3.jpg",
    tags: ["tag5", "tag6"],
  },
  {
    id: 5,
    description: "Proyecto 4",
    image: "/path/to/image4.jpg",
    tags: ["tag7", "tag8"],
  },
  {
    id: 6,
    description: "Proyecto 5",
    image: "/path/to/image5.jpg",
    tags: ["tag9", "tag10"],
  },
  {
    id: 7,
    description: "Proyecto 6",
    image: "/path/to/image6.jpg",
    tags: ["tag11", "tag12"],
  },
  {
    id: 8,
    description: "Proyecto 7",
    image: "/path/to/image6.jpg",
    tags: ["tag11", "tag12"],
  },
  {
    id: 9,
    description: "Proyecto 8",
    image: "/path/to/image6.jpg",
    tags: ["tag11", "tag12"],
  },
  {
    id: 10,
    description: "Proyecto 1",
    image: "/path/to/image6.jpg",
    tags: ["tag11", "tag12"],
  },
  {
    id: 11,
    description: "Proyecto 2",
    image: "/path/to/image6.jpg",
    tags: ["tag11", "tag12"],
  },
  {
    id: 12,
    description: "Proyecto 3",
    image: "/path/to/image6.jpg",
    tags: ["tag11", "tag12"],
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    if (index === 2) {
      setTimeout(() => {
        carousel.style.transition = "none";
        setIndex(proyects.length - 4);
      }, 550);
    } else if (index === proyects.length - 3) {
      setTimeout(() => {
        carousel.style.transition = "none";
        setIndex(3);
      }, 550);
    } else {
      carousel.style.transition = "transform 0.5s ease-in-out";
    }
  }, [index]);

  const handleNextClick = () => {
    setIndex(prev => prev + 1);
  };

  const handlePrevClick = () => {
    setIndex(prev => prev - 1);
  };

  return (
    <div className="relative flex flex-col justify-center max-w-lg w-full px-6 py-14 gap-6 h-[548px]">
      <div className="overflow-hidden flex-1 flex flex-col justify-start items-center">
        <div
          className="flex flex-col gap-6 w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${(index - 2) * (64 + 24)}px)` }}
          ref={carouselRef}
        >
          {proyects.map(proyect => (
            <button
              key={proyect.id}
              className="py-3 h-fit flex items-center justify-center bg-dark-light"
            >
              <span className="text-4xl truncate">{proyect.description}</span>
            </button>
          ))}
        </div>
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
