"use client"
import { ReactElement } from "react"

type ModalProps = {
  isOpen: boolean
  onClose?: () => void
  children: ReactElement
}

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props

  const handleClose = () => {
    onClose && onClose()
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="z-50 rounded-lg bg-white p-4 shadow-lg ">
            {children}
            {onClose && (
              <div className=" flex">
                <button
                  className="ml-auto mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
