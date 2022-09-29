import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";

import { fetchNewsByKeyword } from "../../utils/index";

export default () => {
    return (
        <Layout title="Topic | Programming">
            <MainContent fetchItem={fetchNewsByKeyword()} />
        </Layout>
    );
}