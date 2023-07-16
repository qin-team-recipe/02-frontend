"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { IoHeartOutline } from "react-icons/io5"

import { RecipeImage } from "../../[screenName]/type"

type ChefRecipeCardProps = {
  recipeId: number
  recipeImage: RecipeImage
  imageSize: number
  favoriteCount: number
}

const ChefRecipeCard = async (props: ChefRecipeCardProps) => {
  const { recipeId, recipeImage, imageSize, favoriteCount } = props
  const router = useRouter()

  const handleClick = () => {
    router.push(`/recipes/${recipeId}`)
  }

  return (
    <button onClick={handleClick}>
      <div className="mt-3 flex flex-col items-center gap-1">
        {/* 画像 */}
        <div className="relative">
          <Image
            src={recipeImage.path}
            alt={`${recipeImage.name}のアイコン`}
            width={imageSize}
            height={imageSize}
            className="rounded-2xl"
          />
          <div className="absolute right-2 top-2 flex rounded-xl bg-gray-600 opacity-70">
            <div className="flex flex-row items-center justify-end p-1 text-sm text-white">
              <IoHeartOutline />
              {favoriteCount}
            </div>
          </div>
        </div>
        <div style={{ width: imageSize }}>
          {/* レシピタイトル */}
          <p className="mb-1 truncate text-xs font-semibold">
            {recipeImage.name}
          </p>
          {/* TODO レシピ説明かシェフ名か要確認 */}
          <p className="truncate text-xs text-gray-500">
            {recipeImage.description}
          </p>
        </div>
      </div>
    </button>
  )
}
export default ChefRecipeCard
