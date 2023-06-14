import React from "react"

import FavoriteCounterLabel from "../molecules/FavoriteCounterLabel"
import ImageWithBlurType from "../molecules/ImageWithBlur"
import RecipeChefAvatorButton from "./RecipeChefAvatorButton"
import RecipeFavoriteButton from "./RecipeFavoriteButton"

type RecipeOutlinesProps = {
  id: string
}

type RecipeOutlineType = {
  title: string
  chefImageUrl?: string
  chefName: string
  description: string
  favoriteCount?: number
  imageUrl?: string
  isMyFavorite: boolean
}

/**
 * レシピデータ取得
 * @param id
 * @returns
 */
const getRecipeOutlineData = async (id: string): Promise<RecipeOutlineType> => {
  console.log("レシピデータ取得 id=" + id)

  // const response = await fetch(`http://localhost:3000/api/recipes/${id}`, {
  //   next: { revalidate: 10 },
  // });
  // const data = await response.json();
  // console.log("レシピデータ取得結果 data=" + JSON.stringify(data));
  // return data;

  // ダミーデータ
  return {
    title: "グラタン",
    chefImageUrl: "https://placehold.jp/50x50.png",
    chefName: "山田シェフ",
    description:
      "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。\n" +
      "ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
    favoriteCount: 768,
    imageUrl: "https://placehold.jp/400x400.png",
    isMyFavorite: false,
  }
}

/**
 * レシピ概要
 * @returns
 */
const RecipeOutlines = async (props: RecipeOutlinesProps) => {
  const { id } = props
  const recipe = await getRecipeOutlineData(id)

  return (
    <>
      <div className="w-full relative">
        {/* レシピ画像 */}
        <ImageWithBlurType src={recipe.imageUrl} alt={recipe.title} />

        {/* お気に入りボタン */}
        <RecipeFavoriteButton
          className="absolute right-0 bottom-1"
          isMyFavorite={recipe.isMyFavorite}
        />
      </div>
      <div className="p-4">
        {/* レシピタイトル */}
        <div className="font-bold mb-2 text-2xl">{recipe.title}</div>

        {/* レシピ説明 */}
        <div className="h-full mb-4">{recipe.description}</div>

        {/* シェフ */}
        <div className="flex flex-row items-center">
          {/* アバター */}
          <RecipeChefAvatorButton
            src={recipe.chefImageUrl}
            name={recipe.chefName}
          />

          {/* お気に入り件数 */}
          <FavoriteCounterLabel className="ml-4" count={recipe.favoriteCount} />
        </div>
      </div>
    </>
  )
}
export default RecipeOutlines
