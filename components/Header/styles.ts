import { color, padding } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${padding.lg} 0;
  width: 100%;
`;

export const Logo = styled.img.attrs({
  src: "/images/star-wars-logo.png",
})`
  height: 70px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

export const NavItem = styled.div`
  cursor: pointer;
  padding: 15px 30px;
  color: ${color.white};
  text-transform: uppercase;
  text-align: center;
  position: relative;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 3px;
  font-weight: bold;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${color.starwars};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0px;
    width: 100%;
    height: 2px;
    background: ${color.starwars};
    display: block;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
  }

  &:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`;
