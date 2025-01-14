import Image from "next/image";

export default function ImageGrid() {
  const images = [
    { src: "/image copy 2.png", alt: "Image 1" },
    { src: "/image copy 2.png", alt: "Image 2" },
    { src: "/image copy 2.png", alt: "Image 3" },
    { src: "/image copy 2.png", alt: "Image 4" },
    { src: "/image copy 2.png", alt: "Image 5" },
    { src: "/image copy 2.png", alt: "Image 6" },
    { src: "/image copy 2.png", alt: "Image 7" },
    { src: "/image copy 2.png", alt: "Image 8" },
    { src: "/image copy 2.png", alt: "Image 9" },
    { src: "/image copy 2.png", alt: "Image 10" },
    { src: "/image copy 2.png", alt: "Image 11" },
    { src: "/image copy 2.png", alt: "Image 12" },
    { src: "/image copy 2.png", alt: "Image 13" },
    { src: "/image copy 2.png", alt: "Image 14" },
    { src: "/image copy 2.png", alt: "Image 15" },
    { src: "/image copy 2.png", alt: "Image 16" },
  ];

  return (
    <div className="bg-[rgb(222,208,197)] bg-opacity-100 p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-6xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

