import { color, padding } from "@theme";
import styled from "styled-components";

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
    color: ${color.black};
    background: ${color.starwars};
  }
`;
