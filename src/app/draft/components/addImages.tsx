import { ChangeEvent, useState } from "react"

export const AddImages = () => {
  const [image, setImage] = useState<string | null>(null)

  const handleImageAdd = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] // 選択されたファイルを取得
    if (file) {
      const imageURL = URL.createObjectURL(file) // ファイルのURLを生成
      setImage(imageURL)
    }
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
            <img src={image} alt="新しい画像" className="h-full" />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="h-[27px] flex text-red-400">
        <div className="ml-4 mr-1 mt-[9px] h-4 w-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageAdd}
            style={{ display: "none" }}
            id="image-upload-input"
          />
          <label htmlFor="image-upload-input">+</label>
        </div>
        <div className="h-[19px] w-[112px] text-[16px] mt-[8px]">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageAdd}
            style={{ display: "none" }}
            id="image-upload-input"
          />
          <label htmlFor="image-upload-input">画像を追加する</label>
        </div>
      </div>
    </>
  )
}
