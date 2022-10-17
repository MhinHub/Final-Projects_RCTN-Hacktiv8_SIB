import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { fetchNewsIndonesia } from "../../utils/index";
import { addNewsIndonesia } from "../../features/news-slice";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

export default () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            const data = await fetchNewsIndonesia();
            dispatch(addNewsIndonesia(data));
        }
        fetchData();
    }, []);

    return (
        <Layout title="Topic | Indonesia">
            <Tab />
            <MainContent category="Indonesia" />
        </Layout>
    );
}
