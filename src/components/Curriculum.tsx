"use client";
import Download from "@/components/Download";
import Image from "next/image";

const Curriculum = () => {
  return (
    <div className="flex flex-col gap-3 px-6 py-4">
      <div className="relative flex-1 aspect-video">
        <Image
          src="/images/curriculum.webp"
          alt="Curriculum"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <a
        href="/files/CV_MatiasLaime.pdf"
        download
        className="flex items-center justify-start gap-2 px-4 py-2 text-2xl cursor-pointer bg-dark-light hover:bg-grey-dark hover:text-black 2xl:py-3"
      >
        <Download />
        Descargar
      </a>
    </div>
  );
};

export default Curriculum;
