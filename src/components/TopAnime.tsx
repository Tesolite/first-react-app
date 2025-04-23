import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const TopThree = (props: { url: string }) => {
  type AnimeCardInfo = {
    image: string;
    name: string;
    rating: string;
  };

  const [data, setData] = useState<AnimeCardInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = props.url;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("ERROR FETCHING URL");
        }
        const json = await response.json();
        json.data.forEach((datum) => {
          setData((data) => [
            ...data,
            { image: datum.images.webp.image_url, name: datum.title, rating: datum.score },
          ]);
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(data.length);
  return loading ? (
    <p className="text-white p-4">Loading....</p>
  ) : !data ? (
    <p className="text-white p-4">Cannot reach database.</p>
  ) : (
    <div className="grid span-col gap-y-2 m-2 grid-cols-4 auto-cols-max gap-2 place-items-center">
      {data.map((datum) => (
        <AnimeCard image={datum.image} name={datum.name} rating={datum.rating}></AnimeCard>
      ))}
    </div>
  );
};

export default TopThree;
