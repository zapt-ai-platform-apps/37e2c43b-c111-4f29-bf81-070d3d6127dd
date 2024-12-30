import React from 'react';

export default function AnimalInfo({ animal, onBack }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">{animal.name}</h2>
      <img
        src={animal.image}
        alt={animal.name}
        data-image-request={animal.dataImageRequest}
        className="mx-auto mb-4"
      />
      <p className="mb-4">{animal.info}</p>
      <button
        onClick={onBack}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        العودة إلى اللعبة
      </button>
    </div>
  );
}