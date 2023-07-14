// // import React, { useState, useEffect } from 'react';
// // import './GamePage.css'

// // const GamePage = () => {
// //   const words = ['mango', 'price', 'pineapple', 'pen', 'comfortable', 'excellent' ]; // Array of words
// //   const [word, setword] = useState('');
// //   const [guess, setGuess] = useState('');
// //   const [guessed, setGuessed] = useState([]);
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {  `
// //     // Select a random word from the array
// //     const randomIndex = Math.floor(Math.random() * words.length);
// //     const randomWord = words[randomIndex];

// //     // Initialize the puzzle and revealed state
// //     setword(randomWord);
// //     setGuessed(new Array(randomWord.length).fill('_'));
// //   }, []);

// //   const handleGuess = (e) => {
// //     e.preventDefault();
// //     const letter = guess.trim().toLowerCase();

// //     if (letter.length !== 1) {
// //       setMessage('Please enter a single letter.');
// //     } else {
// //       const wordLowerCase = word.toLowerCase();
// //       const updatedGuessed = [...guessed];

// //       for (let i = 0; i < word.length; i++) {
// //         if (wordLowerCase[i] === letter) {
// //           updatedGuessed[i] = word[i];
// //         }
// //       }

// //       setGuessed(updatedGuessed);
// //       setGuess('');
// //       setMessage('');
// //     }
// //   };

// //   return (
// //     <div className='big'>
// //       <h1>Guess Game</h1>
// //       <p>Guess the word:</p>
// //       <p>{guessed.join(' ')}</p>
// //       <form onSubmit={handleGuess}>
// //         <label htmlFor="guess">Enter a letter: </label>
// //         <input
// //           type="text"
// //           id="guess"
// //           value={guess}
// //           onChange={(e) => setGuess(e.target.value)}
// //           maxLength={1}
// //         />
// //         <button type="submit">Go</button>
// //       </form>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // };

// // export default GamePage;





// import React, { useState, useEffect } from 'react';
// import './GamePage.css';

// const GamePage = () => {
//   const words = ['mango', 'price', 'pineapple', 'pen', 'comfortable', 'excellent']; // Array of words
//   const maxGuesses = 20; // Maximum number of guesses allowed
//   const [word, setWord] = useState('');
//   const [guess, setGuess] = useState('');
//   const [guessed, setGuessed] = useState([]);
//   const [message, setMessage] = useState('');
//   const [guessCount, setGuessCount] = useState(0);
//   const [displayMessage, setDisplayMessage] = useState(false);

//   useEffect(() => {
//     // Select a random word from the array
//     const randomIndex = Math.floor(Math.random() * words.length);
//     const randomWord = words[randomIndex];

//     // Initialize the word and guessed state
//     setWord(randomWord);
//     setGuessed(new Array(randomWord.length).fill('_'));
//     setGuessCount(0);
//   }, []);

//   useEffect(() => {
//     const letter = guess.trim().toLowerCase();

//     if (letter.length === 1) {
//       setMessage('');
//       const wordLowerCase = word.toLowerCase();
//       const updatedGuessed = [...guessed];

//       for (let i = 0; i < word.length; i++) {
//         if (wordLowerCase[i] === letter) {
//           updatedGuessed[i] = word[i];
//         }
//       }

//       setGuessed(updatedGuessed);
//       setGuess('');
//       setGuessCount(guessCount + 1);

//       if (updatedGuessed.join('') === word) {
//         setDisplayMessage(true);
//         setMessage('You guessed the word!');
//         generateNewWord();
//       } else if (guessCount === maxGuesses) {
//         setDisplayMessage(true);
//         setMessage("You didn't guess the word within 20 steps.");
//         generateNewWord();
//       }
//     } else {
//       setMessage('Please enter a single letter.');
//     }
//   }, [guess, word, guessed, guessCount]);

//   useEffect(() => {
//     let timeout;
//     if (displayMessage) {
//       timeout = setTimeout(() => {
//         setDisplayMessage(false);
//       }, 3000); // Display the message for 3 seconds (adjustable)
//     }
//     return () => clearTimeout(timeout);
//   }, [displayMessage]);

//   const generateNewWord = () => {
//     const randomIndex = Math.floor(Math.random() * words.length);
//     const randomWord = words[randomIndex];
//     setWord(randomWord);
//     setGuessed(new Array(randomWord.length).fill('_'));
//     setGuessCount(0);
//   };

//   return (
//     <div className="big">
//       <h1>Guess Game</h1>
//       <p>Guess the word:</p>
//       <p>{guessed.join(' ')}</p>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <label htmlFor="guess">Enter a letter: </label>
//         <input
//           type="text"
//           id="guess"
//           value={guess}
//           onChange={(e) => setGuess(e.target.value)}
//           maxLength={1}
//         />
//       </form>
//       {displayMessage && <p>{message}</p>}
//     </div>
//   );
// };

// export default GamePage;


