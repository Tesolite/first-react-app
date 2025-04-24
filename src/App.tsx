import HeaderComponent from "./components/HeaderComponent";
import ListGroup from "./components/ListGroup";
import "./App.css";
import GenreInfo from "./components/GenreInfo";
import TopThree from "./components/TopAnime";
import HeadingComponent from "./components/HeadingComponent";

function App() {
  return (
    <>
      <HeaderComponent name="Joe" age={25} />
      <ListGroup />
      <GenreInfo />
      <HeadingComponent heading={"Top Rated Anime"} />
      <TopThree url={"https://api.jikan.moe/v4/top/anime?type=tv"} />
    </>
  );
}

export default App;
