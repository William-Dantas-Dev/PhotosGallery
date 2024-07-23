"use client";
import type { NextPage } from 'next';
import PhotoGallery from '@/components/PhotoGallery';

const Home: NextPage = () => {
  const photos = Array.from({ length: 29 }, (_, i) => `/images/${i + 1}.jpg`);

  return (
    <div className="min-h-screen bg-gray-800">
      <main className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold mb-8">Photos Gallery</h1>
        <PhotoGallery photos={photos} />
      </main>
    </div>
  );
};

export default Home;
