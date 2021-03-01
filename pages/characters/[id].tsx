import { useRouter } from "next/router";

import Layout from "@components/Layout";
import SingleCharacter from "@containers/SingleCharacter";
import { useSinglePeopleQuery } from "@codegen";
import Loading from "@components/Loading";
import Redirect from "@lib/redirect";

const SingleCharacterPage = () => {
  const { query } = useRouter();
  const { id: id = "" } = query;

  const { data, loading, error } = useSinglePeopleQuery({
    variables: {
      id: String(id),
    },
  });

  if (error) return <Redirect to="/" />;

  return (
    <Layout title={data?.person?.name ?? ""}>
      {loading && <Loading />}
      {data && <SingleCharacter person={data?.person} />}
    </Layout>
  );
};

export default SingleCharacterPage;
