import Image from "next/image"
import type { FC } from "react"

import type { ChefImage } from "../type"

type ChefIconProps = {
  chefImage: ChefImage
}

export const ChefAvatar: FC<ChefIconProps> = ({ chefImage }) => (
  <div className="mt-3 flex flex-col items-center gap-1 ">
    <Image
      src={chefImage.path}
      alt={`${chefImage.name}のアイコン`}
      width={80}
      height={80}
      className="rounded-full"
    />
    <p className="w-[80px] truncate text-center text-xs">{chefImage.name}</p>
  </div>
)
