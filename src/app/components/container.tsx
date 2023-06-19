import type { FC } from "react"

type ContainerProps = {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="-mr-[2px] -ml-[2px] border-r-2 border-l-2">
      <div className=" mx-auto md:mx-0 mb-[90px] px-4 py-4 w-full max-w-[480px] flex-grow ">
        {children}
      </div>
    </div>
  )
}

export default Container
