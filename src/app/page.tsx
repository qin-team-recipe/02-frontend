import Container from "./components/container"
import SearchBar from "./components/searchBar"
import Sidebar from "./components/sidebar"
import TopChefCard from "./components/topChefCard"
type CardProps = {
  image: string
  title: string
}

const dummyData: CardProps[] = [
  { image: "/toppage/topchef1.jpg", title: "チーム２シェフ" },
  { image: "/toppage/topchef1.jpg", title: "チーム２シェフ" },
  { image: "/toppage/topchef1.jpg", title: "チーム２シェフ" },
  { image: "/toppage/topchef1.jpg", title: "チーム２シェフ" },
  { image: "/toppage/topchef1.jpg", title: "チーム２シェフ" },
]

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Sidebar>
          <div>これはサイドバーです</div>
        </Sidebar>
        <Container>
          <div>これはメインコンテナーです</div>
          <SearchBar />
          <TopChefCard data={dummyData} />
          一番下はフッターです
        </Container>
      </div>
    </>
  )
}
