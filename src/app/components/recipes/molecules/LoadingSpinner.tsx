/**
 * ローディングスピナー
 * @returns
 */
export default function LoadingSpinner() {
  return (
    <>
      {/* ぐるぐる */}
      <div className="flex justify-center p-4 w-full" aria-label="読み込み中">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
      <div className="flex justify-center text-sm">Loading...</div>
    </>
  )
}
