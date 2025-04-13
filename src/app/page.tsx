export default function Home() {
  return (
    <main className="flex flex-col flex-1 justify-self-start h-full py-14 px-32 gap-14">
      <h1 className="text-7xl drop-shadow-[8px_8px_2px_rgba(211,211,211,0.25)] tracking-[0.75rem]">
        SOBRE MÍ
      </h1>
      <section className="flex flex-col flex-1 justify-self-start gap-14">
        <span>
          <h2 className="text-5xl">Matias Laime</h2>
          <h3 className="text-4xl">Desarrollador de software</h3>
        </span>
        <section className="bg-dark-medium">
          <div className="bg-grey-dark flex justify-self-start w-full h-fit py-2 px-2.5">
            <span className="bg-dark-medium h-8 w-8"></span>
          </div>
          <div className="py-9 px-12 text-3xl">
            <p>
              Mi nombre es Matías Laime, soy programador y estudiante de
              Licenciatura en Informática en la Universidad de Quilmes. Tengo
              experiencia en frontend, pero actualmente me enfoco en backend. Me
              apasiona crear soluciones eficientes, escalables y bien
              estructuradas, siempre buscando aprender y mejorar. Además del
              desarrollo web, me gusta desarrollar videojuegos.
            </p>
          </div>
        </section>
      </section>
      <div className="relative py-3 px-16 text-start bg-dark-medium drop-shadow-[4px_4px_0px_rgba(211,211,211,0.2)] h-fit">
        <div className="absolute top-0 left-0 flex gap-3 h-full w-fit">
          <span className="h-full bg-grey-dark w-3" />
          <span className="h-full bg-grey-dark w-1" />
        </div>
        <span className="text-4xl">Bienvenido a mi sitio web</span>
      </div>
    </main>
  );
}
