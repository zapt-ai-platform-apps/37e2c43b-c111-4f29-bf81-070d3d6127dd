import React from 'react';
import { useGuessAnimalGame } from '../hooks/useGuessAnimalGame';
import AnswerOptions from './AnswerOptions';
import AnimalInfo from './AnimalInfo';

export default function GuessAnimalGame() {
  const {
    currentAnimal,
    options,
    showInfo,
    selectedOption,
    feedback,
    score,
    handleOptionSelect,
    handleNext,
    handleLearnMore,
    setShowInfo,
  } = useGuessAnimalGame();

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {currentAnimal && !showInfo && (
        <>
          <audio src={currentAnimal.sound} autoPlay controls className="w-full mb-4">
            المتصفح الخاص بك لا يدعم عنصر الصوت.
          </audio>
          <button
            onClick={() => document.querySelector('audio').play()}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 cursor-pointer"
          >
            تشغيل الصوت مرة أخرى
          </button>
          <AnswerOptions
            options={options}
            selectedOption={selectedOption}
            onSelect={handleOptionSelect}
          />
          {feedback && (
            <div className="mt-4">
              <p>{feedback}</p>
              <button
                onClick={handleNext}
                className="bg-green-500 text-white px-4 py-2 rounded mt-2 mr-2 cursor-pointer"
              >
                التالي
              </button>
              <button
                onClick={handleLearnMore}
                className="bg-gray-500 text-white px-4 py-2 rounded mt-2 cursor-pointer"
              >
                تعرف على المزيد
              </button>
            </div>
          )}
        </>
      )}
      {showInfo && currentAnimal && (
        <AnimalInfo animal={currentAnimal} onBack={() => setShowInfo(false)} />
      )}
      <div className="mt-4">
        <p>النتيجة: {score}</p>
      </div>
    </div>
  );
}