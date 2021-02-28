import React, { FC, useState } from "react";
import { useRouter } from "next/router";

import { useAllFilmsQuery } from "@codegen";
import FilterBar from "@components/FilterBar";
import Loading from "@components/Loading";
import Redirect from "@lib/redirect";

import * as T from "./types";
import * as S from "./styles";

const Films: FC<T.Props> = ({}) => {
  const [search, setSearch] = useState("");
  const { query } = useRouter();
  const { sort } = query;

  const { data, loading, error } = useAllFilmsQuery();

  if (error) return <Redirect to="/" />;

  let films = (data?.allFilms?.films ?? []).filter((film) =>
    film?.title?.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "asc") {
    films = films.sort((a, b) =>
      (a?.title ?? "").localeCompare(b?.title ?? "")
    );
  }
  if (sort === "des") {
    films = films.sort((a, b) =>
      (b?.title ?? "").localeCompare(a?.title ?? "")
    );
  }
  return (
    <S.Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FilterBar
            placeholder="Search film"
            value={search}
            onSearch={(value) => setSearch(value)}
          />
          <S.List>
            {films.map((film) => {
              const src = `/starwars/films/${film?.id}.jpg`;
              return (
                <S.Item src={src}>
                  <S.Thumbnail src={src} />
                  <S.Title>{film?.title}</S.Title>
                </S.Item>
              );
            })}
          </S.List>
        </>
      )}
    </S.Wrapper>
  );
};

export default Films;
