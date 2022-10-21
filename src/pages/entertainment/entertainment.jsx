import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { fetchNewsEntertainment } from "../../utils/index";
import { addNewsEntertainment } from "../../features/news-slice";

export default () => {
    return (
        <Layout title="Topic | Entertainment">
            <Tab />
            <MainContent
                category="Entertainment"
                fetchNews={fetchNewsEntertainment}
                addNews={addNewsEntertainment}
            />
        </Layout>
    );
}