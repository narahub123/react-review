import { useState } from "react";

import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.js"; // winning combinatons
import GameOver from "./components/GameOver.jsx";

// the initial game board from GameBoard.jsx
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// determine the current player - for reducing state management : how can i know it?
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (
    gameTurns.length && // check if there is an element in the turns array
    gameTurns[0].player === "X" // check if the first element in turns array is 'x' or not
  ) {
    currentPlayer = "O";
  } // if ends

  return currentPlayer;
} // deriveActivePlayer() ends

function App() {
  // deal with player's name
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  // deal with turn of the game which can replace gameBoard state in GameBoard.jsx
  const [gameTurns, setGameTurns] = useState([]);
  // deal with a symbol of player who is currently playing
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);

  // update game board based on the previous game board
  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  // derive state from props
  for (const turn of gameTurns) {
    const { square, player } = turn;

    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  // check if the winning combinations are met
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol]; // set a name of winner instead of symbol
    }
  }

  // change a symbol of playing player
  function handleSelectSquare(rowIndex, colIndex) {
    // the logic how to change the symbol
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    // the logic how to change the symbol according to the turn
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      // the turn array is not empty and first element of the array is equal to 'X'
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      } // if ends

      // change the symbol of the current player
      const activePlayer = deriveActivePlayer(prevTurns);

      // updated turn array : a copy of turns - it's used for the Log component
      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: activePlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  } // handleSelectSquare() ends

  // check for draw
  const hasDraw = gameTurns.length === 9 && !winner;

  // restart button
  function handleRestart() {
    setGameTurns([]);
  } // handleRestart() ends

  // update player's name
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  } // handlePlayerNameChange() ends
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"} // conditional styling
              onChangeName={handlePlayerNameChange}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"} // conditional styling
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {/* game over screen */}
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
          <GameBoard
            onSelectSquare={handleSelectSquare} // set next player
            // activePlayerSymbol={activePlayer} // active player's symbol
            board={gameBoard}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
