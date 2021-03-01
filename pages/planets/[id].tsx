import { useRouter } from "next/router";

import Layout from "@components/Layout";
import SinglePlanet from "@containers/SinglePlanet";
import { useSinglePlanetQuery } from "@codegen";
import Loading from "@components/Loading";
import Redirect from "@lib/redirect";

const SinglePlanetPage = () => {
  const { query } = useRouter();
  const { id: id = "" } = query;

  const { data, loading, error } = useSinglePlanetQuery({
    variables: {
      id: String(id),
    },
  });

  if (error) return <Redirect to="/" />;

  return (
    <Layout title={data?.planet?.name ?? ""}>
      {loading && <Loading />}
      {data && <SinglePlanet planet={data?.planet} />}
    </Layout>
  );
};

export default SinglePlanetPage;
