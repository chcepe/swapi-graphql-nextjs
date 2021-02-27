import { ApolloProvider } from "@apollo/react-hooks";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import { client } from "@utils/apollo";

import "../theme/global.css";

const MyApp = ({ Component, pageProps }: AppPropsType) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
