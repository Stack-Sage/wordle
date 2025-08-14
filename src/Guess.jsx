// Guess.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

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

  const [isWin, setIsWin] = useState(false);
  const [isLoss, setIsLoss] = useState(false);
  const [sadEmojis, setSadEmojis] = useState([]);

  // Reset win/loss overlay after 4 seconds
  useEffect(() => {
    if (isWin || isLoss) {
      const timer = setTimeout(() => {
        setIsWin(false);
        setIsLoss(false);
        setSadEmojis([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isWin, isLoss]);

  // Confetti for win
  function triggerConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
      });
      if (Date.now() > end) clearInterval(interval);
    }, 200);
  }

  // Sad emoji rain for loss
  function triggerSadEffect() {
    const duration = 3000; // 3s
    const end = Date.now() + duration;
    const interval = setInterval(() => {
      setSadEmojis((prev) => [
        ...prev,
        { id: Date.now(), emoji: "😢", x: Math.random() * 100 },
      ]);
      if (Date.now() > end) clearInterval(interval);
    }, 200);
  }

  function lengthCheck() {
    setLengthError("⚠️ It should be a 5-letter word.");
  }

  function checkGuess() {
    const funcGuess = guess.toLowerCase().trim();
    setResultValid("");
    setGuessResult("");
    setLengthError("");

    if (!matchSet.has(funcGuess)) {
      setResultValid(`${funcGuess.toUpperCase()} is an Invalid Word! ❌`);
      return;
    }

    setResultValid(`${funcGuess.toUpperCase()} is a Valid Word!`);
    setTries((prev) => prev - 1);
    setWordPass(true);

    const arrGuess = funcGuess.split("");
    const randomChars = randomWord.split("");
    const updatedCommon = new Set(commonWord);

    for (let letter of arrGuess) {
      if (randomChars.includes(letter)) updatedCommon.add(letter);
    }
    setCommonWord(updatedCommon);

    if (funcGuess === randomWord) {
      setGuessResult(`${guess.toUpperCase()} is correct!`);
      setMessage("🎉 You nailed it!");
      setIsWin(true);
      triggerConfetti();
    } else {
      setGuessResult(`${guess.toUpperCase()} is not the Right Guess`);
    }

    // Handle loss
    if (tries === 1 && funcGuess !== randomWord) {
      setTries(0);
      setMessage(
        `🔚 You’ve used all your guesses.\nThe word was: ${randomWord.toUpperCase()}\nTry again soon.`
      );
      setIsLoss(true);
      triggerSadEffect();
    }
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
      className={`relative w-full max-w-2xl min-h-[60vh] h-full p-6 mx-auto rounded-xl shadow-xl transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-black to-gray-900 border border-white/10"
          : "bg-gradient-to-br from-stone-300 via-neutral-300 to-stone-300 border border-black/5"
      }`}
    >
      {/* Win/Loss Overlay */}
      <AnimatePresence>
        {isWin && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-cyan-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 5 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            🎆 Congrats! 🎆
          </motion.div>
        )}
        {isLoss && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-red-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            😢 You Lost! Try Again.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sad Emoji Shower */}
      {sadEmojis.map((s) => (
        <motion.div
          key={s.id}
          className="absolute text-2xl"
          style={{ left: `${s.x}%`, top: "-10%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 2.5, ease: "linear" }}
        >
          {s.emoji}
        </motion.div>
      ))}

      {/* Game Section */}
      <div className="space-y-6 text-center">
        <h1
          className={`text-3xl font-extrabold uppercase tracking-wider ${
            darkMode ? "text-yellow-500" : "text-teal-900"
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
                      ? "text-green-500"
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
                tries <= 2 ? "text-red-400" : "text-green-500"
              }`}
            >
              {tries}
            </p>
          </div>

          <div>
            <p className={`${baseText}`}>Common Letters:</p>
            <p className="tracking-widest text-green-600 text-xl">
              {Array.from(commonWord).join(", ").toUpperCase()}
            </p>
          </div>
        </div>

        <p
          className={`italic font-medium text-lg ${
            resultValid.includes("Valid") ? "text-green-600" : "text-red-500"
          }`}
        >
          {resultValid}
        </p>

        <p
          className={`font-bold text-xl ${
            guessResult.includes("correct") ? "text-green-500" : "text-red-500"
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
      </div>
    </div>
  );
};

export default Guess;
