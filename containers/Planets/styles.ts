import { breakpoint, margin } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${margin.xxl};
  @${breakpoint.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
