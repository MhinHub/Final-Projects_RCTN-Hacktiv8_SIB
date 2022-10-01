import MainContent from "../../components/MainContent";
import Layout from "../../components/Layout";

import { fetchNewsIndonesia } from "../../utils/index";


export default () => {
    return (
        <Layout title="Topic | Indonesia">
            <MainContent fetchItem={fetchNewsIndonesia()} />
        </Layout>
    );
}
