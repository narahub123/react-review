import { useState } from "react";

export default function Player({ name, symbol, onClick }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChange() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" required />;
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleChange}>{btnCaption}</button>
    </li>
  );
}
