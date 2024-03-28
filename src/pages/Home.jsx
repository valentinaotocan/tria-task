import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <Link to="/random-list" className="underline">
        Random Number List{" "}
        <span className="pl-xs">
          <FaArrowRight  size={16}/>
        </span>
      </Link>
    </div>
  );
}
export default Home