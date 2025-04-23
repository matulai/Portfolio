"use client";
import ProyectCard from "@/components/ProyectCard";
import Carousel from "@/components/Carousel.tsx";
import Proyect from "@/types/proyect.ts";
import { useState } from "react";
import myAnimeInfo from "@/assets/my-anime-info.webp";

const proyects: Proyect[] = [
  {
    id: 6,
    title: "Proyect 6",
    description: "description 6",
    image: myAnimeInfo,
    tags: ["tag13", "tag14"],
  },
  {
    id: 7,
    title: "Proyect 7",
    description: "description 7",
    image: myAnimeInfo,
    tags: ["tag13", "tag14"],
  },
  {
    id: 8,
    title: "Proyect 8",
    description: "description 8",
    image: myAnimeInfo,
    tags: ["tag15", "tag16"],
  },
  {
    id: 1,
    title: "My Anime Info",
    description: "description 1",
    image: myAnimeInfo,
    tags: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "Proyect 2",
    description: "description 2",
    image: myAnimeInfo,
    tags: ["tag3", "tag4"],
  },
  {
    id: 3,
    title: "Proyect 3",
    description: "description 3",
    image: myAnimeInfo,
    tags: ["tag5", "tag6"],
  },
  {
    id: 4,
    title: "Proyect 4",
    description: "description 4",
    image: myAnimeInfo,
    tags: ["tag7", "tag8"],
  },
  {
    id: 5,
    title: "Proyect 5",
    description: "description 5",
    image: myAnimeInfo,
    tags: ["tag9", "tag10"],
  },
];

const ProyectsInfo = () => {
  const [selectedProyect, setSelectedProyect] = useState<Proyect>(proyects[2]!);

  return (
    <section className="flex flex-row flex-1 items-center justify-between animate-fadeIn h-fill">
      <Carousel
        proyects={proyects}
        setSelectedProyect={p => setSelectedProyect(p)}
      />
      <ProyectCard proyect={selectedProyect} />
    </section>
  );
};

export default ProyectsInfo;
