import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { fetchNewsSports } from "../../utils/index";
import { addNewsSports } from "../../features/news-slice";

export default () => {
    return (
        <Layout title="Topic | Sports">
            <Tab />
            <MainContent 
                category="Sports"
                fetchNews={fetchNewsSports}
                addNews={addNewsSports}
            />
        </Layout>
    );
}