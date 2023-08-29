"use client"

import { ChangeEvent, useState } from "react"

interface ModalProps {
  onClose: () => void
}

export const DeleteModal: React.FC<ModalProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("")
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    setIsButtonVisible(value === "delete")
  }

  const handleButtonClick = () => {
    if (onclick) {
      // ボタンが押下されたときの処理を記述
      console.log("Delete button clicked!")
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="rounded-lg bg-white p-8">
        <div className="modal">
          <div className="modal-content">
            <div>Type [delete]!!</div>
            <input
              className="bg-gray-200"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <div className="flex">
              {isButtonVisible ? (
                <button className="mr-3" onClick={handleButtonClick}>
                  Delete
                </button>
              ) : (
                <div></div>
              )}
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
