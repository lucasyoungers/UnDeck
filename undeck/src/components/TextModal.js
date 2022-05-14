import { useSelector } from "react-redux"
import Modal from "../components/Modal"

function TextModal() {
  const { type } = useSelector(state => state.modal)

  return (
    <Modal isOpen={type === "text"} role="text">
      <p>hiya!</p>
    </Modal>
  )
}

export default TextModal