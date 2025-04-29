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
    githubURL: "",
    liveURL: "",
  },
  {
    id: 7,
    title: "Proyect 7",
    description: "description 7",
    image: "/images/my-anime-info.webp",
    githubURL: "",
    liveURL: "",
  },
  {
    id: 8,
    title: "Proyect 8",
    description: "description 8",
    image: "/images/my-anime-info.webp",
    githubURL: "",
    liveURL: "",
  },
  {
    id: 1,
    title: "My Anime Info",
    description:
      "This is an anime info app, it uses the Jikan API to get the data and React to build the UI and TypeScript to type the data.",
    image: "/images/my-anime-info.webp",
    githubURL: "",
    liveURL: "",
  },
  {
    id: 2,
    title: "Proyect 2",
    description: "description 2",
    image: "/images/my-anime-info.webp",
    githubURL: "",
    liveURL: "",
  },
  {
    id: 3,
    title: "Proyect 3",
    description: "description 3",
    image: "/images/my-anime-info.webp",
    githubURL: "",
    liveURL: "",
  },
  {
    id: 4,
    title: "Proyect 4",
    description: "description 4",
    image: "/images/my-anime-info.webp",
    githubURL: "",
    liveURL: "",
  },
  {
    id: 5,
    title: "Proyect 5",
    description: "description 5",
    image: "/images/my-anime-info.webp",
    githubURL: "",
    liveURL: "",
  },
];

const ProyectsInfo = () => {
  const [selectedProyect, setSelectedProyect] = useState<Proyect>(proyects[2]!);

  return (
    <section className="flex flex-col flex-1 items-center justify-between gap-6 animate-fadeIn md:flex-row">
      <Carousel
        proyects={proyects}
        setSelectedProyect={p => setSelectedProyect(p)}
      />
      <div
        key={selectedProyect.id}
        className="flex flex-col max-w-lg w-full animate-fadeIn bg-dark-medium 2xl:max-w-3xl"
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
