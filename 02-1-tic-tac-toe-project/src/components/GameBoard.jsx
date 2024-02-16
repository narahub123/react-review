import { useState } from "react";

// default game board - move up to App.jsx
// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard({
  onSelectSquare,
  // activePlayerSymbol, // no need any more since turn state in App.jsx can deal with symbol
  // turns, // since the value was lift up no longer it's used
  board,
}) {
  /*
  // deal with game board change
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // change in game board
  function handleSelectSquare(rowIndex, colIndex) {
    // update the state based on the previous state
    setGameBoard((prevGameBoard) => {
      // a deep copy of origin
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      // update game board according to player's symbol
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

      return updatedBoard;
    });

    // change the symbol on the game board
    onSelectSquare();
  }
  */

  // move up to App.jsx
  //   let gameBoard = initialGameBoard;

  //   // derive state from props
  //   for (const turn of turns) {
  //     const { square, player } = turn;

  //     const { row, col } = square;
  //     gameBoard[row][col] = player;
  //   }

  return (
    // basic form of game board using multi-dimensional lists s
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  //   onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  // if the button is clicked, the button becomes disabled
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
