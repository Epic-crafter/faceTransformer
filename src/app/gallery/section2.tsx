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
      {/* Grid Container */}
      <div className="grid grid-cols-12 gap-4 mx-auto max-w-6xl">
        {/* Map through the images */}
        {images.map((image, index) => (
          <div
            key={index}
            className="col-span-3 relative"
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
            />
          </div>
        ))}
      </div>
    </div>
  );
}
