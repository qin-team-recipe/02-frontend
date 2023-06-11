import Image from "next/image"
import type { FC } from "react"

import { RecipeImage } from "../type"

type RecipeProps = {
  recipeImage: RecipeImage
  imageSize: number
}

export const Recipe: FC<RecipeProps> = ({ recipeImage, imageSize }) => (
  <div className="mt-3 flex flex-col items-center gap-1 ">
    <Image
      src={recipeImage.path}
      alt={`${recipeImage.name}のアイコン`}
      width={imageSize}
      height={imageSize}
      className="rounded-md"
    />
    <div style={{ width: imageSize }}>
      {/* TODO: 1行で省略するのではなく、２行で省略されるように修正する。（line-clamp-2が何故か効かない） */}
      <p className="mb-1 truncate text-xs font-semibold">{recipeImage.name}</p>
      <p className="truncate text-xs text-gray-500">
        {recipeImage.description}
      </p>
    </div>
  </div>
)
