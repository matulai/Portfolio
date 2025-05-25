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
      "Tiktok Clone es una aplicación web en la cual su diseño se baso en la interfaz de TikTok, utiliza React para el desarrollo de interfaces, se desarrollo la app para mobiles utilizando React Native y la API fue desarrollada con Javalin.",
    image: "/images/tiktok.webp",
    githubURL: "https://github.com/matulai/TikTok-model-TPs-UI",
    liveURL: "",
  },
  {
    id: 5,
    title: "Rivals Tactics",
    description:
      "De la mano del motor de videojuegos Godot aparece Rivals Tactics que es un juego con el objetivo de desafíar a los jugadores a dominar el campo de batalla mediante estrategia pura y adaptabilidad en un combate 1 contra 1 de pura acción.",
    image: "/images/rivals.webp",
    githubURL: "https://github.com/matulai/videojuego-rival-tactics",
    liveURL: "https://matulai.github.io/videojuego-rival-tactics/",
  },
  {
    id: 6,
    title: "Eperdemic",
    description:
      "Eperdemic es una aplicación desarrollada con Spring Boot que simula la propagación de un virus ficticio llamado Mechanus E534, en el cual se trabajo con diferentes tecnologias como JDBC, Hibernate, Spring, Neo4j, MongoDB, MySQL y Couchbase.",
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
      "Pokemon Info es una aplicación en la que podras buscar y ver la infomación de todos pokemones, incluso su gruñido. Utiliza la API de PokeAPI para obtener los datos, React para construir la interfaz de usuario y TypeScript para tipar los datos.",
    image: "/images/pokemon-info.webp",
    githubURL: "https://github.com/matulai/Pokemons-info",
    liveURL: "https://shimmering-tarsier-51ba89.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Portfolio es una aplicación web en la que me podras conocer, conocer acerca de mis proyectos personales, experiencias laborales y maneras de contactarme. Utiliza Next para construir la interfaz de usuario y TypeScript para tipar los datos.",
    image: "/images/portfolio.webp",
    githubURL: "https://github.com/matulai/Portfolio",
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
