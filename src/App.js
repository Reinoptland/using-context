import { useState, useEffect, createContext } from "react";
import "./App.css";
import Players from "./components/Players";

// 1. Create a context
export const playersContext = createContext();

function Board() {
  // console.log("WHAT IS playersCONTEXT?", playersContext);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const response = await fetch("http://localhost:4000/players");
      const json = await response.json();
      // console.log("PLAYERS", json);
      setPlayers(json);
    }
    getPlayers();
    return () => {
      // cleanup / cancel
    };
  }, []);

  // 2. Wrap your app in the Provider
  // 3. Pass a value (or mutiple values)
  return (
    <playersContext.Provider value={{ players: players, highscores: {} }}>
      <div className="Board">
        <Players />
      </div>
    </playersContext.Provider>
  );
}

export default Board;
