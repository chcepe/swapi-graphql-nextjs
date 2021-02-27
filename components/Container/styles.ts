import { breakpoint } from "@theme";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  @${breakpoint.mobile} {
    padding: 0 20px;
  }
`;
