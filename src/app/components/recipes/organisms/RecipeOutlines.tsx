"use client"
import React, { useCallback, useEffect, useState } from "react"

import AvatorButton from "../molecules/AvatorButton"
import FavoriteButton from "../molecules/FavoriteButton"
import FavoriteCounterLabel from "../molecules/FavoriteCounterLabel"
import ImageWithBlurType from "../molecules/ImageWithBlur"

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
 * レシピ概要
 * @returns
 */
const RecipeOutlines = (props: RecipeOutlinesProps) => {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(false)
  const [recipe, setRecipe] = useState<RecipeOutlineType>({
    title: "",
    chefImageUrl: undefined,
    chefName: "",
    description: "",
    favoriteCount: 0,
    imageUrl: undefined,
    isMyFavorite: false,
  })
  useEffect(() => {
    const getRecipeOutlineData = async () => {
      console.log("レシピデータ取得 id=" + id)
      // const response = await fetch(`http://localhost:3000/api/recipes/${id}`, {
      //   next: { revalidate: 10 },
      // });
      // const data = await response.json();
      // console.log("レシピデータ取得結果 data=" + JSON.stringify(data));

      // ダミーデータ
      const data = {
        id: "hogehogehoge",
        title: "グラタン",
        chefImageUrl: "https://placehold.jp/50x50.png",
        chefName: "山田シェフ",
        description:
          "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。\n" +
          "ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
        favoriteCount: 768,
        followerCount: 200,
        imageUrl: "https://placehold.jp/400x400.png",
        isMyFavorite: false,
      }

      setRecipe(data)
      setIsFavorite(data.isMyFavorite)
    }

    if (id) getRecipeOutlineData()
  }, [id])

  /**
   * お気に入りクリック
   */
  const handleFavoriteClick = useCallback(() => {
    setIsFavorite((preIsFavorite) => !preIsFavorite)
  }, [])

  /**
   * シェフクリック
   */
  const handleChefClick = useCallback(() => {
    alert("シェフへ移動")
  }, [])

  return (
    <>
      <div className="w-full relative">
        {/* レシピ画像 */}
        {/* @ts-expect-error Server Component */}
        <ImageWithBlurType src={recipe.imageUrl} alt={recipe.title} />

        {/* お気に入りボタン */}
        <FavoriteButton
          className="absolute right-0 bottom-1"
          onClick={handleFavoriteClick}
          isActive={isFavorite}
        />
      </div>
      <div className="p-4">
        {/* レシピタイトル */}
        <div className="font-bold mb-2 text-2xl">{recipe.title}</div>

        {/* レシピ説明 */}
        <div className="h-full mb-4">{recipe.description}</div>

        {/* シェフ */}
        <div className="flex flex-row items-center">
          <AvatorButton
            src={recipe.chefImageUrl}
            name={recipe.chefName}
            onClick={handleChefClick}
          />

          {/* お気に入り件数 */}
          <FavoriteCounterLabel className="ml-4" count={recipe.favoriteCount} />
        </div>
      </div>
    </>
  )
}
export default RecipeOutlines
