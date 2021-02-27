import { color, padding, margin } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
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

export const TechLogo = styled.img.attrs({
  src: "/images/tech.svg",
})`
  height: 80px;
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

export const Main = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
`;

export const BackgroundVideo = styled.iframe`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 0;
  transform: scale(1.5);
`;
