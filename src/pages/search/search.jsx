import Layout from "../../components/Layout";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useContext } from "react";

import { fetchNewsByKeyword } from "../../utils/index";
import { addNewsByKeyword } from "../../features/news-slice";


export default () => {
    const searchResult = useSelector((state) => state.news.data.searchResult);
    const dispatch = useDispatch();

    // get keyword from context api
    // const { keyword } = useContext(SearchContext);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchNewsByKeyword();
            dispatch(addNewsByKeyword(data));
        }
        fetchData();
    }, [])


    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await fetchNewsByKeyword(searchResult)
    //         dispatch(addNewsByKeyword(data));
    //     }
    //     fetchData();
    // }, []);

    return (
        <Layout title="Search Result">
            <h1>Search Result</h1>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-10 mx-44 my-10 justify-center px-20">
                {searchResult.articles?.map((news, index) => (
                    <CardItem key={index} news={news} />
                ))}
            </div>
        </Layout>
    );
}