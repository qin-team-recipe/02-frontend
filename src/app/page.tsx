// 以下の型定義は、同じディれくりトリにあるtypes.tsに移動しましたので、そこからインポートする

import { NextPage } from "next"

import Container from "./components/Container"
import FooterMenu from "./components/FooterMenu"
import SearchBar from "./components/SearchBar"
import { SubHeader } from "./components/SubHeader"
import TopChefCard from "./components/TopChefCard"
import TopChefPicCard from "./components/TopChefPicCard"
import TopRecipeCard from "./components/TopRecipeCard"
import { RecipeCardProps } from "./types"
import { fetchGetData } from "./utils/fetchMethod"

// シェフデータ及びレシピデータをフェッチしたものと仮定したダミーデータ
// const chefDummyData: ChefProps[] = [
//   {
//     id: 1,
//     imageUrl: "/toppage/topchef1.jpg",
//     screen_name: "GjIhYDXec0",
//     display_name: "チーム２シェフ",
//     description:
//       "私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です",
//   },
// ]
const recipesDummyData: RecipeCardProps[] = [
  {
    image: "/toppage/topRecipe1.jpg",
    title:
      "チーム２レシピの本文1111111111111111111111111111111の本文1111111111111111111111111111111の本文1111111111111111111111111111111",
    text: "チーム２レシピの本文1111111111111111111111111111111111111111",
    chef: "チーム２シェフ",
    good: 100,
    comment: 100,
    createdAt: "2021-01-01 00:00:00",
    updatedAt: "2021-01-01 00:00:00",
  },
  {
    image: "/toppage/topRecipe1.jpg",
    title: "チーム２レシピ",
    text: "チーム２レシピの本文",
    chef: "チーム２シェフ",
    good: 100,
    comment: 100,
    createdAt: "2021-01-01 00:00:00",
    updatedAt: "2021-01-01 00:00:00",
  },
  {
    image: "/toppage/topRecipe1.jpg",
    title: "チーム２レシピ",
    text: "チーム２レシピの本文",
    chef: "チーム２シェフ",
    good: 100,
    comment: 100,
    createdAt: "2021-01-01 00:00:00",
    updatedAt: "2021-01-01 00:00:00",
  },
  {
    image: "/toppage/topRecipe1.jpg",
    title: "チーム２レシピ",
    text: "チーム２レシピの本文",
    chef: "チーム２シェフ",
    good: 100,
    comment: 100,
    createdAt: "2021-01-01 00:00:00",
    updatedAt: "2021-01-01 00:00:00",
  },
]

const getChefs = async () => {
  const response = await fetchGetData({
    url: "/chefs",
  })
  console.log("シェフデータ一覧結果=" + JSON.stringify(response))
  return response.data.lists
}
const Home: NextPage = async () => {
  const chefs = await getChefs()

  return (
    <>
      <Container>
        <SearchBar />
        <div className="-mx-[16px] border-b-2"></div>
        <div className="mb-2.5 mt-2.5">
          <SubHeader title="注目のシェフ" />
        </div>
        <TopChefPicCard data={chefs} />
        <div className="mb-2.5 mt-6">
          <SubHeader
            title="話題のレシピ"
            link={{ href: "/favorites", text: "もっと見る" }}
          />
        </div>
        <TopRecipeCard data={recipesDummyData} />
        <div className="mb-2.5 mt-6">
          <SubHeader
            title="シェフ"
            link={{ href: "/favorites", text: "もっと見る" }}
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
