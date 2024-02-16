import { useState } from "react";

export default function Player({ name, symbol, onClick }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChange() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input type="text" required />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleChange}>Edit</button>
    </li>
  );
}
