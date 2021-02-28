import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = ({ to }: { to: string }) => {
  const { push } = useRouter();
  useEffect(() => {
    push(to);
  }, []);
  return null;
};

export default Redirect;
