import React, { FC, useState } from "react";
import { useRouter } from "next/router";

import { useAllPlanetsQuery } from "@codegen";
import Redirect from "@lib/redirect";
import Loading from "@components/Loading";
import FilterBar from "@components/FilterBar";
import { List, Sort } from "@utils/types";
import { sortList } from "@utils/formatters";
import Planet from "@components/Planet";

import * as S from "./styles";
import routes from "@utils/routes";

const Planets: FC = () => {
  const [search, setSearch] = useState("");
  const { query, push } = useRouter();
  const { sort } = query;

  const { data, loading, error } = useAllPlanetsQuery();
  if (error) return <Redirect to="/" />;

  const characters: List[] = (data?.allPlanets?.planets ?? []).map(
    (planet) => ({
      id: planet?.id ?? "",
      name: planet?.name ?? "",
    })
  );
  const list = sortList(characters, sort as Sort, search);

  const hasNoSearchResult = search.length > 0 && !list.length;

  return (
    <S.Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FilterBar
            placeholder="Search planet"
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
              <S.Item key={id}>
                <Planet
                  withHover
                  name={name}
                  onClick={() => push(routes.PLANETS.route + "/" + id)}
                  id={id}
                />
              </S.Item>
            ))}
          </S.List>
        </>
      )}
    </S.Wrapper>
  );
};

export default Planets;
