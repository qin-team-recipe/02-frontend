export type ToastProps = {
  message: string
  type: "success" | "error"
  showToast: boolean
}

const Toast = (props: ToastProps) => {
  const { message, type, showToast } = props

  let typeColorClass = ""
  if (type === "success") {
    typeColorClass = "bg-green-500 text-green-100"
  } else if (type === "error") {
    typeColorClass = "bg-red-500 text-red-100"
  }

  return (
    <>
      {/* 画面右下から左にスライドして表示 */}
      <div
        className={`fixed bottom-8 right-0 transform rounded p-4 ${typeColorClass} transition-transform duration-300 ${
          showToast ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {message}
      </div>
    </>
  )
}

export default Toast
