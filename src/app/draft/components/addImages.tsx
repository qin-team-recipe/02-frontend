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
      <div className="h-[19px] mt-8 mb-2 mx-4 font-bold text-[16px]">画像</div>
      <div className="h-[127px]">
        <div className="flex">
          {image ? (
            <div className="relative ml-2">
              <img src={image} alt="新しい画像" className="max-h-32 max-w-32" />
              <button
                onClick={openModal}
                className="absolute top-0 right-0 -mt-2 -mr-2 text-red-300 bg-red-500 rounded-full w-5 h-5 text-[12px] border-none text-center items-center justify-center"
              >
                ×
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="h-[27px] flex text-red-400">
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
              <label htmlFor="image-upload-input">+</label>
            </>
          )}
        </div>
        <div className="h-[19px] w-[112px] text-[16px] mt-[8px]">
          {!image && (
            <>
              <label htmlFor="image-upload-input">画像を追加する</label>
            </>
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <p>画像を削除しますか？</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleImageDelete}
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
