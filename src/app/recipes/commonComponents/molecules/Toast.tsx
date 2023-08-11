export type ToastProps = {
  message: string
  type?: "success" | "error" //未使用
  isShow: boolean
}

const Toast = (props: ToastProps) => {
  const { message, type, isShow } = props

  return (
    <>
      <div className="md:flex">
        {/* デスクトップ　画面右下から左にスライドして表示 */}
        <div className="hidden md:block">
          <div
            className={`transform transition-transform duration-300 ${
              isShow ? "translate-x-0" : "translate-x-full"
            } rounded-l-xs fixed bottom-8 right-0 z-50 flex flex-row items-center justify-center bg-gray-600 p-4 text-sm text-white shadow-lg`}
          >
            {message}
          </div>
        </div>
      </div>

      {/* モバイル　画面中央下に表示 */}
      <div className="block md:hidden">
        <div className="fixed inset-x-0 bottom-8 z-50 flex items-center justify-center">
          <div
            className="flex w-48 transform items-center justify-center rounded-3xl bg-gray-600 p-4 text-sm text-white opacity-0 transition-opacity duration-300"
            style={{
              opacity: isShow ? 1 : 0,
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)", // なぜかshadowクラスが効かないのでstyleで直接指定
            }}
          >
            {message}
          </div>
        </div>
      </div>
    </>
  )
}

export default Toast
