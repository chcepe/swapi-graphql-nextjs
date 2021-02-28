import Layout from "@components/Layout";
import Films from "@containers/Films";
import routes from "@utils/routes";

const FilmsPage = () => {
  return (
    <Layout title={routes.FILMS.title}>
      <Films />
    </Layout>
  );
};

export default FilmsPage;
