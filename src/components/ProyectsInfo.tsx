"use client";
import { useState } from "react";
import ProyectCard from "@/components/ProyectCard";
import Carousel from "@/components/Carousel.tsx";
import type Proyect from "@/types/proyect.ts";

const proyects: Proyect[] = [
  {
    id: 6,
    title: "Proyect 6",
    description: "description 6",
    image: "/images/my-anime-info.webp",
    tags: ["tag13", "tag14"],
  },
  {
    id: 7,
    title: "Proyect 7",
    description: "description 7",
    image: "/images/my-anime-info.webp",
    tags: ["tag13", "tag14"],
  },
  {
    id: 8,
    title: "Proyect 8",
    description: "description 8",
    image: "/images/my-anime-info.webp",
    tags: ["tag15", "tag16"],
  },
  {
    id: 1,
    title: "My Anime Info",
    description: "description 1",
    image: "/images/my-anime-info.webp",
    tags: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "Proyect 2",
    description: "description 2",
    image: "/images/my-anime-info.webp",
    tags: ["tag3", "tag4"],
  },
  {
    id: 3,
    title: "Proyect 3",
    description: "description 3",
    image: "/images/my-anime-info.webp",
    tags: ["tag5", "tag6"],
  },
  {
    id: 4,
    title: "Proyect 4",
    description: "description 4",
    image: "/images/my-anime-info.webp",
    tags: ["tag7", "tag8"],
  },
  {
    id: 5,
    title: "Proyect 5",
    description: "description 5",
    image: "/images/my-anime-info.webp",
    tags: ["tag9", "tag10"],
  },
];

const ProyectsInfo = () => {
  const [selectedProyect, setSelectedProyect] = useState<Proyect>(proyects[2]!);

  return (
    <section className="flex flex-row flex-1 items-center justify-between animate-fadeIn">
      <Carousel
        proyects={proyects}
        setSelectedProyect={p => setSelectedProyect(p)}
      />
      <div
        key={selectedProyect.id}
        className="flex flex-col max-w-3xl w-full animate-fadeIn bg-dark-medium"
      >
        <div className="flex justify-start py-2 px-2.5 bg-grey-dark">
          <span className="h-8 w-8 bg-dark-medium" />
        </div>
        <ProyectCard proyect={selectedProyect} />
      </div>
    </section>
  );
};

export default ProyectsInfo;
