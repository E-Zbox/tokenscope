import styled from "styled-components";

export const MainApp = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  ${({
    theme: {
      app: { appHasScrolled },
      color: { blue03 },
    },
  }) =>
    appHasScrolled
      ? `
            --borderRadius: 25px;
            --margin: calc(var(--ten-px) * 6);
            border-radius: var(--borderRadius);
            height: calc(100vh - var(--margin));
            width: calc(100% - var(--margin));
            background-color: ${blue03};
        `
      : `
            --borderRadius: 0px;
            --margin: 0px;
            border-radius: var(--borderRadius);
            height: 100vh;
            width: 100%;
            background: transparent;
        `}
  }}
`;

export const AppContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: ${({
    theme: {
      app: { appHasScrolled, navbarHeight },
    },
  }) => (appHasScrolled ? "0px" : `${navbarHeight}px`)};
  background-color: ${({
    theme: {
      color: { white02 },
    },
  }) => `${white02}22`};
`;

export const MainPage = styled.main`
  height: ${({
    theme: {
      app: { navbarHeight },
    },
  }) => `calc(100vh - ${navbarHeight}px - var(--margin))`};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PageScroller = styled.main`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PageContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: 1px 1px 4px #9df2 inset;
`;
