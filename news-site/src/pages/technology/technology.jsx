import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";

import { fetchNewsTechnology } from "../../utils/index";

export default () => {
    return (
        <Layout title="Topic | Programming">
            <MainContent fetchItem={fetchNewsTechnology()} />
        </Layout>
    );
}