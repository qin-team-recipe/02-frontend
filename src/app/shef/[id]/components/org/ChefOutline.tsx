import { ChefProps } from "@/app/shef/[id]/components/types"
import { chefData } from "@/app/shef/[id]/components/types/mock"

const getChefData = async (id: number): Promise<ChefProps> => {
  return {
    id: id,
    description: chefData[0].description,
    name: chefData[0].name,
    path: chefData[0].path,
  }
}

export const ChefOutLine = async (props: ChefProps) => {
  const { id } = props

  return <div className="w-full"></div>
}
