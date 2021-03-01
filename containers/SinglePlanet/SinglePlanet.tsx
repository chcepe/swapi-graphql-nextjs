import React, { FC } from "react";

import { SinglePlanetQuery } from "@codegen";
import TableInfo from "@components/TableInfo";
import Planet from "@components/Planet";
import Tag from "@components/Tag";

import * as S from "./styles";

const SinglePlanet: FC<SinglePlanetQuery> = ({ planet }) => {
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
        <tbody>
          {info.map(({ label, value }) => {
            if (value)
              return (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              );
          })}
        </tbody>
      </TableInfo>
      <S.Labels>
        <S.Circle /> <span>Climates</span>
        <S.Circle filled /> <span>Terrains</span>
      </S.Labels>
      <S.Tags>
        {planet?.climates?.map((climate, i) => (
          <Tag type="ghost" key={`climate-${i}`}>
            {climate}
          </Tag>
        ))}
        {planet?.terrains?.map((terrain, i) => (
          <Tag key={`terrain-${i}`}>{terrain}</Tag>
        ))}
      </S.Tags>
    </S.Wrapper>
  );
};

export default SinglePlanet;
