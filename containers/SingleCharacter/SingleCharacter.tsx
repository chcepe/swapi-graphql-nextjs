import React, { FC } from "react";

import { SinglePeopleQuery } from "@codegen";

import * as T from "./types";
import * as S from "./styles";

const SingleCharacter: FC<T.Props & SinglePeopleQuery> = ({ person }) => {
  const randomBG = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  return (
    <>
      <style jsx global>{`
        body {
          background: url("/images/bg-${randomBG}.jpg") no-repeat;
          background-attachment: fixed;
        }
      `}</style>
      <S.Wrapper>
        <S.CharacterImg src={`/starwars/characters/${person?.id}.png`} />
      </S.Wrapper>
    </>
  );
};

export default SingleCharacter;
