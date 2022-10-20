import Layout from "../../components/Layout";
import CardItem from "../../components/CardItem";

import { useState, useEffect } from "react";

import { fetchNewsByKeyword } from "../../utils/index";
import { addNewsByKeyword } from "../../features/news-slice";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

export default () => {
    const dispatch = useDispatch();

    function useQuery() {
        const { search } = useLocation();
        return new URLSearchParams(search, [search]);
    }

    const query = useQuery();
    const keyword = query.get("q");

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNewsByKeyword(keyword);
            setNews(data);
            dispatch(addNewsByKeyword(data));
        }
        fetchData();
    }, [keyword]);

    return (
        <Layout title="Search Result">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-10 mx-44 my-10 justify-center px-20">
                {news.articles?.slice(0, 4).map((news, index) => (
                    <CardItem key={index} news={news} />
                ))}
            </div>
            {/*TODO: Menambahkan item ketika search result tidak ada */}
        </Layout>
    );
};