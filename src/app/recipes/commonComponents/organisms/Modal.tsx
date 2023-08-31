"use client"
import { ReactElement } from "react"

type ModalProps = {
  isOpen: boolean
  onClose?: (value: boolean) => void
  children: ReactElement
}

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props

  const handleClose = () => {
    onClose && onClose(false)
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <button
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></button>

          <div className="z-50 rounded-lg bg-white p-4 shadow-lg ">
            {children}
            {/* 背景画面で閉じることができるので、一旦コメントアウト */}
            {/* {onClose && (
              <div className=" flex">
                <button
                  className="ml-auto mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            )} */}
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
