import FavoriteCounterLabel from "../molecules/FavoriteCounterLabel"
import ImageWithBlurType from "../molecules/ImageWithBlur"
import RecipeChefAvatorButton from "./RecipeChefAvatorButton"
import RecipeEditMenu from "./RecipeEditMenu"
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
  isMyRecipe: boolean // TODO 暫定対応　本来はログインidとレシピの作成者idでマイレシピか判定する
}

/**
 * レシピデータ取得
 * @param id
 * @returns
 */
const getRecipeOutlineData = async (
  id: string
): Promise<RecipeOutlineType | undefined> => {
  console.log("レシピデータ取得 id=" + id)

  // const response = await fetch(`http://localhost:3000/api/recipes/${id}`, {
  //   next: { revalidate: 10 },
  // });
  // const data = await response.json();
  // console.log("レシピデータ取得結果 data=" + JSON.stringify(data));
  // return data;

  // ダミーデータ
  const dummyList = [
    {
      recipeId: 1,
      title: "グラタン",
      chefImageUrl: "https://placehold.jp/50x50.png",
      chefName: "山田シェフ",
      description:
        "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。\n" +
        "ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
      favoriteCount: 768,
      imageUrl: "https://placehold.jp/400x300.png",
      isMyFavorite: false,
      isMyRecipe: false,
    },
    {
      recipeId: 2,
      title: "パスタ",
      chefImageUrl: "https://placehold.jp/50x50.png",
      chefName: "",
      description:
        "おいしい冷製パスタのレシピです。\n" +
        "夏にぴったりです。ぜひお試しください。",
      favoriteCount: 1768,
      imageUrl: "https://placehold.jp/200x500.png",
      isMyFavorite: true,
      isMyRecipe: true,
    },
  ]

  const dummy = dummyList.find((item) => item.recipeId === Number(id))
  return dummy
}

/**
 * レシピ概要
 * @returns
 */
const RecipeOutlines = async (props: RecipeOutlinesProps) => {
  const { id } = props
  const recipe = await getRecipeOutlineData(id)

  {
    /* データが取得できなかった場合 */
  }
  if (!recipe) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-10 text-xl">該当するレシピがありません</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="w-full">
        {/* レシピ画像 */}
        <ImageWithBlurType src={recipe.imageUrl} alt={recipe.title} />
      </div>
      <div className="p-4">
        <div className="flex flex-row">
          {/* レシピタイトル */}
          <div className="mb-2 text-2xl font-bold">{recipe.title}</div>

          {/* 編集メニュー（マイレシピのみ表示）*/}
          {recipe.isMyRecipe && (
            <div className="ml-auto">
              <RecipeEditMenu />
            </div>
          )}
        </div>

        {/* レシピ説明 */}
        <div className="mb-4 h-full">{recipe.description}</div>

        {/* シェフ */}
        <div className="flex flex-row items-center">
          {/* アバター */}
          <RecipeChefAvatorButton
            src={recipe.chefImageUrl}
            name={recipe.chefName}
            isMyRecipe={recipe.isMyRecipe}
          />

          {/* お気に入り件数 */}
          <FavoriteCounterLabel className="ml-4" count={recipe.favoriteCount} />
        </div>

        {/* お気に入りボタン（マイレシピ以外表示）*/}
        <div>
          {!recipe.isMyRecipe && (
            <RecipeFavoriteButton
              className="mt-2"
              isMyFavorite={recipe.isMyFavorite}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default RecipeOutlines
