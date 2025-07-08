'use client';

import { useState } from 'react';
import { CarImage } from '@/types';

interface CarGalleryProps {
  images: CarImage[];
  title: string;
}

export default function CarGallery({ images, title }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-vintage-dark rounded-lg flex items-center justify-center">
        <span className="text-vintage-gold text-lg">No images available</span>
      </div>
    );
  }

  const currentImage = images[selectedImage];
  
  if (!currentImage) {
    return (
      <div className="w-full h-96 bg-vintage-dark rounded-lg flex items-center justify-center">
        <span className="text-vintage-gold text-lg">Image not available</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={`${currentImage.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
          alt={`${title} - Image ${selectedImage + 1}`}
          className="w-full h-96 object-cover"
          width={600}
          height={400}
        />
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? 'border-vintage-gold'
                  : 'border-vintage-dark hover:border-vintage-gold'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width={80}
                height={80}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}