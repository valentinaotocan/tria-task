import { useState } from "react";
import BackHome from "../components/BackHome";
import Error from "../components/Error";

function RandomList() {
  const [randomNums, setRandomNums] = useState([]);
  const [error, setError] = useState(false);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        "https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new"
      );
      if (response.ok) {
        const data = await response.json();
         const prevNums = [...randomNums, data];
         const sortedNums = prevNums.sort((a, b) => a - b);
         setRandomNums(sortedNums);
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
      <div className="random-list__main">
        <button
          onClick={handleFetch}
          className="btn btn--bigger random-list__main__btn"
        >
          Roll
        </button>
        <div className="random-list__main__list flex-clmn-center pt-md">
          {error && <Error />}
          {randomNums.map((number, index) => (
            <p
              key={index}
              className={index === randomNums.length - 1 ? "last-num" : ""}
            >
              {number}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RandomList;
