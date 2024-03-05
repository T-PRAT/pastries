import Yams from "../components/Yams"
import WinPatries from "../components/WinPatries";
import { createContext } from "react";
import { useState } from "react";

export const GameContext = createContext();

function Home() {
  const [win, setWin] = useState(null);
  return (
    <>
      <GameContext.Provider value={{ win, setWin }}>
        <Yams />
        {win && <WinPatries />}
      </GameContext.Provider>
    </>
  )
}

export default Home;
