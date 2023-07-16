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
    <div className="modal">
      <div className="modal-content flex">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        {isButtonVisible ? (
          <button onClick={handleButtonClick}>Delete</button>
        ) : (
          <div></div>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
