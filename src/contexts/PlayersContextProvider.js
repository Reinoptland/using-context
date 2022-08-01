import { useState, useEffect, createContext } from "react";

// 1. Create a context
export const playersContext = createContext();

export default function PlayersContextProvider(props) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const response = await fetch("http://localhost:4000/players");
      const json = await response.json();
      setPlayers(json);
    }
    getPlayers();
    return () => {
      // cleanup / cancel
    };
  }, []);

  // 3. Pass a value (or mutiple values)
  return (
    <playersContext.Provider value={{ players: players, highscores: {} }}>
      {props.children}
    </playersContext.Provider>
  );
}
