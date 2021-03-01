import React, { FC } from "react";

import { SinglePlanetQuery } from "@codegen";
import TableInfo from "@components/TableInfo";
import Planet from "@components/Planet";

import * as T from "./types";
import * as S from "./styles";
import Tag from "@components/Tag";

const SinglePlanet: FC<T.Props & SinglePlanetQuery> = ({ planet }) => {
  const info = [
    {
      label: "Diameter",
      value: planet?.diameter,
    },
    {
      label: "Rotation Period",
      value: planet?.rotationPeriod,
    },
    {
      label: "Orbital Period",
      value: planet?.orbitalPeriod,
    },
    {
      label: "Gravity",
      value: planet?.gravity,
    },
    {
      label: "Population",
      value: planet?.population,
    },
    {
      label: "Surface Water",
      value: planet?.surfaceWater,
    },
  ];

  return (
    <S.Wrapper>
      <Planet autoPlay name={planet?.name ?? ""} id={planet?.id ?? ""} />
      <S.Name>{planet?.name}</S.Name>

      <TableInfo>
        {info.map(({ label, value }) => {
          if (value)
            return (
              <tr>
                <td>{label}</td>
                <td>{value}</td>
              </tr>
            );
        })}
      </TableInfo>
      <S.Labels>
        <S.Circle /> <span>Climates</span>
        <S.Circle filled /> <span>Terrains</span>
      </S.Labels>
      <S.Tags>
        {planet?.climates?.map((climate) => (
          <Tag type="ghost">{climate}</Tag>
        ))}
        {planet?.terrains?.map((terrain) => (
          <Tag>{terrain}</Tag>
        ))}
      </S.Tags>
    </S.Wrapper>
  );
};

export default SinglePlanet;
