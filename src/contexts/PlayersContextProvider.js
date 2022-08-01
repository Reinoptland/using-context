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

  async function addPlayer(name) {
    console.log("DO WE HAVE A NAME?", name);
    // 1. do request to the server
    const response = await fetch("http://localhost:4000/players", {
      method: "POST",
      body: JSON.stringify({ name: name, score: 0 }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const player = await response.json();
    // console.log(player);
    // 2. update the state in the browser
    // MAP [{}, {}, {}] -> [{}, {}, {}]
    // FIND [{}, {}, {}] -> {} | undefined
    // Filter [{}, {}, {}] -> [{}, {}]

    // players.push(player);
    // const updatedPlayers = players.map((player) => player);
    // updatedPlayers.push(player);

    const updatedPlayers = [...players, player];

    setPlayers(updatedPlayers);
  }

  // 3. Pass a value (or mutiple values)
  return (
    <playersContext.Provider
      value={{ players: players, highscores: {}, addPlayer: addPlayer }}
    >
      {props.children}
    </playersContext.Provider>
  );
}
