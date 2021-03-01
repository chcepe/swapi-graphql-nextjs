import { breakpoint } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  &,
  *:hover {
    text-decoration: none;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @${breakpoint.mobile} {
    grid-template-columns: 1fr;
  }
`;
