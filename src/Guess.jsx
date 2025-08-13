import React, { useEffect, useState } from "react";

const Guess = ({ wordSet, randomWord, darkMode }) => {
  const matchSet = new Set(wordSet);

  const initialMessage = "🔥 Start Guessing!";
  const [tries, setTries] = useState(6);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [resultValid, setResultValid] = useState("");
  const [guessResult, setGuessResult] = useState("");
  const [lengthError, setLengthError] = useState("");
  const [commonWord, setCommonWord] = useState(new Set());
  const [showGuess, setShowGuess] = useState([]);
  const baseText = darkMode ? "text-neutral-100" : "text-gray-800";
  const [wordPass, setWordPass] = useState(false);

  function lengthCheck() {
    setLengthError("⚠️ It should be a 5-letter word.");
  }

  function checkGuess() {
    const funcGuess = guess.toLowerCase().trim();

    setResultValid("");
    setGuessResult("");
    setLengthError("");

    if (matchSet.has(funcGuess)) {
      setResultValid(`${funcGuess.toUpperCase()} is a Valid Word!`);
      setTries((prev) => prev - 1);
      setWordPass(true);

      if (tries === 1) {
        setTries(0);
        setMessage(`🔚 You’ve used all your guesses.\nThe word was: ${randomWord.toUpperCase()}\nTry again soon.`);
      }

      const arrGuess = funcGuess.split("");
      const randomChars = randomWord.split("");
      const updatedCommon = new Set(commonWord);

      for (let letter of arrGuess) {
        if (randomChars.includes(letter)) {
          updatedCommon.add(letter);
        }
      }

      setCommonWord(updatedCommon);
    } else {
      setResultValid(`${funcGuess} -> is an Invalid Word! ❌`);
    }

    if (randomWord === funcGuess) {
      setGuessResult(`${guess.toUpperCase()} is correct Guess!`);
      setMessage("🎉 You nailed it!");
    } else {
      setGuessResult(`${guess.toUpperCase()} is not the Right Guess`);
    }
  }

  // Restart Game Function
  function handleRestart() {
    setTries(6);
    setGuess("");
    setMessage(initialMessage);
    setResultValid("");
    setGuessResult("");
    setLengthError("");
    setCommonWord(new Set());
    setShowGuess([]);
    setWordPass(false);
  }

  useEffect(() => {
    if (wordPass) {
      const tempGuess = guess.toUpperCase().split("");
      setShowGuess((prev) => [...prev, tempGuess]);
      setWordPass(false);
    }
  }, [wordPass, guess]);

  return (
    <div
      className={`w-full max-w-2xl h-full p-6 mx-auto rounded-xl shadow-xl transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br border border-white/10"
          : "bg-gradient-to-br from-stone-400 via-neutral-300 to-stone-500  border border-black/10"
      }`}
    >
      <div className="space-y-6 text-center">
        <h1
          className={`text-3xl font-extrabold uppercase tracking-wider ${
            darkMode ? "text-yellow-400" : "text-teal-900"
          }`}
        >
          Can You Guess the Word?
        </h1>

        <input
          type="text"
          maxLength={5}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && tries > 0) {
              guess.length !== 5 ? lengthCheck() : checkGuess();
            }
          }}
          placeholder="Type your guess"
          className={`w-full text-center uppercase tracking-widest text-xl py-3 px-5 rounded-lg font-bold outline-none ring-2 transition-all duration-300 ${
            darkMode
              ? "bg-neutral-900 text-white ring-yellow-400 placeholder:text-gray-400"
              : "bg-gradient-to-br text-black ring-indigo-500 placeholder:text-gray-500"
          }`}
        />

        {/* Previous Guesses */}
        <div className="flex flex-col items-center w-full justify-center gap-2">
          {showGuess.map((letters, index) => (
            <div
              key={index}
              className="flex flex-row gap-10 text-xl items-center w-fit px-3 py-1 rounded-lg bg-black/10 dark:bg-stone-700"
            >
              {letters.map((char, i) => (
                <div
                  key={i}
                  className={`font-bold text-center tracking-wide ${
                    commonWord.has(char.toLowerCase())
                      ? "text-green-400"
                      : "text-yellow-500"
                  }`}
                >
                  {char}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Game Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <div>
            <p className={`${baseText}`}>Chances Left: </p>
            <p
              className={`text-2xl font-mono ${
                tries <= 2 ? "text-red-400" : "text-green-400"
              }`}
            >
              {tries}
            </p>
          </div>

          <div>
            <p className={`${baseText}`}>Common Letters:</p>
            <p className="tracking-widest text-yellow-300 text-xl">
              {Array.from(commonWord).join(", ").toUpperCase()}
            </p>
          </div>
        </div>

        <p
          className={`italic font-medium text-lg ${
            resultValid.includes("Valid") ? "text-green-400" : "text-red-400"
          }`}
        >
          {resultValid}
        </p>

        <p
          className={`font-bold text-xl ${
            guessResult.includes("correct") ? "text-green-400" : "text-red-400"
          }`}
        >
          {guessResult}
        </p>

        <p className="text-orange-400 font-semibold">{lengthError}</p>

        <div
          className={`p-4 rounded-md shadow-inner font-medium animate-pulse text-lg transition ${
            darkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"
          }`}
        >
          {message}
        </div>

      
        <button
          onClick={handleRestart}
          className="mt-4 bg-black hover:invert text-white px-5 py-2 rounded-lg font-bold shadow-md transition"
        >
          🔄 Restart Game
        </button>
      </div>
    </div>
  );
};

export default Guess;
