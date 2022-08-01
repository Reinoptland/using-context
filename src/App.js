import { useState, useEffect, createContext } from "react";
import "./App.css";
import NewPlayer from "./components/NewPlayer";
import Players from "./components/Players";

function Board() {
  return (
    <div className="Board">
      <h1>Scoreboard</h1>
      <NewPlayer />
      <Players />
    </div>
  );
}

export default Board;
