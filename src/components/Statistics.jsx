function Statistics({ randomNums, appearanceNums }) {
  const totalNums = randomNums.length;
  const totalDraws = Object.values(appearanceNums).reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  const sumNums = randomNums.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  const minNum = randomNums.length > 0 ? Math.min(...randomNums) : 0;
  const maxNum = randomNums.length > 0 ? Math.max(...randomNums) : 0;

  return (
    <div className="stats">
      <div className="stats__wrap">
        <h3>Statistics</h3>
        <p>Total numbers: {totalNums}</p>
        <p>Total draws: {totalDraws}</p>
        <p>Sum of numbers: {sumNums}</p>
        <p>Min number: {minNum}</p>
        <p>Max number: {maxNum}</p>
      </div>
    </div>
  );
}
export default Statistics;
