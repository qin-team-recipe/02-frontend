"use client"

import { useState } from "react"

export const AddLinks = () => {
  const [inputValues, setInputValues] = useState<string[]>([])
  const [showModal, setShowModal] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)

  const moveUp = (index: number) => {
    if (index > 0) {
      const updatedValues = [...inputValues]
      const temp = updatedValues[index]
      updatedValues[index] = updatedValues[index - 1]
      updatedValues[index - 1] = temp
      setInputValues(updatedValues)
    }
  }

  const moveDown = (index: number) => {
    if (index < inputValues.length - 1) {
      const updatedValues = [...inputValues]
      const temp = updatedValues[index]
      updatedValues[index] = updatedValues[index + 1]
      updatedValues[index + 1] = temp
      setInputValues(updatedValues)
    }
  }

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
      <div className="mb-4 pt-8">
        <div className="mt-3 h-[19px] px-[16px] text-[16px] font-bold">
          リンク(任意)
        </div>
        <div className="relative h-[42px] w-full border-y-2">
          <input
            type="text"
            className="h-full w-full"
            value={inputValues[0] || ""}
            onChange={(e) => handleChange(0, e.target.value)}
          />
          {inputValues[0] && (
            <button
              onClick={() => openModal(0)}
              className="absolute right-0 top-0 mr-2 mt-1 border-none bg-transparent text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
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
          <div key={index + 1} className="relative h-[42px] w-full border-b-2">
            <input
              value={value}
              onChange={(e) => handleChange(index + 1, e.target.value)}
              className="h-full w-full px-2 pr-10"
            />
            {value && (
              <div className="absolute right-0 top-0 mr-2 mt-1 space-x-2">
                <button
                  onClick={() => moveUp(index + 1)}
                  className="border-none bg-transparent text-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => moveDown(index + 1)}
                  className="border-none bg-transparent text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => openModal(index + 1)}
                  className="border-none bg-transparent text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ))}
        <div className="mb-4 h-[27px]">
          <div className="flex px-4 pt-[8px] text-red-400">
            <div className="h-4 w-4">+</div>
            <div className="h-[19px] w-[200px] pl-[4px] text-[16px]">
              <button onClick={addInputForm}>リンクを追加する</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="rounded-lg bg-white p-8">
            <p>入力内容を削除しますか？</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleDelete}
                className="rounded-md bg-red-500 px-4 py-2 text-white"
              >
                削除
              </button>
              <button
                onClick={closeModal}
                className="ml-4 rounded-md bg-gray-300 px-4 py-2 text-gray-700"
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
