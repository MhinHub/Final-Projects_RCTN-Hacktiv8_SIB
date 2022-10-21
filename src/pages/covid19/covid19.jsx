import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";
import Tab from "../../components/Tab";

import { fetchNewsCovid19 } from "../../utils/index";
import { addNewsCovid19 } from "../../features/news-slice";

export default () => {
    return (
        <Layout title="Topic | Covid 19">
            <Tab />
            <MainContent
                category="Covid 19"
                fetchNews={fetchNewsCovid19}
                addNews={addNewsCovid19}
            />
        </Layout>
    );
}