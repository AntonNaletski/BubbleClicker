function Booster(props) {
  // Poimitaan komponentille välitetty total-arvo
  const value = props.value;

  return (
    <div className="booster">
      <div>{value} lemons / click</div>
    </div>
  );
}

export default Booster;
