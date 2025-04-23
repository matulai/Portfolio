import AnimatedTitle from "@/components/AnimatedTitle";
import ProyectsInfo from "@/components/ProyectsInfo";

export default function Proyects() {
  return (
    <main className="flex flex-col flex-1 justify-self-start h-full py-14 px-32 gap-14">
      <AnimatedTitle text="PROYECTOS" />
      <ProyectsInfo />
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
