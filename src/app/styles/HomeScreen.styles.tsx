import styled from "styled-components";

export const MainHome = styled.main`
  height: ${({
    theme: {
      app: { navbarHeight },
    },
  }) => `calc(100vh - ${navbarHeight}px - calc(var(--margin)))`};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  background: transparent;
  padding-bottom: calc(var(--ten-px) * 7);
`;

export const MainText = styled.h4`
  font-family: "Roboto";
  font-size: 3rem;
  font-weight: bold;
  color: #fff5;
`;

export const SubText = styled.h4`
  color: ${({
    theme: {
      color: { blue03 },
    },
  }) => `${blue03}`};
  width: 600px;
  font-family: "Nunito Sans";
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
`;
