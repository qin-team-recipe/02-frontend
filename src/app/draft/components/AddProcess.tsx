"use client"

import { useState } from "react"

import { Menu } from "./Menu"

export const AddProcess = () => {
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
      <div className="mb-4">
        <div className="mb-1 mt-3 h-[19px] px-[16px] text-[16px] font-bold">
          作り方
        </div>
        <div className="relative h-[42px] w-full border-y-2">
          <input
            type="text"
            className="h-full w-full px-2 pr-10"
            value={inputValues[0] || ""}
            onChange={(e) => handleChange(0, e.target.value)}
          />
          {inputValues[0] && (
            <div className="absolute bottom-0 right-0 top-0 mr-2 mt-1 flex items-center gap-2">
              <Menu onDelete={() => openModal(0)} />
            </div>
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
              <div className="absolute bottom-0 right-0 top-0 mr-2 mt-1 flex items-center gap-2">
                <Menu
                  onUp={() => moveUp(index + 1)}
                  onDown={() => moveDown(index + 1)}
                  onDelete={() => openModal(index + 1)}
                />
              </div>
            )}
          </div>
        ))}
        <div className="h-[27px]">
          <div className="flex px-4 pt-[8px] text-red-400">
            <div className="h-4 w-4">+</div>
            <div className="h-[19px] w-[200px] pl-[4px] text-[16px]">
              <button onClick={addInputForm}>工程を追加する</button>
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
