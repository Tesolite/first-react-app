import Header from "./components/Header";
import ListGroup from "./components/ListGroup";
import "./App.css";
import GenreInfo from "./components/GenreInfo";
import TopThree from "./components/TopAnime";
import HeadingComponent from "./components/HeadingComponent";

function App() {
  return (
    <>
      <Header name="Joe" age={25} />
      <ListGroup />
      <GenreInfo />
      <HeadingComponent heading={"Top Anime"} />
      <TopThree url={"https://api.jikan.moe/v4/top/anime?type=tv"} />
    </>
  );
}

export default App;
