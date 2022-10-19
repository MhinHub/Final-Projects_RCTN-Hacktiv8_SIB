// components
import CardItem from "./CardItem";

import { useSelector } from "react-redux";

export default ({ category }) => {
  const news = useSelector((state) => {
    if (category === "Indonesia") return state.news.data.indonesia;
    if (category === "Programming") return state.news.data.programming;
    if (category === "Covid 19") return state.news.data.covid19;
    if (category === "Entertainment") return state.news.data.entertainment;
    if (category === "Sports") return state.news.data.sports;
    if (category === "Technology") return state.news.data.technology;
  });

  return (
    <>
      <main className="main-content">
        {news?.articles?.slice(0, 4).map((news, index) => (
          <CardItem key={index} news={news} />
        ))}
      </main>
    </>
  );
};
