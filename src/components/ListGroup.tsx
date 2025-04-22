import { useState } from "react";

const ListGroup = () => {
  const genres = ["Isekai", "Thriller", "Comedy", "Romance"];

  const [selected, setSelected] = useState(-1);

  return (
    <ul className="bg-slate-800 p-2 text-white">
      {genres.map((genre: string, index: number) => (
        <li
          className={
            index === selected ? "bg-slate-900 p-2 rounded transition-colors" : "p-2 rounded"
          }
          onClick={() => {
            setSelected(index);
          }}
          key={genre}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
