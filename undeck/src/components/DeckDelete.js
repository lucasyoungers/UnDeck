import { Link } from "react-router-dom";
import DeleteSVG from "./svg/DeleteSVG.js";

function DeckDelete() {
  return (
    <Link to="/" style={{textDecoration: "none"}}>
      <button className="header__deck__delete btn">
        <DeleteSVG />
      </button>
    </Link>
  )
}

export default DeckDelete;