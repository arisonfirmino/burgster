import Image from "next/image";

function ServiceIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="size-10">
      <Image src={src} alt={alt} height={350} width={350} className="w-full" />
    </div>
  );
}

export { ServiceIcon };
