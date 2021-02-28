import { useRouter } from "next/router";

import Layout from "@components/Layout";
import SingleCharacter from "@containers/SingleCharacter";
import routes from "@utils/routes";
import { useSinglePeopleQuery } from "@codegen";
import Loading from "@components/Loading";
import Redirect from "@lib/redirect";

const CharacterPage = () => {
  const { query } = useRouter();
  const { id: id = "" } = query;

  const { data, loading, error } = useSinglePeopleQuery({
    variables: {
      id: String(id),
    },
  });

  if (error) return <Redirect to="/" />;

  return (
    <Layout title={routes.CHARACTERS.title}>
      {loading && <Loading />}
      {data && <SingleCharacter person={data?.person} />}
    </Layout>
  );
};

export default CharacterPage;
