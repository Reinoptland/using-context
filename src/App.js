import { useState, useEffect, createContext } from "react";
import "./App.css";
import Players from "./components/Players";

function Board() {
  return (
    <div className="Board">
      <Players />
    </div>
  );
}

export default Board;
