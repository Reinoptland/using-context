import React, { useState, useContext } from "react";
import { playersContext } from "../contexts/PlayersContextProvider";

export default function NewPlayer() {
  const { addPlayer } = useContext(playersContext);
  const [playerName, setPlayerName] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    // console.log("NEW!", playerName, addPlayer);
    addPlayer(playerName);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="playerName">
          New Player:
          <input
            type="text"
            name="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </label>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
