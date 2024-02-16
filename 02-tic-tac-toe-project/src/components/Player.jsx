import { useState } from "react";

export default function Player({ name, symbol, onClick }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChange() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" value={name} required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleChange}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
