import { FC, ReactNode } from "react"

export type MainContentLayoutProps = {
  children: ReactNode
}

export const MainContentLayout: FC<MainContentLayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-full overflow-hidden pb-[82px] sm:w-[480px] sm:border-x sm:pb-0">
      {children}
    </main>
  )
}
