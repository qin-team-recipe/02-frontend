import type { FC } from "react"

import type { ChefImage } from "../type"
import { Carousel } from "./Carousel"
import { ChefAvatar } from "./ChefAvatar"

type ChefAvatarsCarouselProps = {
  chefImages: ChefImage[]
}

export const ChefAvatarsCarousel: FC<ChefAvatarsCarouselProps> = ({
  chefImages,
}) => (
  <Carousel>
    {chefImages.map((chefImage) => (
      <ChefAvatar key={chefImage.id} chefImage={chefImage} />
    ))}
  </Carousel>
)
