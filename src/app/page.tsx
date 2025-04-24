import AnimatedTitle from "@/components/AnimatedTitle";
import PageInfo from "@/components/PageInfo";

export default function Home() {
  return (
    <>
      <AnimatedTitle text="SOBRE MÍ" />
      <section className="flex flex-col flex-1 justify-self-start gap-14 animate-fadeIn">
        <div>
          <h2 className="text-5xl">Matias Laime</h2>
          <h3 className="text-4xl">Desarrollador de software</h3>
        </div>
        <div className="flex flex-col bg-dark-medium">
          <div className="flex justify-start py-2 px-2.5 bg-grey-dark">
            <span className="h-8 w-8 bg-dark-medium" />
          </div>
          <div className="py-9 px-12 text-3xl">
            <p>
              Mi nombre es Matías Laime, soy programador y estudiante de
              Licenciatura en Informática en la Universidad de Quilmes. Tengo
              experiecia desarrollando aplicaciones front y back en proyectos
              academicos y personales. Me apasiona crear soluciones eficientes,
              escalables y bien estructuradas, siempre buscando aprender y
              mejorar.
            </p>
          </div>
        </div>
      </section>
      <PageInfo text="Bienvenido a mi sitio web" />
    </>
  );
}
