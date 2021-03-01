import Layout from "@components/Layout";
import Planets from "@containers/Planets";
import routes from "@utils/routes";

const PlanetsPage = () => {
  return (
    <Layout title={routes.PLANETS.title}>
      <Planets />
    </Layout>
  );
};

export default PlanetsPage;
