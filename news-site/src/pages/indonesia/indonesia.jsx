import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";

import { fetchNewsIndonesia } from "../../utils/index";

import { useDispatch } from "react-redux";
import { addNewsIndonesia } from "../../features/news-slice";


export default () => {
    return (
        <Layout title="Topic | Indonesia">
            <MainContent fetchItem={fetchNewsIndonesia()} />
        </Layout>
    );
}
