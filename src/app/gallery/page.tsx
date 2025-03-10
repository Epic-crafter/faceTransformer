"use client"
import Section1 from "./section1"
import Navbar from "../home-page/components/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";



export default function Page() {
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

  interface GalleryItem {
    id: string;
    name: string;
    image: string;
    description: string;
  }
  
  interface ApiGalleryItem {
    _id: string;
    title: string;
    imageUrl: string;
  }

  const [galleryItems, setGalleryItems] = React.useState<GalleryItem[]>([]);

  React.useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to fetch gallery items");
        }
        const data: ApiGalleryItem[] = await response.json();
        
        const mappedItems: GalleryItem[] = data.map((item) => ({
          id: item._id,
          name: item.title,
          image: item.imageUrl,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        }));

        setGalleryItems(mappedItems);
      } catch (error) {
        console.error("Error fetching gallery items:", error);
        setGalleryItems([
          {
            id: "1",
            name: "Default Item",
            image: "/placeholder.svg?height=500&width=500&text=Default",
            description: "Default description for placeholder item.",
          },
        ]);
      } 
    }

    fetchGalleryItems();
  }, []);


  if (loading) {
    return  <div className="min-h-screen bg-[rgb(222,208,197)] flex items-center justify-center"><Image width={100} className="rounded-full h-16 w-16 animate-ping object-cover" height={100} alt="FT" src={"/logo.webp"}></Image></div>
    }
  

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
              <Navbar />
              

    <Section1 galleryItems={galleryItems}/>
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
    
    </div>
  );
}
