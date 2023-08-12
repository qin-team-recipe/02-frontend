"use client"
import React from "react"

type ModalButtonProps = {
  title: string
  onClick?: () => void
  size?: number
}

/**
 * モーダルダイアログボタン
 * @param props
 * @returns
 */
const ModalButton = (props: ModalButtonProps) => {
  const { title, onClick, size } = props
  let widthSize = 100
  if (size) {
    widthSize = size
  }
  return (
    <>
      <button onClick={onClick}>
        <div
          className="rounded bg-blue-400 p-2 text-center text-sm text-white hover:bg-blue-500"
          style={{ width: widthSize }}
        >
          {title}
        </div>
      </button>
    </>
  )
}
export default ModalButton
