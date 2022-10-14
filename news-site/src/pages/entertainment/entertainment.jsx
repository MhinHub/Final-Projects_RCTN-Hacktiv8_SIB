import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { fetchNewsEntertainment } from "../../utils/index";
import { addNewsEntertainment } from "../../features/news-slice";

export default () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function fetchData() {
            const data = await fetchNewsEntertainment();
            dispatch(addNewsEntertainment(data));
        }
        fetchData();
    }, []);
    return (
        <Layout title="Topic | Entertainment">
            <Tab />
            <MainContent category="Entertainment" />
        </Layout>
    );
}