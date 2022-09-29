import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";

import { fetchNewsCovid19 } from "../../utils/index";

export default () => {
    return (
        <Layout title="Topic | Programming">
            <MainContent fetchItem={fetchNewsCovid19()} />
        </Layout>
    );
}