type SkeletonProps = {
  className: string
  type?: "rect" | "circle" | "sharp"
}

/**
 * スケルトン四角
 * @param props
 * @returns
 */
const Skeleton = (props: SkeletonProps) => {
  const { className, type } = props
  let roundedClass = "rounded-xl"
  if (type == "circle") {
    roundedClass = "rounded-full"
  } else if (type == "sharp") {
    roundedClass = ""
  }
  return (
    <>
      <div
        className={`flex animate-pulse space-x-4 bg-slate-200 ${roundedClass} ${className}`}
      ></div>
    </>
  )
}
export default Skeleton
