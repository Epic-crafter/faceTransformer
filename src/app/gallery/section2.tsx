import Image from "next/image";

export default function ImageGrid() {
  const images = [
    { src: "/image copy 2.png", height: "350px", marginTop: "0px" },
    { src: "/image copy 2.png", height: "200px", marginTop: "0px" },
    { src: "/image copy 2.png", height: "350px", marginTop: "0px" },
    { src: "/image copy 2.png", height: "200px", marginTop: "0px" },
    { src: "/image copy 2.png", height: "200px", marginTop: "9px" },
    { src: "/image copy 2.png", height: "350px", marginTop: "-141px" },
    { src: "/image copy 2.png", height: "200px", marginTop: "9px" },
    { src: "/image copy 2.png", height: "350px", marginTop: "-140px" },
    { src: "/image copy 2.png", height: "350px", marginTop: "0px" },
    { src: "/image copy 2.png", height: "200px", marginTop: "0px" },
    { src: "/image copy 2.png", height: "350px", marginTop: "0px" },
    { src: "/image copy 2.png", height: "200px", marginTop: "0px" },
    { src: "/image copy 2.png", height: "200px", marginTop: "9px" },
    { src: "/image copy 2.png", height: "350px", marginTop: "-141px" },
    { src: "/image copy 2.png", height: "200px", marginTop: "9px" },
    { src: "/image copy 2.png", height: "350px", marginTop: "-140px" }
  ];

  return (
    <div className="bg-[rgb(222,208,197)] bg-opacity-100 p-8 pb-2">
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 mx-auto max-w-6xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="col-span-1 md:col-span-2 lg:col-span-3 relative"
            style={{
              height: image.height,
              marginTop: image.marginTop,
            }}
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}