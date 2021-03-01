import React, { FC } from "react";
import { useRouter } from "next/router";

import { SinglePeopleQuery } from "@codegen";
import Container from "@components/Container";
import TableInfo from "@components/TableInfo";
import Tag from "@components/Tag";
import routes from "@utils/routes";

import * as S from "./styles";

const SingleCharacter: FC<SinglePeopleQuery> = ({ person }) => {
  const { push } = useRouter();
  const randomBG = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  const info = [
    { label: "Eye color", value: person?.eyeColor },
    { label: "Gender", value: person?.gender },
    { label: "Height", value: `${person?.height}cm` },
    { label: "Mass", value: `${person?.mass}kg` },
    { label: "Skin", value: person?.skinColor },
  ];

  return (
    <>
      <style jsx global>{`
        body {
          background: url("/images/bg-${randomBG}.jpg") no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
      `}</style>
      <S.Wrapper>
        <Container>
          <S.Content>
            <S.Info>
              <S.Name>{person?.name}</S.Name>
              <TableInfo>
                <tbody>
                  {info.map(({ label, value }) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </TableInfo>
              <Tag
                onClick={() =>
                  push(routes.PLANETS.route + "/" + person?.homeworld?.id)
                }
                type="ghost"
              >
                {person?.homeworld?.name}
              </Tag>
            </S.Info>
            <S.PhotoContainer>
              <img src={`/starwars/characters/${person?.id}-min.png`} />
            </S.PhotoContainer>
          </S.Content>
        </Container>
      </S.Wrapper>
    </>
  );
};

export default SingleCharacter;
