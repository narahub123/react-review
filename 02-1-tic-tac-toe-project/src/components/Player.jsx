import { useState } from "react";

export default function Player({ initialName, symbol }) {
  // deal with click text
  const [isEdit, setIsEidt] = useState(false);
  // deal with name editted - two way binding
  const [playerName, setPlayerName] = useState(initialName);

  // change player name via change in input
  function handleChange(event) {
    setPlayerName(event.target.value);
  } // handleChange() ends

  // change value via click
  function handleClick() {
    // update the state based on the old state
    // update player name element based on the change on the state
    setIsEidt((editing) => !editing);
  } // handleClick() ends

  // toggle player name element
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // toggle button caption
  let btnCaption = "Edit";

  if (isEdit) {
    editablePlayerName = (
      <input type="text" value={playerName} required onChange={handleChange} />
    );
    btnCaption = "Save";
  } // if ends

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  );
}
