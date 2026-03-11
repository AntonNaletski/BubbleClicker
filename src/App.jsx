import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Lemon from "./components/Lemon";
import "./App.css";
import Booster from "./components/Booster";
function App() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    // Kasvatetaan napautusten määrää yhdellä.
    setClicks(clicks + 1);
  };
  return (
    <>
      <div>
        <Header>Lemon clicker</Header>

        <Balance total={clicks} />
        <Lemon onClick={handleClick} />

        <Booster value="3.2" />
      </div>
    </>
  );
}

export default App;
