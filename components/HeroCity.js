'use client';

import Image from 'next/image';

const FullscreenImage = ({ image, alt = 'Vollbildbild' }) => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
};

export default FullscreenImage;
