import React, { useState } from "react";

const Guess = ({ wordSet, randomWord }) => {
  const matchSet = new Set(wordSet);

  const [tries, setTries] = useState(6);
  const [guess, setGuess] = useState("");
  const [message,setMessage] = useState('You can Guess it, Lezgoo!')
  const [resultValid, setResultValid] = useState("");
  const [guessResult, setGuessResult] = useState("");
  const [lengthError, setLengthError] = useState("");
  const [commonWord, setCommonWord] = useState(new Set());

  function lengthCheck() {
    setLengthError("It should be a 5 Letter Word");
  }

  function checkGuess() {
    const funcGuess = guess.toLowerCase().trim();

    setResultValid("");
    setGuessResult("");
    setLengthError("");

    if (matchSet.has(funcGuess)) {
      setResultValid("Word is Valid!");
      
      setTries(prev => prev -1)

      if(tries === 1){
         setTries("0")
         setMessage("You Failed LOL! Haha... I knew You Couldn't have guessed it Stupid Stupid Stupid!   ")
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
      setResultValid("Word is Invalid!");
    }

    if (randomWord === funcGuess) {
      setGuessResult(`${guess.toUpperCase()} is the Correct Guess`);
      setMessage("YOOOOOO! You Guessed it! Bruhhh! :)")
    } else {
      setGuessResult(`${guess.toUpperCase()} is Incorrect Guess`);
    }
  }

  return (
    <div>

      <div className="flex flex-col flex-wrap  text-xl gap-10 lg:gap-12 lg:mt-20 md:mt-20 mt-10 px-10 justify-center text-center items-center">

      <h1 className="text-center">
         A <b>FIVE</b> Letter Valid Word has been Generated!  <h2><i>Can You Guess it...</i> </h2>
         </h1>   
      <input
      placeholder="guess here "
        className=" placeholder-neutral-500 border-none outline-1 outline-neutral-400 ring-2  text-center text-2xl font-bold   ring-neutral-900 uppercase   font-stretch-extra-expanded  py-1 w-fit "
        maxLength={5}
        onChange={(e) => setGuess(e.target.value)}
        onKeyDown={(e) => {

          if (e.key === "Enter"&& tries > 0) {
            if (guess.length !== 5 ) {
              lengthCheck();
            } else {
              checkGuess();
            }
          }
        }}
        type="text"
      />
         <h1>Chances to Guess are {tries}  </h1>
        <h1>Guess a <strong>  Valid Word </strong>  To See if you can match    <h2 className="text-2xl font-bold "> {resultValid} </h2></h1>
        <h1 className="">
          Common Letters In Generated Word = [ <i>
            
            {Array.from(commonWord).join(" , ").toUpperCase()} 
            </i> ]
        </h1>
        <h1 className="text-2xl font-semibold">

          {guessResult} 
        </h1>
        <h1>{lengthError}</h1>

        <h1 className="flex-wrap italic text-xl font-medium ring-1 p-2 ring-neutral-500 rounded-t-lg animate-pulse ease-in-out duration-1000 ">
         {message}
        </h1>
      </div>
    </div>
  );
};

export default Guess;
