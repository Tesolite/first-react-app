import Header from "./components/Header";
import ListGroup from "./components/ListGroup";
import "./App.css";
import GenreInfo from "./components/GenreInfo";
import TopThree from "./components/TopAnime";

function App() {
  return (
    <>
      <Header name="Joe" age={25} />
      <ListGroup />
      <GenreInfo />
      <TopThree url={"https://api.jikan.moe/v4/top/anime?type=tv"} />
    </>
  );
}

export default App;
