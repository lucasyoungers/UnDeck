import uuid from "react-uuid"

function ModalAttack({ attack }) {
  let icons;
  if (attack.cost.length === 0) {
    icons = <img
      className="modal__effect__icon"
      src="type_icons/None.png"
      alt="None"
    />
  } else {
    icons = attack.cost.map(type => (
      <img
        className="modal__effect__icon"
        src={`type_icons/${type}.svg`}
        alt={type}
        key={uuid()}
      />
    ))
  }

  return (
    <section className="modal__effect">
      <section className="modal__effect--flex">
        {icons}
        <span className="modal__effect__name">{attack.name}</span>
        {attack.damage && <span className="modal__effect__damage">{attack.damage}</span>}
      </section>
      <p className="modal__effect__effect">{attack.text}</p>
    </section>
  )
}

export default ModalAttack