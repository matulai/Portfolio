import type { StaticImageData } from "next/image";

interface Proyect {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
}

export default Proyect;
