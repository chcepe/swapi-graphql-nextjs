import React, { FC, useState } from "react";
import { useRouter } from "next/router";

import { links } from "@utils/routes";
import Container from "@components/Container";

import * as S from "./styles";

const Header: FC = ({}) => {
  const { pathname, push } = useRouter();
  const [showMenuModal, setShowMenuModal] = useState(false);

  return (
    <S.Wrapper modal={showMenuModal}>
      <Container>
        <S.Main>
          <S.Logo active={pathname === "/"} onClick={() => push("/")} />
          <S.Navigation>
            {links.map(({ id, label }) => (
              <S.NavItem
                onClick={() => push(id, id)}
                active={pathname.includes(id)}
                key={id}
              >
                {label}
              </S.NavItem>
            ))}
          </S.Navigation>

          <S.Hamburger
            active={showMenuModal}
            onClick={() => setShowMenuModal((showMenuModal) => !showMenuModal)}
          />
        </S.Main>
      </Container>
      {showMenuModal && (
        <S.MobileNavigation>
          {links.map(({ id, label }) => (
            <S.NavItem
              onClick={() => push(id, id)}
              active={pathname.includes(id)}
              key={id}
            >
              {label}
            </S.NavItem>
          ))}
        </S.MobileNavigation>
      )}
    </S.Wrapper>
  );
};

export default Header;
