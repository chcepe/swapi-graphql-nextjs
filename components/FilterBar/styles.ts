import { breakpoint, color, margin, padding } from "@theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${margin.xl};
  padding-bottom: ${padding.lg};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const InputContainer = styled.div`
  width: 400px;
  position: relative;
  @${breakpoint.mobile} {
    width: 100%;
  }
`;

export const IcSearch = styled.div`
  background: url("/icons/search.svg") no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.2;

  @${breakpoint.mobile} {
    width: 15px;
    height: 15px;
    right: 0;
  }
`;

export const Input = styled.input`
  background: none;
  padding: ${padding.lg} 0;
  padding-right: 40px;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: ${color.white};
  transition: all 0.1s ease-in;
  width: 100%;

  &:focus {
    border-bottom: 2px solid ${color.starwars};
  }

  &:focus ~ ${IcSearch} {
    opacity: 1;
  }

  @${breakpoint.mobile} {
    padding: ${padding.md} 0;
    padding-right: 30px;
  }
`;

export const SortingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: ${margin.xl};
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
