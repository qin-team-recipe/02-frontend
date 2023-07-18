import type { FC } from "react"

type ContainerProps = {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="-ml-[2px] -mr-[2px]  border-l-2 border-r-2">
      <div className=" mx-auto mb-[90px] w-full max-w-[480px] flex-grow px-4 py-4 md:mx-0 md:mb-0 ">
        {children}
      </div>
    </div>
  )
}

export default Container
