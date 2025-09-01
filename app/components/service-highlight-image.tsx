import Image from "next/image";

function ServiceHighlightImage() {
  return (
    <div className="aspect-square w-full md:max-w-[156px] md:min-w-[156px]">
      <Image
        src="/service-highlight-image.png"
        alt="Service Highlight Image"
        height={1024}
        width={1024}
        className="w-full"
      />
    </div>
  );
}

export { ServiceHighlightImage };
