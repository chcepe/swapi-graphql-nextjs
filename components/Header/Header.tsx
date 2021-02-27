import React, { FC } from "react";

import { links } from "@utils/routes";

import * as S from "./styles";

const Header: FC = ({}) => {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Logo />
        <S.Navigation>
          {links.map(({ id, label }) => (
            <S.NavItem key={id}>{label}</S.NavItem>
          ))}
        </S.Navigation>
      </S.Main>
    </S.Wrapper>
  );
};

export default Header;
