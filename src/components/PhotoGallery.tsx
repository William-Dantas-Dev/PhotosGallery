import React from 'react';

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
