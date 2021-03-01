import { margin, breakpoint } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${margin.xl};
  @${breakpoint.mobile} {
    grid-template-columns: 1fr;
  }
`;
