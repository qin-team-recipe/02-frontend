import { FC, ReactNode } from "react"

type FavoritesLayoutProps = {
  children: ReactNode
}

const FavoritesLayout: FC<FavoritesLayoutProps> = ({ children }) => (
  <div>{children}</div>
)

export default FavoritesLayout
