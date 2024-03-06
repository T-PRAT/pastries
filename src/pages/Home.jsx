import Yams from "../components/Yams"
import WinPastries from "../components/WinPastries";
import Layout from "../layouts/Layout";
import { useState } from "react";


function Home() {
  const [win, setWin] = useState(null);

  return (
    <Layout>
      <div className="h-36 flex items-center justify-center pt-6">
        {win && <WinPastries win={win} />}
      </div>
      <Yams setWin={setWin} />
    </Layout>
  )
}

export default Home;
