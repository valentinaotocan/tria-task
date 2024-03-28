import { GiBrokenArrow } from "react-icons/gi";

function Error() {
  return (
    <div className="flex-clmn-center">
      <GiBrokenArrow size={100}/>
      <p className="pt-md">Ooops! Something went wrong!</p>
    </div>
  );
}
export default Error;
