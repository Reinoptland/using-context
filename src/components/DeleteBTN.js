import React, { useContext } from "react";
import { playersContext } from "../contexts/PlayersContextProvider";

export default function DeleteBTN(props) {
  const { deletePlayer } = useContext(playersContext);
  //   console.log(props);
  return <button onClick={() => deletePlayer(props.id)}>🗑</button>;
}
