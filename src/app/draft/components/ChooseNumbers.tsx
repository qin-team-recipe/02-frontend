"use client"

import { useState } from "react"

type SelectedNumber = number | null

export const ChooseNumbers = () => {
  //モーダルを表示し、選択した数字から*人前に代入
  const [selectedNumber, setSelectedNumber] = useState<SelectedNumber>(null)
  const [modalVisible, setModalVisible] = useState(false)

  const handleIconClick = () => {
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  const handleNumberSelect = (number: SelectedNumber) => {
    setSelectedNumber(number)
    setModalVisible(false)
  }

  const formatNumber = (number: number) => {
    return `${number}人前`
  }
  return (
    <>
      <div className="h-[19px] px-[16px] flex mb-1">
        <div className="font-bold text-[16px] mr-[6.67px]">
          材料/{selectedNumber ? formatNumber(selectedNumber) : "*人前"}
        </div>
        <div className="h-[16px]" onClick={handleIconClick}>
          icon
        </div>
      </div>
      {modalVisible && (
        <div className="modal border-x-2 border-y-2 bg-gray-200 px-4">
          <h2>人数を選んでください！</h2>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <li key={number} onClick={() => handleNumberSelect(number)}>
                {formatNumber(number)}
              </li>
            ))}
          </ul>
          <button onClick={handleModalClose} className="py-2">
            Close
          </button>
        </div>
      )}
    </>
  )
}
