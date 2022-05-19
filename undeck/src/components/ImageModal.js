// Libraries
import { useSelector } from "react-redux"

// Components
import Modal from "./Modal"

function ImageModal() {
  const { type, card } = useSelector(state => state.modal)

  return (
    <Modal isOpen={type === "image"} role="image">
      <img src={card?.images?.large || ""} alt={card?.name || ""}></img>
    </Modal>
  )
}

export default ImageModal