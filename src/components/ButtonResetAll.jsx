import { IoCloseOutline } from "react-icons/io5";

function ButtonResetAll({ onClick }) {
  return (
    <button onClick={onClick} className="mtb-2xl btn btn--normal">
      Reset All{" "}
      <span className="pl-xs">
        <IoCloseOutline size={22} />
      </span>
    </button>
  );
}
export default ButtonResetAll;
