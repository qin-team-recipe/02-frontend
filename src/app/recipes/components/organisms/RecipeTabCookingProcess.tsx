import RecipeTabCard from "./RecipeTabCard"

type RecipeTabProcessProps = {
  id: string
}

type RecipeCookingProcessType = {
  title: string
  description?: string
  stepNumber: number
}

/**
 * レシピ工程データ取得
 * @param id
 * @returns
 */
const getRecipeProcessData = async (
  id: string
): Promise<RecipeCookingProcessType[]> => {
  console.log("レシピ工程データ取得 id=" + id)

  // const response = await fetch(
  //   `http://localhost:3000/api/recipes/${id}/process`,
  //   {
  //     //next: { revalidate: 10 },
  //     cache: "no-store",
  //   }
  // );
  // const data = await response.json();
  // console.log("レシピ工程データ取得結果 data=" + JSON.stringify(data));
  // return data;

  // ダミーデータ
  return [
    {
      title:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
      description:
        "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      stepNumber: 1,
    },
    {
      title:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
      description:
        "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      stepNumber: 2,
    },
    {
      title:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
      description:
        "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      stepNumber: 3,
    },
    {
      title:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
      description:
        "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      stepNumber: 4,
    },
    {
      title:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
      description:
        "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      stepNumber: 5,
    },
    {
      title:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
      description:
        "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      stepNumber: 6,
    },
  ]
}

/**
 * レシピタブ工程コンテンツ
 * @param props
 * @returns
 */
const RecipeTabCookingProcess = async (props: RecipeTabProcessProps) => {
  const { id } = props
  const process = await getRecipeProcessData(id)

  return (
    <>
      {/* 工程リスト */}
      {process.map((item, i) => (
        <RecipeTabCard
          key={i}
          number={item.stepNumber}
          mainMessage={item.title}
          subMessage={item.description}
        />
      ))}
    </>
  )
}
export default RecipeTabCookingProcess
