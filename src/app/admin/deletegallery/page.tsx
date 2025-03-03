'use client';

import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

const GalleryPage = () => {
  const [images, setImages] = useState<{ _id: string; imageUrl: string; title: string }[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/gallery');
      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();
      setImages(data);
    } catch (err) {
      setError('Failed to load gallery images');
    } finally {
      setLoading(false);
    }
  };

interface Image {
    _id: string;
    imageUrl: string;
    title: string;
}

const handleDelete = async (id: string): Promise<void> => {
    try {
        const response = await fetch(`/api/gallery?id=${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete image');
        
        // Remove the deleted image from state
        setImages(images.filter((img: Image) => img._id !== id));
    } catch (err) {
        setError('Failed to delete image');
    }
};

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 mt-[36px]">
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
      
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image._id} className="overflow-hidden">
            <CardContent className="p-0">
              <Image width={100} height={100}
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <h3 className="font-medium">{image.title}</h3>
              <button
                onClick={() => handleDelete(image._id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                aria-label="Delete image"
              >
                <Trash2 size={20} />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {images.length === 0 && !error && (
        <div className="text-center text-gray-500 mt-8">
          No images in the gallery
        </div>
      )}
    </div>
  );
};

export default GalleryPage;