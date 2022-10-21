import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { fetchNewsTechnology } from "../../utils/index";
import { addNewsTechnology } from "../../features/news-slice";

export default () => {
    return (
        <Layout title="Topic | Technology">
            <Tab />
            <MainContent
                category="Technology"
                fetchNews={fetchNewsTechnology}
                addNews={addNewsTechnology}
            />
        </Layout>
    );
}