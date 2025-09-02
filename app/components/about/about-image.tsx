import Image from "next/image";

function AboutImage() {
  return (
    <div className="aspect-square w-full md:max-w-[280px] md:min-w-[280px]">
      <Image
        src="/about-image.png"
        alt="Burgster"
        height={1024}
        width={1024}
        className="w-full"
      />
    </div>
  );
}

export { AboutImage };
