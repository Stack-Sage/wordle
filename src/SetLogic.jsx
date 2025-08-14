// SetLogic.jsx
import { useState, useEffect } from "react";
import React from "react";
import Guess from "./Guess";
import InstructionsModal from "./Checker";

function SetLogic() {
  const [wordSet, setWordSet] = useState(new Set());
  const [solutionWords, setSolutionWords] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const [gameKey, setGameKey] = useState(0); // key to force remount of Guess
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Fetch word lists
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const allowedText = await (await fetch("/guesses.txt")).text();
        const allowedSet = new Set(
          allowedText.split("\n").map((w) => w.trim().toLowerCase())
        );
        setWordSet(allowedSet);

        const solutionText = await (await fetch("/wordle.txt")).text();
        const solutionList = solutionText
          .split("\n")
          .map((w) => w.trim().toLowerCase())
          .filter(Boolean);
        setSolutionWords(solutionList);

        // pick initial random word
        const randomIndex = Math.floor(Math.random() * solutionList.length);
        setRandomWord(solutionList[randomIndex]);
      } catch (error) {
        console.error("Error fetching word lists:", error);
      }
    };

    fetchWords();
  }, []);

  // Restart Game: pick new word + reset Guess
  function handleRestart() {
    if (solutionWords.length === 0) return;
    const randomIndex = Math.floor(Math.random() * solutionWords.length);
    setRandomWord(solutionWords[randomIndex]);
    setGameKey((prev) => prev + 1); // force remount of Guess
  }

  return (
    <div
      className={`absolute z-10 flex flex-col min-w-screen min-h-full items-center px-4 gap-10 font-bold transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-bl from-black via-slate-950 to-black text-neutral-200"
          : "bg-gradient-to-bl from-stone-300 via-neutral-300 to-stone-300 text-black"
      }`}
    >
      {/* Dark Mode Toggle */}
      <div className="flex mt-20 md:mt-14 lg:mt-16 flex-col lg:flex-row gap-4 shadow-md w-full items-center justify-center h-fit p-4 rounded-lg">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-2 px-4 py-1 bg-white text-black dark:bg-black dark:text-white border rounded hover:scale-105 transition-transform"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* Restart Button */}
        <button
          onClick={handleRestart}
          className="mt-2 px-4 py-1 bg-black text-white border rounded hover:scale-105 transition-transform"
        >
          🔄 Restart Game
        </button>
      </div>

      {/* Game Section */}
      <div className="flex flex-col">
        {randomWord && wordSet.size > 0 ? (
          <Guess
            key={gameKey} // forces remount when restarting
            wordSet={wordSet}
            randomWord={randomWord}
            darkMode={darkMode}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Instructions Modal */}
      <div className="hi">
        <InstructionsModal darkMode={darkMode} />
      </div>
    </div>
  );
}

export default SetLogic;
