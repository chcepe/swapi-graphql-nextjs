import { color, margin, padding, breakpoint } from "@theme";
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

export const Item = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.8;
  filter: grayscale(100%);

  span {
    font-size: 20px;
  }

  &,
  * {
    transition: all 0.2s ease-out;
  }

  .avatar {
    transform: scale(4);
    transform-origin: top;
    height: 100%;
    position: absolute;
    top: -20px;
    left: 20px;
  }
  .bg {
    opacity: 0.2;
    filter: blur(0.5px);
    transform: scale(5) rotate(45deg);
  }

  &:hover {
    opacity: 1;
    background: ${color.starwars};
    border: 1px solid ${color.starwars};
    filter: none;

    span {
      margin-top: 50px;
      color: ${color.starwars};
    }
  }

  &:hover .avatar {
    transform: scale(2);
  }

  &:hover .bg {
    transform: rotate(0deg);
    transform: scale(3);
  }
`;

export const Info = styled.div`
  background: linear-gradient(
    63deg,
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.8) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${padding.lg};
`;
