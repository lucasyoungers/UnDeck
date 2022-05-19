function ModalAbility({ ability }) {
  return (
    <section className="modal__effect">
      <span className={`modal__effect__${ability.type.replace(" ", "-")}`}>{ability.type}:</span>
      <span className="modal__effect__name">{ability.name}</span>
      <p className="modal__effect__effect">{ability.text}</p>
    </section>
  )
}

export default ModalAbility