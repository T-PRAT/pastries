import Yams from "../components/Yams"
import WinPatries from "../components/WinPatries";
import Layout from "../layouts/Layout";
import { useState } from "react";


function Home() {
  const [win, setWin] = useState(null);
  return (
    <Layout>
      <div className="h-36 flex items-center justify-center pt-6">
        {win && <WinPatries win={win} />}
      </div>
      <Yams setWin={setWin} />
    </Layout>
  )
}

export default Home;
