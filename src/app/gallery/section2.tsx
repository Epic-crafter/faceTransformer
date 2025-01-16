"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageGrid() {
  interface Image {
    _id: string;
    imageUrl: string;
  }

  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/image");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-[rgb(222,208,197)] bg-opacity-100 p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-6xl">
        {images.map((image, index) => (
          <div
            key={image._id || index}
            className="aspect-square relative overflow-hidden rounded"
          >
            <Image
              src={image.imageUrl}
              alt={`Image ${index + 1}`}
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
