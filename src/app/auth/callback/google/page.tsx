// google認証後のコールバックページ。このページはGoogleから返された認証コードを取得し、その認証コードをバックエンドに送信します。
const GoogleAuth = async () => {
  const response = await fetch("http://localhost:8083/api/v1/**＊")
  return (
    <>
      <div>Hello World</div>
    </>
  )
}

export default GoogleAuth
