// Libraries
import { useDispatch } from "react-redux"
import ReactModal from "react-modal"

// Utils
import { setType } from "../redux/modal"

// CSS
import "./css/Modal.css"

function Modal({ isOpen, role, children }) {
  const dispatch = useDispatch()

  return (
    <ReactModal
      isOpen={isOpen}
      role={role}
      autoFocus={true}
      onRequestClose={() => dispatch(setType(""))}
    >
      {children}
    </ReactModal>
  )
}

export default Modal