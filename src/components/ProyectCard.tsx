import type Proyect from "@/types/proyect";
import Image from "next/image";

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
      <div className="flex items-center gap-1.5">
        {proyect.tags.map((tag, index) => (
          <span
            key={index}
            className="text-center p-1.5 w-24 border rounded-full border-grey-light 2xl:w-28"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProyectCard;
