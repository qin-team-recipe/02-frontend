import { Suspense, useState } from "react"

import { ChefSocial } from "@/app/shef/[id]/components/org/cfefSocial"
import { ChefOutLine } from "@/app/shef/[id]/components/org/ChefOutline"
import { ChefRecipeList } from "@/app/shef/[id]/components/org/chefRecipeList"
import ChefTabs from "@/app/shef/[id]/components/org/tsb"

const Page = () => {
  const ChefData = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {}
  }

  return (
    <div className="">
      <h1>Shef Page</h1>
      <ChefOutLine />

      <Suspense>
        <ChefTabs>
          <ChefRecipeList recipeData={data.social} />
          <ChefSocial link={data.social} />
        </ChefTabs>
      </Suspense>
    </div>
  )
}

export default Page
