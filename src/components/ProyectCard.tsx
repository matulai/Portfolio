import Proyect from "@/types/proyect";
import Image from "next/image";

interface ProyectCardProps {
  proyect: Proyect;
}

const ProyectCard = ({ proyect }: ProyectCardProps) => {
  return (
    <div className="flex flex-col gap-3 p-4">
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
      <p className="px-4 py-2 border-t border-b border-grey-light">
        {proyect.description}
      </p>
      <div className="flex items-center gap-1.5">
        {proyect.tags.map((tag, index) => (
          <span
            key={index}
            className="text-center p-1.5 w-28 border rounded-full border-grey-light"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProyectCard;
