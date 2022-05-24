// Libraries
import { useLocation } from "react-router-dom"

// Components
import CardBottomAdd from "./CardBottomAdd"
import CardBottomRemove from "./CardBottomRemove"
import CardBottomDownload from "./CardBottomDownload"
import CardBottomZoom from "./CardBottomZoom"

// CSS
import "./css/CardBottom.css"

function CardBottom({ card }) {
  const location = useLocation();
  return (
    <section className="card__bottom">
      <CardBottomAdd card={card} />
      {location.pathname === "/deck" && <CardBottomRemove card={card} />}
      <CardBottomDownload card={card} />
      <CardBottomZoom card={card} />
    </section>
  )
}

export default CardBottom