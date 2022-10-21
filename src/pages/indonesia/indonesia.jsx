import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { fetchNewsIndonesia } from "../../utils/index";
import { addNewsIndonesia } from "../../features/news-slice";

export default () => {
    return (
        <Layout title="Topic | Indonesia">
            <Tab />
            <MainContent
                category="Indonesia"
                fetchNews={fetchNewsIndonesia}
                addNews={addNewsIndonesia}
            />
        </Layout>
    );
}
