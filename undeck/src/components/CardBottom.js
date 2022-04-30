import { useLocation } from "react-router-dom";
import "./css/CardBottom.css";
import CardBottomAdd from "./CardBottomAdd.js";
import CardBottomRemove from "./CardBottomRemove.js";
import CardBottomDownload from "./CardBottomDownload.js";
import CardBottomZoom from "./CardBottomZoom.js";

function CardBottom({ card }) {
  const location = useLocation();
  return (
    <section className="card__bottom">
      {location.pathname === "/deck" ? <CardBottomRemove card={card} /> : <CardBottomAdd card={card} />}
      <CardBottomDownload card={card} />
      <CardBottomZoom card={card} />
    </section>
  )
}

export default CardBottom;