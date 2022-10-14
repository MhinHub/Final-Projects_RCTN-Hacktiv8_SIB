import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { fetchNewsCovid19 } from "../../utils/index";
import { addNewsCovid19 } from "../../features/news-slice";

export default () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function fetchData() {
            const data = await fetchNewsCovid19();
            dispatch(addNewsCovid19(data));
        }
        fetchData();
    }, []);
    return (
        <Layout title="Topic | Covid 19">
            <Tab />
            <MainContent category="Covid 19" />
        </Layout>
    );
}