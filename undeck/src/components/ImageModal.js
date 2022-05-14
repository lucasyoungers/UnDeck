import { useSelector } from "react-redux"
import Modal from "../components/Modal"

function ImageModal() {
  const { type, card } = useSelector(state => state.modal)

  return (
    <Modal isOpen={type === "image"} role="image">
      <img src={card?.images?.large || ""} alt={card?.name || ""}></img>
    </Modal>
  )
}

export default ImageModal