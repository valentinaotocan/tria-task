import { useState } from "react";
import BackHome from "../components/BackHome";
import Error from "../components/Error";

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
            <p key={index} className={number === lastNumb ? "last-num" : ""}>
              {appearanceNumbs[number] === 1
                ? number
                : `${number} / ${appearanceNumbs[number]}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RandomList;
