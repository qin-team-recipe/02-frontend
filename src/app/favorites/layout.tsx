import { FC, ReactNode } from "react"

import FooterMenu from "../components/FooterMenu"

type FavoritesLayoutProps = {
  children: ReactNode
}

const FavoritesLayout: FC<FavoritesLayoutProps> = ({ children }) => (
  <div>
    {children}
    <FooterMenu />
  </div>
)

export default FavoritesLayout
