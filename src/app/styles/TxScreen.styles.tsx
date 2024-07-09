import styled from "styled-components";

export const MainTx = styled.main`
  height: ${({
    theme: {
      app: { navbarHeight },
    },
  }) => `calc(100vh - ${navbarHeight}px - var(--margin))`};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: scroll;
  padding: 0px calc(var(--ten-px) * 3);
  background: ${({
    theme: {
      color: { blue02, gold },
    },
  }) => `linear-gradient(to bottom, ${blue02}17, ${blue02}18)`};
`;
