"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Home = () => {
  const [inputValues, setInputValues] = useState<string[]>([""])
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [textAreaHeights, setTextAreaHeights] = useState<number[]>([])
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const [checkStates, setCheckStates] = useState<boolean[]>(
    inputValues.map(() => false)
  )
  const router = useRouter()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    //URLは仮置き
    router.push("/")
  }

  useEffect(() => {
    // フォーム内のテキストエリアの高さを設定
    const newHeights = inputValues.map((value) => {
      const lines = Math.ceil(value.length / 20) // 20文字ごとに改行
      const minHeight = 42 // 初期高さ
      const lineHeight = 20 // 1行の高さ
      const calculatedHeight = Math.max(
        minHeight,
        minHeight + (lines - 1) * lineHeight
      )
      return calculatedHeight
    })
    setTextAreaHeights(newHeights)
  }, [inputValues])

  const moveUp = (index: number) => {
    if (index > 0) {
      const updatedValues = [...inputValues]
      const temp = updatedValues[index]
      updatedValues[index] = updatedValues[index - 1]
      updatedValues[index - 1] = temp
      setInputValues(updatedValues)

      const updatedCheckStates = [...checkStates]
      const tempCheck = updatedCheckStates[index]
      updatedCheckStates[index] = updatedCheckStates[index - 1]
      updatedCheckStates[index - 1] = tempCheck
      setCheckStates(updatedCheckStates)
    }
  }

  const moveDown = (index: number) => {
    if (index > 0) {
      const updatedValues = [...inputValues]
      const temp = updatedValues[index]
      updatedValues[index] = updatedValues[index - 1]
      updatedValues[index - 1] = temp
      setInputValues(updatedValues)

      const updatedCheckStates = [...checkStates]
      const tempCheck = updatedCheckStates[index]
      updatedCheckStates[index] = updatedCheckStates[index - 1]
      updatedCheckStates[index - 1] = tempCheck
      setCheckStates(updatedCheckStates)
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
  const openModal2 = () => {
    setShowModal2(true)
  }
  const addInputForm = () => {
    setInputValues([...inputValues, ""])
    setCheckStates([...checkStates, false])
  }
  const toggleCheck = (index: number) => {
    const updatedCheckStates = [...checkStates]
    updatedCheckStates[index] = !updatedCheckStates[index]
    setCheckStates(updatedCheckStates)
  }
  const deleteCheckedItems = () => {
    const updatedValues = [...inputValues]
    const updatedCheckStates = [...checkStates]

    for (let i = updatedValues.length - 1; i >= 0; i--) {
      if (updatedCheckStates[i]) {
        updatedValues.splice(i, 1)
        updatedCheckStates.splice(i, 1)
      }
    }
    if (updatedValues.length === 0) {
      updatedValues.push("")
      updatedCheckStates.push(false)
    }

    setInputValues(updatedValues)
    setCheckStates(updatedCheckStates)
    setShowModal2(false)
  }

  const deleteAllItems = () => {
    setInputValues([""])
    setCheckStates([false])
    setShowModal2(false)
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="flex h-[48px] justify-center border-b-2 px-[16px] py-[12px] text-center text-[20px] font-bold">
          買い物リスト
        </div>
        <div className="border-b-2">
          <h1 className="my-5 flex h-[20px] justify-between">
            <h2 className="pl-2 text-[16px] font-bold">じぶんメモ</h2>
            <h2 className="flex">
              <h3 className="text-[13px]">
                <button onClick={addInputForm}>+</button>
              </h3>
              <h3 className="px-4">
                <button onClick={() => openModal2()}>
                  <Image
                    src="/shoppinglist/Vector.png"
                    objectFit="cover"
                    alt=""
                    width={16}
                    height={16}
                  />
                </button>
              </h3>
            </h2>
          </h1>
        </div>
        <div className="mb-4">
          {inputValues.map((value, index) => (
            <div key={index} className="relative flex w-full border-b-2">
              <div className="relative mx-2 w-[24px] py-3">
                <button onClick={() => toggleCheck(index)}>
                  <Image
                    src={
                      checkStates[index]
                        ? "/shoppinglist/Check.png"
                        : "/shoppinglist/Circle.png"
                    }
                    objectFit="cover"
                    alt=""
                    width={24}
                    height={24}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                </button>
              </div>
              <textarea
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-full px-2 pr-10"
                style={{
                  overflowWrap: "break-word",
                  height: `${textAreaHeights[index]}px`,
                }}
              />
              <div className="px-4 py-3">
                <button onClick={() => openModal(index)}>
                  <Image
                    src="/shoppinglist/Stroke.png"
                    objectFit="cover"
                    alt=""
                    width={4}
                    height={20}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white py-2 pl-2 pr-16">
            {deleteIndex !== null && (
              <>
                <h1 className="mb-2 flex justify-between">
                  <button
                    onClick={() => {
                      moveUp(deleteIndex)
                      closeModal()
                    }}
                  >
                    上に移動する
                  </button>
                </h1>
                <h1>
                  <button
                    onClick={() => {
                      moveDown(deleteIndex)
                      closeModal()
                    }}
                  >
                    下に移動する
                  </button>
                </h1>
              </>
            )}
            <div className="mt-4 flex justify-end">
              <button onClick={handleDelete}>アイテムを削除する</button>
            </div>
          </div>
        </div>
      )}
      {showModal2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white py-2 pl-2 pr-16">
            <div className="mt-4 flex justify-start">
              <button onClick={deleteCheckedItems}>
                完了したアイテムだけ削除する
              </button>
            </div>
            <div className="mt-4 flex justify-start">
              <button onClick={deleteAllItems}>
                すべてのアイテムを削除する
              </button>
            </div>
          </div>
        </div>
      )}
      {showModal3 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white py-2 pl-2 pr-16">
            {deleteIndex !== null && (
              <>
                <div className="mt-4 flex justify-start">
                  <button onClick={handleClick}>レシピ詳細をみる</button>
                </div>
                <div className="mt-4 flex justify-start">
                  <button
                    onClick={() => {
                      moveDown(deleteIndex)
                      closeModal()
                    }}
                  >
                    下に移動する
                  </button>
                </div>
                <div className="mt-4 flex justify-start">
                  <button onClick={deleteCheckedItems}>
                    完了したアイテムだけ削除する
                  </button>
                </div>
                <div className="mt-4 flex justify-start">
                  <button onClick={deleteAllItems}>
                    レシピを買い物リストから削除する
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default Home
