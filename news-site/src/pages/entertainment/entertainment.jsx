import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";

import { fetchNewsEntertainment } from "../../utils/index";

export default () => {
    return (
        <Layout title="Topic | Programming">
            <MainContent fetchItem={fetchNewsEntertainment()} />
        </Layout>
    );
}