import Header from "./components/Header";
import ListGroup from "./components/ListGroup";
import "./App.css";
import GenreInfo from "./components/GenreInfo";
import AnimeCard from "./components/AnimeCard";

function App() {
  return (
    <>
      <Header name="Joe" age={25} />
      <ListGroup />
      <GenreInfo />
      <AnimeCard
        image={"https://cdn.myanimelist.net/images/anime/1245/116760.webp"}
        name="Gintama: The Final"
        rating="9.04"
      />
    </>
  );
}

export default App;
