import Layout from "@components/Layout";
import Landing from "@containers/Landing";
import routes from "@utils/routes";

const IndexPage = () => (
  <Layout title={routes.LANDING.title}>
    <Landing />
  </Layout>
);

export default IndexPage;
