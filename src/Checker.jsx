import { useState } from "react";
import React from "react";

export default function InstructionsModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Instructions Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-black hover:invert text-white px-4 py-2 rounded-lg shadow-md transition"
      >
        Instructions
      </button>

 
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-11/12 md:w-1/2 p-6 max-h-[80vh] overflow-y-auto relative">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>

            {/* Modal Title */}
            <h2 className="text-xl font-bold mb-4">How to Play</h2>

            {/* Instructions */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Guess the word in six tries.  
              Each guess must be a valid five-letter word.  
              After each guess, the color of the tiles will change to show how close your guess was to the word.
            </p>

            <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300">
              <li>Green means correct letter in the correct spot.</li>
              <li>Yellow means correct letter in the wrong spot.</li>
              <li>Gray means the letter is not in the word.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
