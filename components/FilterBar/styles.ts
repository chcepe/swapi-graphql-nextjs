import { color, margin, padding } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${margin.xl};
`;

export const InputContainer = styled.div`
  position: relative;
  min-width: 400px;
`;

export const IcSearch = styled.div`
  background: url("/icons/search.svg") no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.2;
`;

export const Input = styled.input`
  background: none;
  padding: ${padding.lg};
  padding-right: 60px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: ${color.white};
  transition: all 0.2s ease-in;
  width: 100%;

  &:focus {
    border: 2px solid ${color.starwars};
  }

  &:focus ~ ${IcSearch} {
    opacity: 1;
  }
`;

export const SortingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SortBtn = styled.span<{ active?: boolean; sort: "asc" | "des" }>(
  ({ sort, active }) => `
  cursor: pointer;
  background-color: ${active ? color.starwars : color.white};
  -webkit-mask-image: url('/icons/sort-${sort}.svg');
  mask-image: url('/icons/sort-${sort}.svg');
  background-size: contain;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`
);
