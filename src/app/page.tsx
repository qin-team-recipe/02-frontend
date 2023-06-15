// 以下の型定義は、同じディれくりトリにあるtypes.tsに移動しましたので、そこからインポートする
import Container from "./components/container"
import SearchBar from "./components/searchBar"
import Sidebar from "./components/sidebar"
import { SubHeader } from "./components/SubHeader"
import TopChefCard from "./components/topChefCard"
import TopRecipeCard from "./components/topRecipeCard"
import { ChefCardProps, RecipeCardProps } from "./types"

// シェフデータ及びレシピデータをフェッチしたものと仮定したダミーデータ
const chefDummyData: ChefCardProps[] = [
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

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Sidebar>
          <div>これはサイドバーです</div>
        </Sidebar>
        <Container>
          <SearchBar />
          <div className="border-b-2 -mx-5"></div>
          <div className="mt-2.5 mb-2.5">
            <SubHeader title="注目のシェフ" />
          </div>
          <TopChefCard data={chefDummyData} />
          <div className="mt-6 mb-2.5">
            <SubHeader
              title="話題のレシピ"
              link={{ href: "/favorites", text: "もっと見る" }}
            />
          </div>
          <TopRecipeCard data={recipesDummyData} />
          <div className="mt-6 mb-2.5">
            <SubHeader
              title="シェフ"
              link={{ href: "/favorites", text: "もっと見る" }}
            />
          </div>
          <TopChefCard data={chefDummyData} />
        </Container>
      </div>
    </>
  )
}
export default Home
