import { breakpoint, color, margin, padding } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;

  @${breakpoint.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    @${breakpoint.mobile} {
      margin-top: ${margin.xl};
    }
  }
`;

export const Info = styled.div`
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 200px;

  @${breakpoint.mobile} {
    align-items: center;
    padding-top: 100px;
  }
`;

export const Name = styled.span`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 20%,
    rgba(0, 0, 0, 0) 100%
  );
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
  border-bottom: 3px solid ${color.starwars};
  color: ${color.starwars};
  padding: ${padding.lg};
`;

export const TableInfo = styled.table`
  letter-spacing: 2px;

  td:nth-child(1) {
    font-size: 10px;
    padding: ${padding.sm} ${padding.md};
    color: ${color.white};
    text-align: right;
    text-transform: uppercase;
    font-weight: bold;
  }

  td:nth-child(2) {
    font-size: 12px;
    padding: ${padding.sm} ${padding.lg};
    text-align: center;
    color: ${color.black};
    background: ${color.starwars};
  }
`;
