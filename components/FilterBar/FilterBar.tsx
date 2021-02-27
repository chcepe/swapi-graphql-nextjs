import React, { FC } from "react";
import { useRouter } from "next/router";

import * as T from "./types";
import * as S from "./styles";

const FilterBar: FC<T.Props> = ({ value, placeholder, onSearch }) => {
  const { push, query, pathname } = useRouter();
  const { sort } = query;

  return (
    <S.Wrapper>
      <S.SortingContainer>
        <small>Sort name:</small>
        <S.SortBtn
          active={sort === "asc" || sort === "des"}
          onClick={() =>
            push(pathname + `?sort=${!sort || sort === "des" ? "asc" : "des"}`)
          }
          sort={!sort || sort === "asc" ? "asc" : "des"}
        />
      </S.SortingContainer>
      <S.InputContainer>
        <S.Input
          placeholder={placeholder}
          value={value}
          type="text"
          onChange={(e) => onSearch(e.target.value)}
        />
        <S.IcSearch />
      </S.InputContainer>
    </S.Wrapper>
  );
};

export default FilterBar;
