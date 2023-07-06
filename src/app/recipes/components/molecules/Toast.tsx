export type ToastProps = {
  message: string
  type: "success" | "error"
  showToast: boolean
}

const Toast = (props: ToastProps) => {
  const { message, type, showToast } = props

  let typeColorClass = ""
  if (type === "success") {
    typeColorClass = "bg-white"
  } else if (type === "error") {
    typeColorClass = "bg-red-400"
  }

  return (
    <>
      {/* 画面右下から左にスライドして表示 */}
      <div
        className={`transform transition-transform duration-300 ${
          showToast ? "translate-x-0" : "translate-x-full"
        } rounded-l-xs fixed bottom-8 right-0 flex flex-row items-center justify-center border border-gray-300 bg-gray-600 p-4 text-xs text-white shadow-lg`}
      >
        <div className={`mr-2 h-2 w-2 rounded-full ${typeColorClass}`}></div>
        {message}
      </div>
    </>
  )
}

export default Toast
