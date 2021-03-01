import { color, margin, padding } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 20px;
  border-bottom: 2px solid ${color.starwars};
  color: ${color.white};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${margin.xxl};
  padding: ${padding.lg} ${padding.xl};
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div<{ filled?: boolean }>(
  ({ filled }) => `
  background: ${filled ? color.starwars : color.transparent};
  border: 1px solid ${color.starwars};
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin: 0 ${margin.lg};
`
);

export const Labels = styled.div`
  margin: ${margin.xl} 0;
  display: flex;
  align-items: center;
`;
