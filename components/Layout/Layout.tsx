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
      <Header />
      <S.Wrapper>
        <Container>{children}</Container>
      </S.Wrapper>
    </>
  );
};

export default Layout;
