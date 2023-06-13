import Container from "./components/container"
import SearchBar from "./components/searchBar"
import Sidebar from "./components/sidebar"
import TopCheifCard from "./components/topCheifCard"
type CardProps = {
  image: string
  title: string
}

const dummyData: CardProps[] = [
  { image: "path/to/image1.png", title: "Title 1" },
  { image: "path/to/image2.png", title: "Title 2" },
  { image: "path/to/image3.png", title: "Title 3" },
  { image: "path/to/image4.png", title: "Title 4" },
  { image: "path/to/image5.png", title: "Title 5" },
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
          <TopCheifCard data={dummyData} />
          一番下はフッターです
        </Container>
      </div>
    </>
  )
}
