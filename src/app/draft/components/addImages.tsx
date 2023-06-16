"use client"

import { useState } from "react"

export const AddImages = () => {
  const [image, setImage] = useState("")

  const handleImageAdd = () => {
    // 画像追加の処理
    // 例えば、ファイルの選択ダイアログを表示して画像を選択し、その画像を表示するような処理を実装します
    // ここでは仮の実装として、固定の画像パスを使用しています
    const imagePath = "path/to/image.jpg"
    setImage(imagePath)
  }
  return (
    <>
      <div className="h-[19px] mt-[32px] mx-[16px] font-bold text-[16px]">
        画像
      </div>
      <div className="h-[127px]">
        <div className="flex">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="" className="h-full" />
          ) : (
            <div>※画像入れ込む※</div>
          )}
        </div>
      </div>
      <div className="h-[27px] flex text-red-400">
        <div className="ml-4 mr-1 mt-[9px] h-4 w-4" onClick={handleImageAdd}>
          +
        </div>
        <div className="h-[19px] w-[112px] text-[16px] mt-[8px]">
          <a href="#" onClick={handleImageAdd}>
            画像を追加する
          </a>
        </div>
      </div>
    </>
  )
}
