import React, { FC, useState } from "react";
import { useRouter } from "next/router";

import { useAllPeopleQuery } from "@codegen";

import Loading from "@components/Loading";
import FilterBar from "@components/FilterBar";
import Redirect from "@lib/redirect";
import { sortList } from "@utils/formatters";
import { List, Sort } from "@utils/types";
import CharacterItem from "@components/CharacterItem";

import * as S from "./styles";

const Characters: FC = () => {
  const [search, setSearch] = useState("");
  const { query } = useRouter();
  const { sort } = query;

  const { data, loading, error } = useAllPeopleQuery();
  if (error) return <Redirect to="/" />;

  const characters: List[] = (data?.allPeople?.people ?? []).map((people) => ({
    id: people?.id ?? "",
    name: people?.name ?? "",
  }));
  const list = sortList(characters, sort as Sort, search);

  const hasNoSearchResult = search.length > 0 && !list.length;

  return (
    <S.Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FilterBar
            placeholder="Search character"
            value={search}
            onSearch={(value) => setSearch(value)}
          />
          {hasNoSearchResult && (
            <small>
              No result for "<strong>{search}</strong>".
            </small>
          )}
          <S.List>
            {list.map(({ id, name }) => (
              <CharacterItem key={id} id={id} name={name} />
            ))}
          </S.List>
        </>
      )}
    </S.Wrapper>
  );
};

export default Characters;
