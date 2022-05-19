// Libraries
import { useSelector } from "react-redux"
import uuid from "react-uuid"

// Components
import Modal from "./Modal"
import ModalAttack from "./ModalAttack"
import ModalAbility from "./ModalAbility"

// CSS
import "./css/TextModal.css"

function TextModal() {
  const { type, card } = useSelector(state => state.modal)

  let cardType
  if (card.supertype === "Pokémon") {
    if (!card.evolvesFrom) {
      cardType = <>Basic Pokémon</>
    } else {
      cardType = <>Evolves From <a href={`?name=${card.evolvesFrom}`}>{card.evolvesFrom}</a></>
    }
  } else {
    cardType = <>{card.supertype}{card.subtypes?.length && ` - ${card.subtypes?.[0]}`}</>
  }

  const rules = card.rules?.map(rule => <p className="modal__effect" key={uuid()}>{rule}</p>)
  const abilities = card.abilities?.map(ability => <ModalAbility ability={ability} />)
  const attacks = card.attacks?.map(attack => <ModalAttack attack={attack} />)

  const wrrcToIcons = wrrcList => wrrcList?.map(wrrc => (
    <img
      className="modal__wrrc__icon"
      src={`type_icons/${wrrc.type}.svg`}
      alt={wrrc.type}
      key={uuid()}
    />
  ))
  const weakness = <p className="modal__wrrc">Weakness:{wrrcToIcons(card.weaknesses)}<span className="modal__wrrc__mod">{card.weaknesses?.[0].value}</span></p>
  const resistance = <p className="modal__wrrc">Resistance:{wrrcToIcons(card.resistances)}<span className="modal__wrrc__mod">{card.resistances?.[0].value}</span></p>
  const retreatCost = <p className="modal__wrrc">Retreat Cost:{wrrcToIcons(card.retreatCost?.map(rc => ({ type: rc })))}</p>

  return (
    <Modal isOpen={type === "text"} role="text">
      <header className="modal__header">
        <section className="modal__header__left">
          <h2 className="modal__name">{card.name}</h2>
          <p className="modal__card-type">{cardType}</p>
        </section>
        {card.hp && <h3 className="modal__hp--value"><span className="modal__hp--label">HP </span>{card.hp}</h3>}
        {card.types && card.types.map(type => <img className="modal__header__icon" src={`type_icons/${type}.svg`} alt={type} key={uuid()} />)}
      </header>
      {!(card.supertype === "Energy" && card.subtypes.includes("Basic")) && <hr className="modal__divider" />}
      <main className="modal__body">
        {rules && <section className="modal__rules">{rules}</section>}
        {abilities && <section className="modal__abilities">{abilities}</section>}
        {attacks && <section className="modal__attacks">{attacks}</section>}
      </main>
      {card.supertype === "Pokémon" && <hr className="modal__divider" />}
      {card.supertype === "Pokémon" && <footer className="modal__footer">{weakness}{resistance}{retreatCost}</footer>}
    </Modal>
  )
}

export default TextModal