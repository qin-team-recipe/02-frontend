import PageBackButton from "../components/organisms/PageBackButton"

export const metadata = {
  title: "Top Recipe",
  description: "Manage your favorite recipes.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* TODO 全体レイアウト決定前のため暫定的にここでレスポンシブ対応 */}
      <div className="mx-auto flex min-h-screen sm:max-w-2xl">
        <div className="absolute left-4 top-4 z-10">
          <PageBackButton />
        </div>
        {children}
      </div>
    </>
  )
}
