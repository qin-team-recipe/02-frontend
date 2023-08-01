import UserProfileForms from "./components/organisms/UserProfileForms"

const Profiles = async ({ params }: { params: { screenName: string } }) => {
  return (
    <>
      <main className="flex-1 overflow-hidden bg-slate-100 sm:border-x">
        {/* ヘッダ */}
        <div className="flex items-center justify-between border-b-2 px-2 py-3">
          <div className="flex-0.3 "></div>
          <div className="flex-0.3 text-xl font-bold">編集</div>
          <div className="flex-0.3"></div>
        </div>

        {/* フォーム */}
        <UserProfileForms screenName={params.screenName} />
      </main>
    </>
  )
}
export default Profiles
