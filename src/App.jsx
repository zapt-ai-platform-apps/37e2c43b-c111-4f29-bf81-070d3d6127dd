import React from 'react';
import GuessAnimalGame from './components/GuessAnimalGame';

export default function App() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-gray-100">
      <header className="text-center py-4">
        <h1 className="text-3xl font-bold mb-2">تخمين الحيوان من صوته</h1>
        <p className="text-gray-700">استمع إلى الصوت، وحاول معرفة الحيوان</p>
      </header>
      <main className="flex-grow w-full max-w-md px-4">
        <GuessAnimalGame />
      </main>
      <footer className="py-4">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          صنع بواسطة ZAPT
        </a>
      </footer>
    </div>
  );
}