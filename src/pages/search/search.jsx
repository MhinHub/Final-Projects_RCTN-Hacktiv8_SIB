import { fetchNewsByKeyword } from "../../utils/index";
import { useDispatch } from "react-redux";
import { addNewsByKeyword } from "../../features/news-slice";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import CardItem from "../../components/CardItem";

export default function Search({ newsByKeyword }) {
    const dispatch = useDispatch();
    dispatch(addNewsByKeyword(newsByKeyword));

    let [news, setNews] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setNews(await fetchNewsByKeyword());
        }
        fetchData();
    }, []);

    return (
        <Layout title="News | Search Result">
            {news.articles?.map((news, index) => (
                <CardItem key={index} news={news} />
            ))}
        </Layout>
    );
}