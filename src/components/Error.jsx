import { GiBrokenArrow } from "react-icons/gi";

function Error() {
  return (
    <div className="flex-clmn-center">
      <GiBrokenArrow size={100} className="mb-lg"/>
      <p>Ooops! Something went wrong!</p>
    </div>
  );
}
export default Error;
