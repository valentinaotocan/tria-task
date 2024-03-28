import { useState } from "react";
import BackHome from "../components/BackHome";
import Error from "../components/Error";
import { TbExposureMinus1 } from "react-icons/tb";
import { PiEraserFill } from "react-icons/pi";

function RandomList() {
  const [randomNums, setRandomNums] = useState([]);
  const [error, setError] = useState(false);
  const [lastNumb, setLastNumb] = useState(null);
  const [appearanceNumbs, setAppearanceNumbs] = useState({});

  const handleFetch = async () => {
    try {
      const response = await fetch(
        "https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new"
      );
      if (response.ok) {
        const data = await response.json();
        const prevNums = [...new Set([...randomNums, data])];
        const sortedNums = prevNums.sort((a, b) => a - b);
        setRandomNums(sortedNums);
        setAppearanceNumbs((prevAppearance) => ({
          ...prevAppearance,
          [data]: (prevAppearance[data] || 0) + 1,
        }));
        setLastNumb(data);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  const handleDecrease = (number) => {
    setAppearanceNumbs((prevAppearance) => {
      const updatedAppearance = { ...prevAppearance };
      const updatedCount = (prevAppearance[number] || 0) - 1;
      if (updatedCount <= 0) {
        delete updatedAppearance[number];
        setRandomNums((prevNums) => prevNums.filter((num) => num !== number));
      } else {
        updatedAppearance[number] = updatedCount;
      }
      return updatedAppearance;
    });
  };

  const handleRemove = (number) => {
    setAppearanceNumbs((prevAppearance) => {
      const newAppearance = { ...prevAppearance };
      delete newAppearance[number];
      return newAppearance;
    });
    setRandomNums((prevNums) => prevNums.filter((num) => num !== number));
  };

  const minNumber = randomNums.length > 0 ? Math.min(...randomNums) : 0;
  const maxNumber = randomNums.length > 0 ? Math.max(...randomNums) : 0;

  return (
    <div className="random-list">
      <BackHome />
      <div className="random-list__main flex-column-center">
        <button
          onClick={handleFetch}
          className="random-list__main__btn btn btn--bigger"
        >
          Roll
        </button>
        <div className="random-list__main__list flex-column-center pt-md">
          {error && <Error />}
          {randomNums.map((number, index) => (
            <div key={index} className="random-list__main__list__row">
              <p
                className={`random-list__main__list__paragraph ${
                  number === lastNumb ? "last-num" : ""
                }`}
              >
                {appearanceNumbs[number] === 1
                  ? number
                  : `${number} / ${appearanceNumbs[number]}`}
              </p>
              <button
                onClick={() => handleDecrease(number)}
                className="btn btn--smaller mr-xxs"
              >
                <TbExposureMinus1 size={16} />
              </button>
              <button
                onClick={() => handleRemove(number)}
                className="btn btn--smaller"
              >
                <PiEraserFill size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="random-list__stats">
        <div className="random-list__stats__wrap">
          <h3>Statistics</h3>
          <p>Total numbers: {randomNums.length}</p>
          <p>
            Total draws: {Object.values(appearanceNumbs).reduce((acc, currentValue) => acc + currentValue, 0)}
          </p>
          <p>Sum of numbers: {randomNums.reduce((acc, currentValue) => acc + currentValue, 0)}</p>
          <p>Min number: {minNumber}</p>
          <p>Max number: {maxNumber}</p>
        </div>
      </div>
    </div>
  );
}
export default RandomList;
