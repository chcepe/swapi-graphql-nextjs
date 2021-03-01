import React, { FC } from "react";
import Typewriter from "typewriter-effect";

import { links } from "@utils/routes";

import * as S from "./styles";

const Landing: FC = () => {
  return (
    <S.Wrapper>
      <S.BackgroundVideo src="https://www.youtube.com/embed/aJ44ioHhIBI?autoplay=1&controls=0&mute=1" />
      <S.Main>
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
        <S.TechLogo />
        <S.Footer>
          made with 🤍 by{" "}
          <a href="https://chcepe.github.io" target="_blank">
            chcepe
          </a>
        </S.Footer>
      </S.Main>
    </S.Wrapper>
  );
};

export default Landing;
