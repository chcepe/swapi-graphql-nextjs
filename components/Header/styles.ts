import { breakpoint, color } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div<{ modal?: boolean }>(
  ({ modal }) => `
  transition: all 0.05s ease-in;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background:  ${
    modal
      ? `rgba(0,0,0,0.9)`
      : `linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 1) 100%
  )`
  };
  background-size: cover;
  display: grid;
  grid-template-rows: 100px 1fr;

  @${breakpoint.mobile}{
    height: ${modal ? "100%" : "100px"};
  }

`
);

export const Logo = styled.div<{ active?: boolean }>(
  ({ active }) => `
  background: url("/images/star-wars-logo-${
    active ? "active" : "light"
  }.png") no-repeat;
  background-size: contain;
  width: 165px;
  height: 70px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s ease-in;

  &:hover {
    background: url("/images/star-wars-logo-hover.png") no-repeat;
    background-size: contain;
  }
`
);

export const Main = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  height: 100%;

  @${breakpoint.mobile} {
    display: flex;
    justify-content: space-between;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  @${breakpoint.mobile} {
    display: none;
  }
`;

export const MobileNavigation = styled.div`
  display: none;
  @${breakpoint.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Hamburger = styled.div<{ active?: boolean }>(
  ({ active }) =>
    `background: url("/icons/menu${active ? `-x` : ""}.svg") no-repeat;
  background-size: contain;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: none;
  @${breakpoint.mobile} {
    display: block;
  }
`
);

export const MenuModal = styled.div<{ visible: boolean }>(
  ({ visible }) => `
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${visible ? "visible" : "hidden"};
  z-index: 10;
`
);

export const NavItem = styled.div<{ active?: boolean }>(
  ({ active }) => `
  cursor: pointer;
  padding: 15px 30px;
  color: ${active ? color.starwars : color.white};
  text-transform: uppercase;
  text-align: center;
  position: relative;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 3px;
  font-weight: bold;
  transition: all 0.2s ease-in;

  ${
    !active &&
    `
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
    transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
  }

  &:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }`
  }
`
);
