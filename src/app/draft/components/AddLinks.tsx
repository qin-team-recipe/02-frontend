"use client"

import { useState } from "react"

export const AddLinks = () => {
  const [inputValues, setInputValues] = useState<string[]>([])
  const [showModal, setShowModal] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)

  const handleChange = (index: number, value: string) => {
    const updatedValues = [...inputValues]
    updatedValues[index] = value
    setInputValues(updatedValues)
  }

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedValues = [...inputValues]
      updatedValues.splice(deleteIndex, 1)
      setInputValues(updatedValues)
      setShowModal(false)
      setDeleteIndex(null)
    }
  }

  const openModal = (index: number) => {
    setDeleteIndex(index)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setDeleteIndex(null)
  }

  const addInputForm = () => {
    setInputValues([...inputValues, ""])
  }

  return (
    <>
      <div className="h-[147px]">
        <div className="h-[19px] mt-[32px] px-[16px] font-bold text-[16px]">
          リンク
        </div>
        <div className="h-[125px]">
          <div className="w-full border-y-2 h-[42px] relative">
            <input
              type="text"
              className="w-full h-full"
              value={inputValues[0] || ""}
              onChange={(e) => handleChange(0, e.target.value)}
            />
            {inputValues[0] && (
              <button
                onClick={() => openModal(0)}
                className="absolute top-0 right-0 mt-1 mr-2 text-red-500 bg-transparent border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          {inputValues.slice(1).map((value, index) => (
            <div
              key={index + 1}
              className="w-full border-b-2 h-[42px] relative"
            >
              <input
                value={value}
                onChange={(e) => handleChange(index + 1, e.target.value)}
                className="w-full h-full"
              />
              {value && (
                <button
                  onClick={() => openModal(index + 1)}
                  className="absolute top-0 right-0 mt-1 mr-2 text-red-500 bg-transparent border-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
          <div className="h-[27px] flex text-red-400">
            <div className="ml-4 mr-1 mt-[9px] h-4 w-4">+</div>
            <div className="h-[19px] w-[128px] text-[16px] mt-[8px]">
              <button onClick={addInputForm}>リンクを追加する</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <p>入力内容を削除しますか？</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                削除
              </button>
              <button
                onClick={closeModal}
                className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
