import { RecipeOutlineType } from "../../[id]/type"
import FavoriteCounterLabel from "../molecules/FavoriteCounterLabel"
import ImageWithBlurType from "../molecules/ImageWithBlur"
import RecipeChefAvatorButton from "./RecipeChefAvatorButton"
import RecipeEditMenu from "./RecipeEditMenu"
import RecipeFavoriteButton from "./RecipeFavoriteButton"

type RecipeOutlinesProps = {
  recipe: RecipeOutlineType
}

/**
 * レシピ概要
 * @returns
 */
const RecipeOutlines = async (props: RecipeOutlinesProps) => {
  const { recipe } = props
  if (!recipe) {
    return <></>
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
            src={recipe.chef.chefImageUrl}
            name={recipe.chef.chefName}
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
