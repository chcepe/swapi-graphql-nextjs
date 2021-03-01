import styled from "styled-components";

import * as T from "./types";

export const Name = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.2s ease-in;
  text-shadow: 2px 2px 10px #000;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Planet = styled.div<Omit<T.Props, "name">>(
  ({ id, onClick, autoPlay, withHover }) => `
  // https://w3bits.com/css-earth/
  width: 300px;
  height: 300px;
  transform: scale(0.9);
  ${onClick && "cursor: pointer;"}

  transition: transform 200ms linear;
  animation: rotate 4s linear infinite;
  ${!autoPlay && "animation-play-state: paused;"};

  border-radius: 50%;
  background: url('/starwars/planets/${id}-min.jpg') 0 0 repeat;
  background-size: cover;
  box-shadow: inset 20px 0 80px 6px rgba(0, 0, 0, 1);

  transform-style: preserve-3d;


  ${
    withHover
      ? `
    &:hover{
      transform: scale(1);
      ${!autoPlay && "animation-play-state: running;"};
    }

    &:hover ${Name} {
      opacity: 1;
    }
  `
      : ""
  }


  &:after {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: "";

    border-radius: 50%;
    box-shadow: -80px 15px 80px 10px rgba(0, 0, 0, 0.9) inset;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: "";

    opacity: 0.2;
    border-radius: 50%;
    background: radial-gradient(circle at 100px 100px, #fff, #000);
  }

  @keyframes rotate {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 630px 0;
    }
  }
`
);
