import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hola Mundo!</h1>
      <h1 className={`${titleFont.className} font-bold`}>Nuevo mundos!!</h1>
    </>
  );
}
