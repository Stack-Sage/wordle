import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Guess from "./Guess";
import Checker from "./Checker";
import InstructionsModal from "./Checker";

function SetLogic() {
  const [wordSet, setWordSet] = useState(new Set());
  const [randomWord, setRandomWord] = useState("");
  const [solutionWords, setSolutionWords] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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

        const randomIndex = Math.floor(Math.random() * solutionList.length);
        const selectedWord = solutionList[randomIndex];
        setRandomWord(selectedWord);
      } catch (error) {
        console.error("Error fetching word lists:", error);
      }
    };

    fetchWords();
  }, []);

  return (
    <>
      <div className="absolute z-10">
        <div
          className={`flex flex-col  min-w-screen min-h-screen h-full items-center gap-10 font-bold transition-colors duration-300 ${
            darkMode
              ? "bg-gradient-to-bl from-black via-slate-950 to-black text-neutral-200 "
              : "bg-gradient-to-bl from-stone-300 via-neutral-300 to-stone-300 text-black"
          }`}
        >
          <div className="flex mt-20 md:mt-14 lg:mt-16 flex-col lg:flex-row gap-4 shadow-md w-full items-center justify-center h-fit p-4 rounded-lg">
          
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-2 px-4 py-1 bg-white text-black dark:bg-black dark:text-white border rounded hover:scale-105 transition-transform"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* Game Section */}
          <div className="flex flex-col">
            {randomWord && wordSet.size > 0 ? (
              <>
                <Guess
                  wordSet={wordSet}
                  randomWord={randomWord}
                  darkMode={darkMode}
                />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="hi">
            <InstructionsModal darkMode={darkMode} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SetLogic;
