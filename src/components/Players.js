import React, { useContext } from "react";
import { playersContext } from "../contexts/PlayersContextProvider";

export default function Players() {
  // 4. use the useContext hook to get access to the values from the Provider
  const players = useContext(playersContext);

  console.log("PLAYERS", players);
  return <div>Players</div>;
}
