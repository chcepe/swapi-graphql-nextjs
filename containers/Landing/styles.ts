import { color, padding, margin } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  small {
    margin: ${margin.xl} 0;
    font-size: 10px;
    color: ${color.lightGrey};
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Highlight = styled.div`
  background: ${color.starwars};
  color: ${color.black};
  padding: ${padding.sm};
  margin: 0 ${margin.md};
`;

export const SwapiDevLogo = styled.img.attrs({
  src: "/images/swapi-dev.svg",
})`
  height: 50px;
`;

export const Footer = styled.div`
  padding-top: ${padding.xl};
  margin-top: ${margin.xxl};
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${color.starwars};
  }
`;
