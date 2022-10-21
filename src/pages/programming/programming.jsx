import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { fetchNewsProgramming } from "../../utils/index";
import { addNewsProgramming } from "../../features/news-slice";

export default () => {
    return (
        <Layout title="Topic | Programming">
            <Tab />
            <MainContent
                category="Programming"
                fetchNews={fetchNewsProgramming}
                addNews={addNewsProgramming}
            />
        </Layout>
    );
}