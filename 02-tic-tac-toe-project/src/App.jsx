import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  // check whether what the current player's symbol is
  // verify who the current play is based on the symbol
  const [activePlayer, setActivePlayer] = useState("X");

  // change the symbol of the player to another's
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initalName="Player 1" symbol="X" />
          <Player initalName="Player 2" symbol="O" />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare} // change the symbol of the player to that of another player
          activePlayerSymbol={activePlayer} // current player's symbol
        />
      </div>
      log
    </main>
  );
}

export default App;
