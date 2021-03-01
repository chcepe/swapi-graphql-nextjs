import React, { FC, useState } from "react";
import { useRouter } from "next/router";

import { useAllFilmsQuery } from "@codegen";
import FilterBar from "@components/FilterBar";
import Loading from "@components/Loading";
import Redirect from "@lib/redirect";
import { List, Sort } from "@utils/types";
import FilmItem from "@components/FilmItem";
import { sortList } from "@utils/formatters";

import * as S from "./styles";
import { imdbLinks } from "./helpers";

const Films: FC = () => {
  const [search, setSearch] = useState("");
  const { query } = useRouter();
  const { sort } = query;

  const { data, loading, error } = useAllFilmsQuery();

  if (error) return <Redirect to="/" />;

  const films: List[] = (data?.allFilms?.films ?? []).map((film) => ({
    id: film?.id ?? "",
    name: film?.title ?? "",
  }));
  const list = sortList(films, sort as Sort, search);

  const hasNoSearchResult = search.length > 0 && !list.length;

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
          {hasNoSearchResult && (
            <small>
              No result for "<strong>{search}</strong>".
            </small>
          )}
          <S.List>
            {list.map(({ id, name }) => {
              const imdbLink = imdbLinks[id as keyof typeof imdbLinks];
              return <FilmItem key={id} id={id} name={name} link={imdbLink} />;
            })}
          </S.List>
        </>
      )}
    </S.Wrapper>
  );
};

export default Films;
