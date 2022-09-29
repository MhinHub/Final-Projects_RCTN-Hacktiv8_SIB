import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";

import { fetchNewsProgramming } from "../../utils/index";

export default () => {
    return (
        <Layout title="Topic | Programming">
            <MainContent fetchItem={fetchNewsProgramming()} />
        </Layout>
    );
}