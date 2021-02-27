import Layout from "@components/Layout";
import Characters from "@containers/Characters";
import routes from "@utils/routes";

const CharactersPage = () => {
  return (
    <Layout title={routes.CHARACTERS.title}>
      <Characters />
    </Layout>
  );
};

export default CharactersPage;
