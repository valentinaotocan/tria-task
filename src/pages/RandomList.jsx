import { useState } from "react";
import List from "../components/List";
import BackHome from "../components/BackHome";
import ButtonRoll from "../components/ButtonRoll";
import Statistics from "../components/Statistics";
import ButtonResetAll from "../components/ButtonResetAll";

function RandomList() {
  const [randomNums, setRandomNums] = useState([]);
  const [error, setError] = useState(false);
  const [lastNumb, setLastNumb] = useState(null);
  const [appearanceNums, setAppearanceNums] = useState({});

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
        setAppearanceNums((prevAppearance) => ({
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
    setAppearanceNums((prevAppearance) => {
      const prevAppearanceCopy = { ...prevAppearance };
      const decrementByOne = (prevAppearance[number] || 0) - 1;
      if (decrementByOne <= 0) {
        delete prevAppearanceCopy[number];
        setRandomNums((prevNums) => prevNums.filter((num) => num !== number));
      } else {
        prevAppearanceCopy[number] = decrementByOne;
      }
      return prevAppearanceCopy;
    });
  };

  const handleRemove = (number) => {
    setAppearanceNums((prevAppearance) => {
      const updateAppearance = { ...prevAppearance };
      delete updateAppearance[number];
      return updateAppearance;
    });
    setRandomNums((prevNums) => prevNums.filter((num) => num !== number));
  };

  const handleResetAll = () => {
    setRandomNums([]);
    setLastNumb(null);
    setAppearanceNums({});
  };

  return (
    <div className="random-list">
      <BackHome />
      <div className="random-list__main flex-column-center">
        <ButtonRoll onClick={handleFetch} />
        <List
          error={error}
          randomNums={randomNums}
          lastNumb={lastNumb}
          appearanceNums={appearanceNums}
          handleDecrease={handleDecrease}
          handleRemove={handleRemove}
        />
        <ButtonResetAll onClick={handleResetAll} />
        <Statistics randomNums={randomNums} appearanceNums={appearanceNums} />
      </div>
    </div>
  );
}
export default RandomList;
