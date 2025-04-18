import Carousel from "@/components/Carousel.tsx";

export default function Proyects() {
  return (
    <main className="flex flex-col flex-1 justify-self-start h-full py-14 px-32 gap-14">
      <h1 className="text-7xl drop-shadow-[8px_8px_2px_rgba(211,211,211,0.25)] tracking-[0.75rem]">
        PROYECTOS
      </h1>
      <section className="flex flex-row flex-1 justify-self-start gap-14">
        <Carousel />
        <section></section>
      </section>
      <div className="relative py-3 px-16 text-start bg-dark-medium drop-shadow-[4px_4px_0px_rgba(211,211,211,0.2)] h-fit">
        <div className="absolute top-0 left-0 flex gap-3 h-full w-fit">
          <span className="h-full bg-grey-dark w-3" />
          <span className="h-full bg-grey-dark w-1" />
        </div>
        <span className="text-4xl">
          Aquí podes encontrar mis proyectos personales
        </span>
      </div>
    </main>
  );
}
