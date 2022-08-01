import React, { useContext } from "react";
import { playersContext } from "../contexts/PlayersContextProvider";
import Player from "./Player";

export default function Players() {
  // 4. use the useContext hook to get access to the values from the Provider
  const { players } = useContext(playersContext);

  //   console.log("PLAYERS", players);
  return (
    <div>
      {players.map((player) => {
        return (
          <Player
            key={player.id}
            name={player.name}
            score={player.score}
            id={player.id}
          />
        );
      })}
    </div>
  );
}
