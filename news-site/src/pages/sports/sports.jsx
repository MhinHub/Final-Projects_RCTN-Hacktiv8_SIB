import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";

import { fetchNewsSports } from "../../utils/index";

export default () => {
    return (
        <Layout title="Topic | Sports">
            <MainContent fetchItem={fetchNewsSports()} />
        </Layout>
    );
}