import shortenNumber from "../utils/shortenNumber";

function Booster(props) {
  // Poimitaan komponentille välitetty total-arvo
  const value = shortenNumber(props.value);

  return (
    <div className="booster">
      <div>{value} lemons / click</div>
    </div>
  );
}

export default Booster;
