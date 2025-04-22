import Header from "./components/Header";
import ListGroup from "./components/ListGroup";
import "./App.css";
import GenreInfo from "./components/GenreInfo";

function App() {
  return (
    <>
      <Header name="Joe" age={25} />
      <ListGroup />
      <GenreInfo />
    </>
  );
}

export default App;
