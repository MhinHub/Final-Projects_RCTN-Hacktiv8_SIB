import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { fetchNewsProgramming } from "../../utils/index";
import { addNewsProgramming } from "../../features/news-slice";

export default () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function fetchData() {
            const data = await fetchNewsProgramming();
            dispatch(addNewsProgramming(data));
        }
        fetchData();
    }, []);
    return (
        <Layout title="Topic | Programming">
            <Tab />
            <MainContent category="Programming" />
        </Layout>
    );
}