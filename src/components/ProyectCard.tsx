import Proyect from "@/types/proyect";
import Image from "next/image";

interface ProyectCardProps {
  proyect: Proyect;
}

const ProyectCard = ({ proyect }: ProyectCardProps) => {
  return (
    <div className="flex flex-col max-w-3xl w-full h-fit bg-dark-medium">
      <div className="bg-grey-dark flex justify-self-start py-2 px-2.5">
        <span className="bg-dark-medium h-8 w-8" />
      </div>
      <div className="w-full p-4 flex flex-col gap-3">
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
        <div className="flex gap-1.5 items-center">
          {proyect.tags.map((tag, index) => (
            <span
              key={index}
              className="text-center p-1.5 w-20 border border-grey-light rounded-full "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
