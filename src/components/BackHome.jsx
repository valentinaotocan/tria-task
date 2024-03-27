import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackHome() {
  return (
    <div className="back-home">
      <Link to="/" className="underline">
        <span className="left-arrow">
          <FaArrowLeft />
        </span>
        Home
      </Link>
    </div>
  );
}
export default BackHome