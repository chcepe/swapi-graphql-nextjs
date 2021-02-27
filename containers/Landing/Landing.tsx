import React, { FC } from "react";
import Typewriter from "typewriter-effect";

import { links } from "@utils/routes";

import * as S from "./styles";

const Landing: FC = ({}) => {
  return (
    <S.Wrapper>
      <S.Headline>
        <span>Discover Starwar's</span>
        <S.Highlight>
          <Typewriter
            onInit={() => {}}
            options={{
              strings: links.map((link) => link.label.toLowerCase()),
              autoStart: true,
              loop: true,
            }}
          />
        </S.Highlight>
        <span>all in one place</span>
      </S.Headline>
      <small>powered by</small>
      <S.SwapiDevLogo />
      <S.Footer>
        made with 🤍 by{" "}
        <a href="" target="_blank">
          chcepe
        </a>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Landing;
