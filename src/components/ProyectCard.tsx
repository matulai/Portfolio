import type Proyect from "@/types/proyect";
import Github from "@/components/Github";
import Image from "next/image";
import Play from "@/components/Play";

interface ProyectCardProps {
  proyect: Proyect;
}

const ProyectCard = ({ proyect }: ProyectCardProps) => {
  return (
    <div className="flex flex-col gap-3 p-4 text-sm 2xl:text-lg leading-none">
      <div className="relative flex-1 aspect-video">
        <Image
          src={proyect.image}
          alt={proyect.title}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <p className="py-2 border-t border-b border-grey-light">
        {proyect.description}
      </p>
      <div className="flex items-center gap-1.5 ">
        <a
          href={proyect.githubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-start items-center gap-2 w-full p-1.5 cursor-pointer text-xl truncate bg-dark-light hover:bg-grey-dark hover:text-black md:text-2xl md:p-2 2xl:text-4xl 2xl:p-3"
        >
          <Github />
          <span>GitHub</span>
        </a>
        <a
          href={proyect.liveURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-start items-center gap-2 w-full p-1.5 cursor-pointer text-xl truncate bg-dark-light hover:bg-grey-dark hover:text-black md:text-2xl md:p-2 2xl:text-4xl 2xl:p-3"
        >
          <Play />
          <span>Try</span>
        </a>
      </div>
    </div>
  );
};

export default ProyectCard;
