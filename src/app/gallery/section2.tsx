import Image from "next/image";

export default function ImageGrid() {
  const images = [
    { src: "/image copy 2.png", alt: "Image 1" },
    { src: "/image copy 2.png", alt: "Image 2" },
    { src: "/image3.jpg", alt: "Image 3" },
    { src: "/image4.jpg", alt: "Image 4" },
    { src: "/image5.jpg", alt: "Image 5" },
    { src: "/image6.jpg", alt: "Image 6" },
    { src: "/image7.jpg", alt: "Image 7" },
    { src: "/image8.jpg", alt: "Image 8" },
    { src: "/image9.jpg", alt: "Image 9" },
    { src: "/image10.jpg", alt: "Image 10" },
    { src: "/image11.jpg", alt: "Image 11" },
    { src: "/image12.jpg", alt: "Image 12" },
    { src: "/image13.jpg", alt: "Image 13" },
    { src: "/image14.jpg", alt: "Image 14" },
    { src: "/image15.jpg", alt: "Image 15" },
    { src: "/image16.jpg", alt: "Image 16" },
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

