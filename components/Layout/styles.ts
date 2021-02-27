import styled from "styled-components";

export const Wrapper = styled.div`
  background: #000;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const BackgroundVideo = styled.iframe`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 0;
  transform: scale(1.5);
`;

export const Body = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
`;

export const Main = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
