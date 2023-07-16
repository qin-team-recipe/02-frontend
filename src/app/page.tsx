// 以下の型定義は、同じディれくりトリにあるtypes.tsに移動しましたので、そこからインポートする

import { NextPage } from "next"

import Container from "./components/Container"
import FooterMenu from "./components/FooterMenu"
import SearchBar from "./components/SearchBar"
import Sidebar from "./components/Sidebar"
import { SubHeader } from "./components/SubHeader"
import TopChefCard from "./components/TopChefCard"
import TopChefPicCard from "./components/TopChefPicCard"
import TopRecipeCard from "./components/TopRecipeCard"
import { ChefCardProps, RecipeCardProps } from "./types"

// シェフデータ及びレシピデータをフェッチしたものと仮定したダミーデータ
const chefDummyData: ChefCardProps[] = [
  {
    image: "/toppage/topchef1.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend:
      "私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
  {
    image: "/toppage/topchef1.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend: "私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
  {
    image: "/toppage/topchef1.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend: "私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
  {
    image: "/toppage/topchef1.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend: "私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
  {
    image: "/toppage/topchef1.jpg",
    title: "チーム２シェフ",
    firstName: "チーム２",
    lastName: "シェフ",
    recommend: "私は素晴らしい料理の鉄人です",
    recipeCount: 100,
  },
]
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
const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <Sidebar />
        <Container>
          <SearchBar />
          <div className="-mx-[18px] border-b-2"></div>
          <div className="mb-2.5 mt-2.5">
            <SubHeader title="注目のシェフ" />
          </div>
          <TopChefPicCard data={chefDummyData} />
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
          <TopChefCard data={chefDummyData} />
          <FooterMenu />
        </Container>
      </div>
    </>
  )
}
export default Home
