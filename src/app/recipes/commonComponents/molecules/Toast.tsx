export type ToastProps = {
  message: string
  type: "success" | "error"
  isShow: boolean
}

const Toast = (props: ToastProps) => {
  const { message, type, isShow } = props

  let typeColorClass = ""
  if (type === "success") {
    typeColorClass = "bg-white"
  } else if (type === "error") {
    typeColorClass = "bg-red-400"
  }

  return (
    <>
      {/* 画面右下から左にスライドして表示 */}
      {/* <div
        className={`transform transition-transform duration-300 ${
          isShow ? "translate-x-0" : "translate-x-full"
        } rounded-l-xs fixed bottom-8 right-0 flex flex-row items-center justify-center border border-gray-300 bg-gray-600 p-4 text-xs text-white shadow-lg`}
      >
        <div className={`mr-2 h-2 w-2 rounded-full ${typeColorClass}`}></div>
        {message}
      </div> */}

      {isShow && (
        <div className="fixed inset-x-0 bottom-8 z-50 flex items-center justify-center">
          <div
            className="flex w-48 transform items-center justify-center rounded-3xl bg-gray-600 p-4 text-xs text-white opacity-0 shadow-lg transition-opacity duration-300"
            style={{ opacity: isShow ? 1 : 0 }}
          >
            {message}
          </div>
        </div>
      )}
    </>
  )
}

export default Toast
