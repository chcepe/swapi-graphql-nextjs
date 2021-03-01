import React, { FC, useState } from "react";
import { useRouter } from "next/router";

import { useAllPeopleQuery } from "@codegen";

import * as T from "./types";
import * as S from "./styles";
import Loading from "@components/Loading";
import FilterBar from "@components/FilterBar";
import routes from "@utils/routes";
import Redirect from "@lib/redirect";
import { sortList } from "@utils/formatters";
import { List, Sort } from "@utils/types";

const Characters: FC<T.Props> = ({}) => {
  const [search, setSearch] = useState("");
  const { query, push } = useRouter();
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
              <S.Item
                onClick={() => push(routes.CHARACTERS.route + "/" + id)}
                key={id}
              >
                <img
                  className="bg"
                  loading="lazy"
                  src={`/starwars/characters/${id}-min.png`}
                />
                <S.Info>
                  <span>{name}</span>
                </S.Info>
                <img
                  className="avatar"
                  loading="lazy"
                  src={`/starwars/characters/${id}-min.png`}
                />
              </S.Item>
            ))}
          </S.List>
        </>
      )}
    </S.Wrapper>
  );
};

export default Characters;
