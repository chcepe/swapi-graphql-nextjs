import { color, padding } from "@theme";
import styled from "styled-components";

export const Tag = styled.span<{ type?: "primary" | "ghost" }>(
  ({ type = "primary", onClick }) => `
    background: ${type === "primary" ? color.starwars : color.transparent};
    padding: ${padding.sm} ${padding.md};
    color: ${type === "primary" ? color.black : color.starwars};
    ${type === "ghost" ? `border: 1px solid ${color.starwars};` : ""}
    border-radius: 10px;
    margin: 5px;
    font-size: 12px;

    ${
      onClick &&
      `
      cursor: pointer;
      &:hover{
        opacity: 0.9;
      }
    `
    }
`
);
