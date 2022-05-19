// Libraries
import { Link } from "react-router-dom";

// CSS
import "./css/Logo.css";

function Logo() {
  return (
    <Link to="/" style={{textDecoration: "none", color: "initial"}}>
      <h1 className="header__logo">UnDeck</h1>
    </Link>
  )
}

export default Logo