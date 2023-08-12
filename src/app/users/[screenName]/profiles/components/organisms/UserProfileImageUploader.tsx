"use client"
import Image from "next/image"
import React, { ChangeEvent, useRef, useState } from "react"
import { IoAdd, IoTrash } from "react-icons/io5"

interface UserProfileImageUploaderProps {
  onImageChange: (imageFile: File) => void
  imageSize: number
}

const UserProfileImageUploader: React.FC<UserProfileImageUploaderProps> = ({
  onImageChange,
  imageSize,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [preview, setPreview] = useState("")

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files && e.target.files[0]
    if (imageFile) {
      setSelectedImage(imageFile)
      setPreview(window.URL.createObjectURL(imageFile))
      onImageChange(imageFile)
    }
  }
  const fileUpload = () => {
    inputRef.current && inputRef.current.click()
  }
  const handleDelete = () => {
    setSelectedImage(null)
  }

  return (
    <div className="ml-2 flex w-28 flex-col items-center justify-center ">
      <button onClick={fileUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={handleSelectImage}
          hidden
          ref={inputRef}
        />
        <div className="m-2 flex h-28 w-28 flex-row items-center justify-center rounded border border-gray-300 bg-white ">
          {selectedImage ? (
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded"
              width={imageSize}
              height={imageSize}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              画像を設定
              <IoAdd />
            </div>
          )}
        </div>
      </button>
      {selectedImage && (
        <button onClick={handleDelete} className="flex flex-row  text-gray-500">
          <IoTrash className="text-sm" />
          <p className="text-xs">削除する</p>
        </button>
      )}
    </div>
  )
}

export default UserProfileImageUploader
