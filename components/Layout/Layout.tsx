import React, { FC } from "react";
import Head from "next/head";

import Container from "@components/Container";
import Header from "@components/Header";
import { DOCUMENT_TITLE } from "@utils/contants";

import * as T from "./types";
import * as S from "./styles";

const Layout: FC<T.Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>
          {DOCUMENT_TITLE} - {title}
        </title>
      </Head>
      <S.Wrapper>
        <S.BackgroundVideo src="http://www.youtube.com/embed/aJ44ioHhIBI?autoplay=1&controls=0&mute=1" />
        <S.Main>
          <Container>
            <S.Body>
              <Header />
              {children}
            </S.Body>
          </Container>
        </S.Main>
      </S.Wrapper>
    </>
  );
};

export default Layout;
