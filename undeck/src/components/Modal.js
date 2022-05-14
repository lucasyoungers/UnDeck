import { useDispatch } from "react-redux"
import ReactModal from "react-modal"
import "./css/Modal.css"

import { setType } from "../redux/modal"

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