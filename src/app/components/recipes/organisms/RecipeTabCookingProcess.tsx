import { useEffect, useState } from "react"

import RecipeTabCard from "./RecipeTabCard"

type RecipeTabProcessProps = {
  id: string
}

type RecipeCookingProcessType = {
  annotation?: string
  description: string
  stepnumber: number
}

/**
 * レシピタブ工程コンテンツ
 * @param props
 * @returns
 */
const RecipeTabCookingProcess = (props: RecipeTabProcessProps) => {
  const { id } = props
  const [process, setProcess] = useState<RecipeCookingProcessType[]>([])
  useEffect(() => {
    const getRecipeProcessData = async () => {
      console.log("レシピ工程データ取得 id=" + id)
      // const response = await fetch(
      //   `http://localhost:3000/api/recipes/${id}/process`,
      //   {
      //     next: { revalidate: 10 },
      //   }
      // );
      // const data = await response.json();
      // console.log("レシピ工程データ取得結果 data=" + JSON.stringify(data));

      // ダミーデータ
      const data = [
        {
          annotation:
            "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
          description:
            "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
          stepnumber: 1,
        },
        {
          annotation:
            "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
          description:
            "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
          stepnumber: 2,
        },
        {
          annotation:
            "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
          description:
            "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
          stepnumber: 3,
        },
        {
          annotation:
            "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
          description:
            "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
          stepnumber: 4,
        },
        {
          annotation:
            "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
          description:
            "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
          stepnumber: 5,
        },
        {
          annotation:
            "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
          description:
            "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
          stepnumber: 6,
        },
      ]
      setProcess(data)
    }

    if (id) getRecipeProcessData()
  }, [id])

  return (
    <>
      {/* 工程リスト */}
      {process.map((item, i) => (
        <RecipeTabCard
          key={i}
          number={item.stepnumber}
          mainMessage={item.description}
          subMessage={item.annotation}
        />
      ))}
    </>
  )
}
export default RecipeTabCookingProcess
