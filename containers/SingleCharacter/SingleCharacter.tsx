import React, { FC } from "react";

import { SinglePeopleQuery } from "@codegen";

import * as T from "./types";
import * as S from "./styles";
import Container from "@components/Container";

const SingleCharacter: FC<T.Props & SinglePeopleQuery> = ({ person }) => {
  const randomBG = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  const tags = [
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
              <S.TableInfo>
                {tags.map((tag) => (
                  <tr>
                    <td>{tag.label}</td>
                    <td>{tag.value}</td>
                  </tr>
                ))}
              </S.TableInfo>
            </S.Info>
            <S.PhotoContainer>
              <img src={`/starwars/characters/${person?.id}.png`} />
            </S.PhotoContainer>
          </S.Content>
        </Container>
      </S.Wrapper>
    </>
  );
};

export default SingleCharacter;
