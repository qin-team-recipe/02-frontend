/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useRef, useState } from "react"

export const AddImages = () => {
  const [image, setImage] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageAdd = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setImage(imageURL)
      if (fileInputRef.current) {
        fileInputRef.current.value = "" // ファイル選択をクリアする
      }
    }
  }

  const handleImageDelete = () => {
    setImage(null)
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleAddImageClick = () => {
    if (!image && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      handleImageAdd(event)
    }
  }

  return (
    <>
      <div className="mx-4 mb-2 h-[19px] text-[16px] font-bold">画像(任意)</div>
      <div className="h-[127px]">
        <div className="flex">
          {image ? (
            <div className="relative ml-2">
              <img src={image} alt="新しい画像" className="w-30 h-30 ml-4" />
              <button
                onClick={openModal}
                className="absolute right-0 top-0 -mr-2 -mt-2 h-5 w-5 items-center justify-center rounded-full border-none bg-red-500 text-center text-[12px] text-red-300"
              >
                ×
              </button>
            </div>
          ) : (
            <div className="mx-4 h-[100px] rounded-md border-2 px-[30px] py-[20px]">
              <label
                className="item-center text-center"
                htmlFor="image-upload-input"
              >
                <div
                  className="mb-[14px] text-[12px] text-[#6F6E77]"
                  onClick={() => fileInputRef.current?.click()}
                >
                  画像を設定
                </div>
              </label>
              <label className="item-center text-center">
                <div className="ml-4 mr-1 mt-[9px] h-4 w-4 cursor-pointer">
                  +
                </div>
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="flex h-[27px] text-red-400">
        <div className="ml-4 mr-1 mt-[9px] h-4 w-4">
          {!image && (
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                style={{ display: "none" }}
                id="image-upload-input"
              />
            </>
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="rounded-lg bg-white p-8">
            <p>画像を削除しますか？</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleImageDelete}
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
