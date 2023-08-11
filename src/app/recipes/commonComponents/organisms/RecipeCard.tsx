"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { IoHeartOutline } from "react-icons/io5"

type RecipeCardProps = {
  recipeId: number
  watchId: string
  title: string
  description: string
  imageSrc: string
  imageSize: number
  favoriteCount: number
}

const RecipeCard = (props: RecipeCardProps) => {
  const {
    recipeId,
    watchId,
    title,
    description,
    imageSrc,
    imageSize,
    favoriteCount,
  } = props
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/recipes/${watchId}`)
  }, [router, watchId])

  if (!imageSrc) return <></>

  return (
    <button onClick={handleClick}>
      <div className="mt-3 flex flex-col items-center gap-1">
        {/* 画像 */}
        <div className="group relative">
          <Image
            src={imageSrc}
            alt={`${title}のアイコン`}
            width={imageSize}
            height={imageSize}
            className="rounded-2xl transition-opacity group-hover:opacity-70"
          />
          <div className="absolute right-2 top-2 flex rounded-xl bg-gray-600 opacity-70 transition-opacity group-hover:opacity-40">
            <div className="flex flex-row items-center justify-end p-1 text-sm text-white">
              <IoHeartOutline />
              {favoriteCount}
            </div>
          </div>
        </div>
        <div style={{ width: imageSize }}>
          {/* レシピタイトル */}
          <p className="mb-1 truncate text-xs font-semibold">{title}</p>
          {/* TODO レシピ説明かシェフ名か要確認 */}
          <p className="truncate text-xs text-gray-500">{description}</p>
        </div>
      </div>
    </button>
  )
}
export default RecipeCard
