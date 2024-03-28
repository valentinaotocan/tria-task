import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackHome() {
  return (
    <div className="back-home">
      <Link to="/" className="underline">
        <span className="pr-xs">
          <FaArrowLeft size={16}/>
        </span>
        Home
      </Link>
    </div>
  );
}
export default BackHome