import React, { FC } from "react";

import * as T from "./types";
import * as S from "./styles";

const FilmItem: FC<T.Props> = ({ name, id, link }) => {
  const src = `/starwars/films/${id}.jpg`;
  return (
    <a target="_blank" href={link}>
      <S.Wrapper src={src}>
        <S.Thumbnail src={src} />
        <S.Title>{name}</S.Title>
      </S.Wrapper>
    </a>
  );
};

export default FilmItem;
