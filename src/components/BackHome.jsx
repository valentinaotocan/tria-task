import { Link } from "react-router-dom"

function BackHome() {
  return (
    <div className="back-home">
     <Link to="/" className="underline">Home</Link>
    </div>
  )
}
export default BackHome