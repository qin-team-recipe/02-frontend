export type FabsProps = {
  onClick?: () => void
  message: string
  isShow: boolean
}

const Fab = (props: FabsProps) => {
  const { onClick, message, isShow } = props
  return (
    <div className="fixed inset-x-0 bottom-8 z-30 flex items-center justify-center">
      <button
        className="flex w-48 transform items-center justify-center rounded-3xl bg-red-500 p-4 text-sm text-white opacity-0 transition-opacity duration-300"
        style={{
          opacity: isShow ? 1 : 0,
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)", // なぜかshadowクラスが効かないのでstyleで直接指定
        }}
        onClick={onClick}
      >
        {message}
      </button>
    </div>
  )
}

export default Fab
