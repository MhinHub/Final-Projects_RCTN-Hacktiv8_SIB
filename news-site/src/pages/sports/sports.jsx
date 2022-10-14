import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { fetchNewsSports } from "../../utils/index";
import { addNewsSports } from "../../features/news-slice";

export default () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function fetchData() {
            const data = await fetchNewsSports();
            dispatch(addNewsSports(data));
        }
        fetchData();
    }, []);
    return (
        <Layout title="Topic | Sports">
            <Tab />
            <MainContent category="Sports" />
        </Layout>
    );
}