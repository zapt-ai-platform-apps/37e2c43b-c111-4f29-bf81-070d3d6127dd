import { useState, useEffect } from 'react';
import { animals } from '../data/animals';

export const useGuessAnimalGame = () => {
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [options, setOptions] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const animal = animals[randomIndex];
    setCurrentAnimal(animal);

    // Generate options
    const shuffledAnimals = [...animals].sort(() => 0.5 - Math.random());
    const newOptions = shuffledAnimals.slice(0, 3);
    if (!newOptions.includes(animal)) {
      newOptions[0] = animal;
    }
    setOptions(newOptions.sort(() => 0.5 - Math.random()));
    setSelectedOption('');
    setFeedback('');
    setShowInfo(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.name);
    if (option.name === currentAnimal.name) {
      setFeedback('إجابة صحيحة!');
      setScore((prevScore) => prevScore + 1);
    } else {
      setFeedback(`إجابة خاطئة. الحيوان الصحيح هو: ${currentAnimal.name}`);
    }
  };

  const handleNext = () => {
    generateQuestion();
  };

  const handleLearnMore = () => {
    setShowInfo(true);
  };

  return {
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
  };
};