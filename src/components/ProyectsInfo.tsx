"use client";
import { useState } from "react";
import ProyectCard from "@/components/ProyectCard";
import Carousel from "@/components/Carousel.tsx";
import type Proyect from "@/types/proyect.ts";

const proyects: Proyect[] = [
  {
    id: 4,
    title: "TikTok Clone",
    description:
      "Aplicación web que simula la interfaz de TikTok, utiliza React y esta adaptado a mobile utilizando React Native. La API fue desarrollada con Javalin.",
    image: "/images/tiktok.webp",
    githubURL: "https://github.com/matulai/TikTok-model-TPs-UI",
    liveURL: "",
  },
  {
    id: 5,
    title: "Rivals Tactics",
    description:
      "De la mano del motor de videojuegos Godot aparece Rivals Tactics que desafía a los jugadores a dominar el campo de batalla mediante estrategia pura y adaptabilidad",
    image: "/images/rivals.webp",
    githubURL: "https://github.com/matulai/videojuego-rival-tactics",
    liveURL: "https://matulai.github.io/videojuego-rival-tactics/",
  },
  {
    id: 6,
    title: "Eperdemic",
    description:
      "Proyecto backend desarrollado con Spring Boot para una aplicación que simula la propagación de un virus ficticio llamado Mechanus E534. El sistema forma parte de una solución colaborativa entre médicos, ingenieros y espiritistas, destinada a modelar y analizar epidemias paranormales.",
    image: "/images/eperdemic.webp",
    githubURL:
      "https://github.com/matulai/Estrategas-y-persistentes-TP/tree/main",
    liveURL: "",
  },
  {
    id: 1,
    title: "My Anime Info",
    description:
      "My Anime Info es una aplicación de información sobre anime como animes de estreno, randoms, buscar por nombre, etc. Utiliza la API de Jikan para obtener los datos, React para construir la interfaz de usuario y TypeScript para tipar los datos.",
    image: "/images/my-anime-info.webp",
    githubURL: "https://github.com/matulai/My-Anime-Info",
    liveURL: "https://matulai.github.io/My-Anime-Info/",
  },
  {
    id: 2,
    title: "Pokemon Info",
    description:
      "Pokemon Info es una aplicación de información sobre pokemons. Utiliza la API de Jikan para obtener los datos, React para construir la interfaz de usuario y TypeScript para tipar los datos.",
    image: "/images/pokemon-info.webp",
    githubURL: "https://github.com/matulai/Pokemons-info",
    liveURL: "https://shimmering-tarsier-51ba89.netlify.app/",
  },
  {
    id: 3,
    title: "Pokemon Info",
    description:
      "Pokemon Info es una aplicación de información sobre pokemons. Utiliza la API de Jikan para obtener los datos, React para construir la interfaz de usuario y TypeScript para tipar los datos.",
    image: "/images/pokemon-info.webp",
    githubURL: "https://github.com/matulai/Pokemons-info",
    liveURL: "https://shimmering-tarsier-51ba89.netlify.app/",
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
