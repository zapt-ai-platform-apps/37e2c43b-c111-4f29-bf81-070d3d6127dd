import React from 'react';

export default function AnswerOptions({ options, selectedOption, onSelect }) {
  return (
    <div className="grid grid-cols-1 gap-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className={`px-4 py-2 rounded border cursor-pointer ${
            selectedOption === option.name ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
          disabled={!!selectedOption}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}