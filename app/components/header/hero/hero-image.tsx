import Image from "next/image";

function HeroImage() {
  return (
    <div className="hidden aspect-square max-w-md min-w-md lg:flex">
      <Image
        src="/hero-image.png"
        alt="Hero Image"
        height={1024}
        width={1024}
        className="w-full"
      />
    </div>
  );
}

export { HeroImage };
