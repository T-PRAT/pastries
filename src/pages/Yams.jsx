import Game from "../components/Game"
import WinPastries from "../components/WinPastries";
//import Home from "./Home.jsx";
import { useState } from "react";


function Yams() {
  const [win, setWin] = useState(null);

  return (<div>
    <div className="h-36 flex items-center justify-center">
      {win && <WinPastries win={win} />}
    </div>
    <Game setWin={setWin} />
  </div>
  )
}

export default Yams;
