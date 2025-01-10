"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function GalleryCarousel() {
  interface GalleryItem {
    id: string;
    name: string;
    image: string;
    description: string;
  }

  const [galleryItems, setGalleryItems] = React.useState<GalleryItem[]>([]);

  React.useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to fetch gallery items");
        }
        const data = await response.json();
        interface ApiGalleryItem {
          _id: string;
          title: string;
          imageUrl: string;
        }

        const mappedItems: GalleryItem[] = data.map((item: ApiGalleryItem) => ({
          id: item._id, // Assuming the API returns MongoDB `_id` as the identifier
          name: item.title, // Replace `title` with the actual field name for the title
          image: item.imageUrl, // Replace `imageUrl` with the actual field name for the image URL
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // Placeholder or description if available
        }));

        setGalleryItems(mappedItems);
      } catch (error) {
        console.error("Error fetching gallery items:", error);
      }
    }

    fetchGalleryItems();
  }, []);

  return (
    <div className="bg-[rgb(222,208,197)] pt-[7rem] px-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="mb-8 sm:mb-12 w-full max-w-md mx-auto text-center text-white text-[clamp(2rem,5vw,4rem)] font-[651] uppercase leading-[1.2] tracking-[0%] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] font-bigerside ml-[-39px] sm:ml-[-38px]">
          Gallery
        </h1>
        <p className="text-[#766B63] text-left max-w-3xl mb-16 text-lg">
          Behold a visual symphony of beauty, captured frame by frame. Our
          gallery shows art in transformation, radiance, and personality. Every
          image is linked to the story of nurture, style, and the way toward
          embracing true beauty. Chic, astound, get inspired, and undertake
          your beauty journey.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 md:pl-6 md:basis-1/2 lg:basis-2/5"
              >
                <Card className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#C0B3A9] to-[#9D8E84] p-4">
                  <CardContent className="p-0 space-y-4">
                    <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                        BEFORE
                      </div>
                      <div className="absolute bottom-4 right-4 text-white text-xl font-bold">
                        AFTER
                      </div>
                    </div>
                    <div className="text-white space-y-2 px-2 pt-4">
                      <h3 className="text-3xl font-bold">{item.name}</h3>
                      <p className="text-sm opacity-90 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious className="relative bg-[#8C7E75] hover:bg-[#766B63] border-none text-white" />
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#8C7E75]"
                />
              ))}
            </div>
            <CarouselNext className="relative bg-[#8C7E75] hover:bg-[#766B63] border-none text-white" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
