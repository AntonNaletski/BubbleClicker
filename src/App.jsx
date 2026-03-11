import Header from "./components/Header";
import Balance from "./components/Balance";
import Lemon from "./components/Lemon";
import "./App.css";
import Booster from "./components/Booster";
function App() {
  return (
    <>
      <div>
        <Header>Lemon clicker</Header>
        <Balance total="157" />
        <Lemon />
        <Booster value="3.2" />
      </div>
    </>
  );
}

export default App;
