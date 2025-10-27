import React from 'react';
import clsx from 'clsx';
import { languages } from './language'; 
import { getFarewellText, getRandomWord } from './utilis'; 
import Confetti from 'react-confetti';

export default function AssemblyEndgame(){
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  

  const numGuessesLeft = languages.length - 1
  const  wrongGuessCount =
    guessedLetters.filter(letter => !currentWord.includes(letter)).length;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter) 

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetter(letter){
    setGuessedLetters(prevLetters =>{
      const lettersSet = new Set(prevLetters)
      lettersSet.add(letter)
      return Array.from(lettersSet)
    })
  }

  function startNewGame(){
    setGuessedLetters([])
    setCurrentWord(getRandomWord())
  }

    const languageElements = languages.map((lang,index) => {
    const isLanguageLost = index < wrongGuessCount;
    const styles ={
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    const className = clsx("chip", isLanguageLost && "lost")
    return(
       <span
       className={className}
       style={styles}
      key={lang.name}
    >
      {lang.name}
      </span>
    )
   })

   const letterElements = currentWord.split("").map((letter , index)=> {
    const shouldRevealLetter = isGameOver || guessedLetters.includes(letter)
   const letterClassName = clsx(
    isGameLost && !guessedLetters.includes(letter) && "missed-letter"
   )
    return(
    <span key={index} className={letterClassName}>
      {shouldRevealLetter ? letter.toUpperCase() : ""}
    </span>
    )
})

    const keyboardElements = alphabet.split("").map((letter) =>{
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    const className = clsx({
      correct: isCorrect, 
      wrong: isWrong,
    })
    return (
    <button
    className={className}
     key={letter}
     disabled={isGameOver}
     aria-disabled={guessedLetters.includes(letter)}
     aria-label={`Letter ${letter}`}
     onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
        </button>
   )
  })  

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  })  

  function renderGameStatus(){
    if(!isGameOver && isLastGuessIncorrect){
      return (
      <p className='farewell-message'>
        {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      )
    }
    if(isGameWon){
      return (
        <>
        <h2>You win!</h2>
        <p>well Done!🎉</p>
        </> )
      }
      if(isGameLost){
        return (
          <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly😭</p>
          </>
        )
      }
      return null
  }

  return (
    <main>
      {
      isGameWon && 
      <Confetti 
      recycle={false}
      numberOfPieces={1000}
      width={windowSize.width}
      height={windowSize.height}
      />
      }

      {isGameLost && 
        <Confetti
          recycle={false}
          numberOfPieces={500}
          colors={['#555', '#222', '#000']}
          gravity={0.3}
          initialVelocityX={{ min: -10, max: 10 }}
          initialVelocityY={{ min: -10, max: 10 }}
          width={windowSize.width}  
          height={windowSize.height}
        />
      }
    
     <header> 
      <h1>Assembly: Endgame</h1>
      <p>Guess the word within 8 attempts to keep the programming 
        world safe from Assembly! </p>
     </header>
      
     <section 
     aria-live='polite' 
     role='status' 
     className={gameStatusClass}
     >
        {renderGameStatus()}
     </section>

      <section className={clsx('language-chips', isGameLost && 'lose-animation')}>
         {languageElements}
      </section>

      <section className='word'>
        {letterElements}
      </section>

      {/* Combined visually-hidden aria-live region for status updates.*/}
      <section 
      className='sr-only' 
      aria-live='polite' 
      role='status'
      >
        <p>
          {currentWord.includes(lastGuessedLetter) ?
          `Correct! The letter ${lastGuessedLetter} is in the word.` :
          `Sorry, the letter ${lastGuessedLetter} is not in the word.`
          }
          You have {numGuessesLeft} attempts left.
        </p>
        <p>Current word : {currentWord.split("").map(letter =>
          guessedLetters.includes(letter) ? letter + ".": "blank.")
          .join(" ")}</p>
      </section>

      <section className='keyboard'>
        {keyboardElements}
      </section>

      {isGameOver && <button className='new-game' onClick={startNewGame}>New Game</button>} 
      </main>
  )
}
