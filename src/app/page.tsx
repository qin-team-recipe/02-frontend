// 以下の型定義は、同じディれくりトリにあるtypes.tsに移動しましたので、そこからインポートする

import { NextPage } from "next"

import Container from "./components/Container"
import FooterMenu from "./components/FooterMenu"
import SearchBar from "./components/SearchBar"
import { SubHeader } from "./components/SubHeader"
import TopChefCard from "./components/TopChefCard"
import TopChefPicCard from "./components/TopChefPicCard"
import TopRecipeCard from "./components/TopRecipeCard"
import { fetchGetData } from "./utils/fetchMethod"

const getData = async (url: string) => {
  const response = await fetchGetData({
    url: url,
  })
  console.log("シェフデータ一覧結果=" + JSON.stringify(response))

  // URLによる条件分岐
  if (url.includes("/recommends/chefs")) {
    return response.data
  } else if (url.includes("/chefs") || url.includes("/recommends/recipes")) {
    return response.data.lists
  } else {
    // 予期せぬURLが渡された場合のエラーハンドリング
    throw new Error("Invalid URL specified")
  }
}

const Home: NextPage = async () => {
  const chefs = await getData("/chefs")
  const recomendsChefs = await getData("/recommends/chefs")
  const recomendsRecipes = await getData("/recommends/recipes")

  return (
    <>
      <Container>
        <SearchBar />
        <div className="-mx-[16px] border-b-2"></div>
        <div className="mb-2.5 mt-2.5">
          <SubHeader title="注目のシェフ" />
        </div>
        <TopChefPicCard data={recomendsChefs} />
        <div className="mb-2.5 mt-6">
          <SubHeader
            title="話題のレシピ"
            link={{ href: "/search?tab=recipe", text: "もっと見る" }}
          />
        </div>
        <TopRecipeCard data={recomendsRecipes} />
        <div className="mb-2.5 mt-6">
          <SubHeader
            title="シェフ"
            link={{ href: "search/?tab=chef", text: "もっと見る" }}
          />
        </div>
        <TopChefCard data={chefs} />
        <div className="w-[476px]: -mx-[16px] overflow-auto border-l-2 border-r-2">
          <FooterMenu />
        </div>
      </Container>
    </>
  )
}
export default Home
