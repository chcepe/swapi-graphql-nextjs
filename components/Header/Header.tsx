import React, { FC } from "react";
import { useRouter } from "next/router";

import { links } from "@utils/routes";
import Container from "@components/Container";

import * as S from "./styles";

const Header: FC = ({}) => {
  const { pathname, push } = useRouter();

  return (
    <S.Wrapper>
      <Container>
        <S.Main>
          <S.Logo active={pathname === "/"} onClick={() => push("/")} />
          <S.Navigation>
            {links.map(({ id, label }) => (
              <S.NavItem
                onClick={() => push(id, id)}
                active={pathname === id}
                key={id}
              >
                {label}
              </S.NavItem>
            ))}
          </S.Navigation>
        </S.Main>
      </Container>
    </S.Wrapper>
  );
};

export default Header;
