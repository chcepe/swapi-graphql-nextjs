import Layout from "@components/Layout";
import Landing from "@containers/Landing";
import routes from "@utils/routes";

const IndexPage = () => (
  <Layout bg="video" title={routes.LANDING.title}>
    <Landing />
  </Layout>
);

export default IndexPage;
