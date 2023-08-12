import type { FC, ReactElement } from "react"

type SubHeaderProps = {
  title: string
  textSize?: "text-base" | "text-lg" | "text-xl"
  rightItem?: ReactElement
}

export const SubHeader: FC<SubHeaderProps> = ({
  title,
  textSize = "text-base",
  rightItem,
}) => {
  return (
    <div className="ml-2 flex justify-between">
      <p className={`${textSize} font-bold`}>{title}</p>
      {rightItem}
    </div>
  )
}
