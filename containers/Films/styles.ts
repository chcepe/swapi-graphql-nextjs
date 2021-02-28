import { breakpoint, color, margin, padding } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  &,
  *:hover {
    text-decoration: none;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @${breakpoint.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div<{ src: string }>(
  ({ src }) => `
    background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)),
    url("${src}") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    padding: ${padding.xl};
    position: relative;
    height: 300px;
  
    &, *{
        transition: all 0.2s ease-in;
    }

    &:hover img{
        transform: scale(0.95);
        border: 1px solid ${color.starwars};
    }

    &:hover span{
        color: ${color.starwars};
    }
`
);

export const Background = styled.div<{ src: string }>(
  ({ src }) => `
  background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)),
    url("${src}") no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
);

export const Thumbnail = styled.img`
  height: 100%;
  object-fit: contain;
  transition: all 0.2s ease-in;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.span`
  margin-top: ${margin.xl};
  color: ${color.white};
`;
