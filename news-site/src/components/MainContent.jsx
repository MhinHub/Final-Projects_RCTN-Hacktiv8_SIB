// components
import CardItem from "./CardItem";

// redux
// import { useSelector } from "react-redux";  //? useEffect, useState alternative

import { useEffect, useState } from 'react'

export default ({ fetchItem }) => {
  let [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setNews(await fetchItem);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-10 mx-44 mt-10 justify-center px-20">
        {news.articles?.slice(1, 16).map((news, index) => (
          <CardItem key={index} news={news} />
        ))}
      </div>
    </>
  );
}

