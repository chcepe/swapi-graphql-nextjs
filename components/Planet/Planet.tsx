import React, { FC, HTMLAttributes } from "react";

import * as T from "./types";
import * as S from "./styles";

const Planet: FC<T.Props & HTMLAttributes<HTMLDivElement>> = ({
  name,
  ...rest
}) => {
  return (
    <S.Planet {...rest}>
      <S.Name>{name}</S.Name>
    </S.Planet>
  );
};

export default Planet;
