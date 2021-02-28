import React, { FC, useState } from "react";
import { useRouter } from "next/router";

import { useAllPeopleQuery } from "@codegen";

import * as T from "./types";
import * as S from "./styles";
import Loading from "@components/Loading";
import FilterBar from "@components/FilterBar";
import routes from "@utils/routes";
import Redirect from "@lib/redirect";

const Characters: FC<T.Props> = ({}) => {
  const [search, setSearch] = useState("");
  const { query, push } = useRouter();
  const { sort } = query;

  const { data, loading, error } = useAllPeopleQuery();
  if (error) return <Redirect to="/" />;

  let characters = (data?.allPeople?.people ?? []).filter((character) =>
    character?.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "asc") {
    characters = characters.sort((a, b) =>
      (a?.name ?? "").localeCompare(b?.name ?? "")
    );
  }
  if (sort === "des") {
    characters = characters.sort((a, b) =>
      (b?.name ?? "").localeCompare(a?.name ?? "")
    );
  }

  return (
    <S.Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FilterBar
            placeholder="Search characters"
            value={search}
            onSearch={(value) => setSearch(value)}
          />
          <S.List>
            {characters.map((character) => (
              <S.Item
                onClick={() =>
                  push(routes.CHARACTERS.route + "/" + character?.id)
                }
                key={character?.id}
              >
                <img
                  className="bg"
                  loading="lazy"
                  src={`/starwars/characters/${character?.id}.png`}
                />
                <S.Info>
                  <span>{character?.name}</span>
                </S.Info>
                <img
                  className="avatar"
                  loading="lazy"
                  src={`/starwars/characters/${character?.id}.png`}
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
