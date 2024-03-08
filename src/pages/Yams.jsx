import Game from "../components/Game"
import WinPastries from "../components/WinPastries";
//import Home from "./Home.jsx";
import { useState } from "react";


function Yams() {
  const [win, setWin] = useState(null);

  return (
    <div className="max-w-2xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">Jeu de Yams</h2>
      <div className="h-36 flex items-center justify-center">
        {win && <WinPastries win={win} />}
      </div>
      <Game win={win} setWin={setWin} />
    </div>
  )
}

export default Yams;
