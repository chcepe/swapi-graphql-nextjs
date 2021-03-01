import React, { FC } from "react";
import { useRouter } from "next/router";

import routes from "@utils/routes";

import * as T from "./types";
import * as S from "./styles";

const CharacterItem: FC<T.Props> = ({ name, id }) => {
  const { push } = useRouter();
  return (
    <S.Wrapper onClick={() => push(routes.CHARACTERS.route + "/" + id)}>
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
    </S.Wrapper>
  );
};

export default CharacterItem;
