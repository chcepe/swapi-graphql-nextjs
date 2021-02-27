import "../theme/global.css";

import { AppPropsType } from "next/dist/next-server/lib/utils";

const MyApp = ({ Component, pageProps }: AppPropsType) => (
  <>
    <Component {...pageProps} />
  </>
);

export default MyApp;
