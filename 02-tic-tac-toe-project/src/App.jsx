import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

// determine the current player
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (
    gameTurns.length > 0 && // check if there are any turns recorded in the game
    gameTurns[0].player === "X" // check if the player who made the first turn is 'X'
  ) {
    currentPlayer = "O";
  }

  return currentPlayer;
} // deriveActivePlayer() ends

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const activePlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initalName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initalName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
} // App() ends

export default App;
