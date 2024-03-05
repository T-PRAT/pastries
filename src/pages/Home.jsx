import Yams from "../components/Yams"
import WinPatries from "../components/WinPatries";
import Layout from "../layouts/Layout";
import { createContext } from "react";
import { useState } from "react";

export const GameContext = createContext();

function Home() {
  const [win, setWin] = useState(null);
  return (
    <Layout>
      <GameContext.Provider value={{ win, setWin }}>
        <div className="h-36 flex items-center justify-center pt-6">
          {win && <WinPatries />}
        </div>
        <Yams />
      </GameContext.Provider>
    </Layout>
  )
}

export default Home;
