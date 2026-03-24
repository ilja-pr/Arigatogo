import React from 'react';

const AttractionCard = ({ title, image, description }) => {
  return (
    <div className="lg:w-1/2 flex flex-col">
      <div className="w-full h-64 overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  );
};

export default AttractionCard;
