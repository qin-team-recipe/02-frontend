import type { FC, ReactNode } from "react"

type CarouselProps = {
  children: ReactNode
}

export const Carousel: FC<CarouselProps> = ({ children }) => (
  <div className="scrollbar-hide overflow-x-auto">
    <div className="flex gap-4 whitespace-nowrap">{children}</div>
  </div>
)
