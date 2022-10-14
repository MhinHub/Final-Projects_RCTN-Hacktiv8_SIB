import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { fetchNewsTechnology } from "../../utils/index";
import { addNewsTechnology } from "../../features/news-slice";

export default () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function fetchData() {
            const data = await fetchNewsTechnology();
            dispatch(addNewsTechnology(data));
        }
        fetchData();
    }, []);
    return (
        <Layout title="Topic | Technology">
            <Tab />
            <MainContent category="Technology" />
        </Layout>
    );
}