import type { FC } from "react"

type ContainerProps = {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className=" mx-auto md:mx-0 px-4 py-4 w-full max-w-[480px] flex-grow">
      {children}
    </div>
  )
}

export default Container
