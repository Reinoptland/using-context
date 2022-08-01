import { useState, useEffect, createContext } from "react";
import "./App.css";
import Players from "./components/Players";

function Board() {
  return (
    <div className="Board">
      <h1>Scoreboard</h1>
      <Players />
    </div>
  );
}

export default Board;
