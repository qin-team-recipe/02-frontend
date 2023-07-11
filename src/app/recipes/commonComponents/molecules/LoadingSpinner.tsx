/**
 * ローディングスピナー
 * @returns
 */
const LoadingSpinner = () => {
  return (
    <>
      {/* ぐるぐる */}
      <div className="flex w-full justify-center p-4" aria-label="読み込み中">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
      <div className="flex justify-center text-sm">Loading...</div>
    </>
  )
}
export default LoadingSpinner
