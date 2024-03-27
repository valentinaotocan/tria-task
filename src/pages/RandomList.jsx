import { useState } from "react";
import BackHome from "../components/BackHome";
import Error from "../components/Error";

function RandomList() {
  const [randomNumbs, setRandomNumbs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new"
      );
      if (response.ok) {
        const data = await response.json();
        setRandomNumbs((prevNumbers) => [...prevNumbers, data]);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="random-list">
      <BackHome />
      <div className="random-list__main">
        <button
          onClick={handleFetch}
          className="btn btn--bigger random-list__main__btn mb-md"
        >
          Roll
        </button>
        <div className="random-list__main__list">
          {error && <Error />}
          {randomNumbs.map((number, index) => (
            <p key={index}>{number}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RandomList;
