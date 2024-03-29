import Error from "../components/Error";
import { TbExposureMinus1 } from "react-icons/tb";
import { PiEraserFill } from "react-icons/pi";

function List({ ...props }) {
  const {
    error,
    randomNums,
    lastNumb,
    appearanceNums,
    handleDecrease,
    handleRemove,
  } = props;

  return (
    <div className="list flex-column-center pt-md">
      {error && <Error />}
      {randomNums.map((number, index) => (
        <div key={index} className="list__row">
          <p className={`${number === lastNumb ? "last-num" : ""}`}>
            {appearanceNums[number] === 1
              ? number
              : `${number} / ${appearanceNums[number]}`}
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
  );
}
export default List;
