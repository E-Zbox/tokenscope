import styled from "styled-components";

export const MainNav = styled.main`
  position: fixed;
  left: 50%;
  top: calc(var(--margin) * 0.5);
  width: calc(100vw - var(--margin));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transform: translateX(-50%);
  border-top-left-radius: var(--borderRadius);
  border-top-right-radius: var(--borderRadius);
  padding: 0px calc(var(--ten-px) * 8) 0px calc(var(--ten-px) * 4);
  ${({
    theme: {
      app: { appHasScrolled, navbarHeight },
      color: { blue03 },
    },
  }) =>
    appHasScrolled
      ? `
        height: ${navbarHeight}px;
        background: linear-gradient(to bottom, ${blue03}, ${blue03});
    `
      : `
        height: ${navbarHeight}px;
        background: linear-gradient(to bottom, ${blue03}94, #0000);
      `}
`;

export const Logo = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--three-px);
  border-radius: 5px;
  border: 1px solid
    ${({
      theme: {
        color: { yellow },
      },
    }) => yellow};
`;

export const LogoTextOne = styled.h4`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Nunito Sans";
  font-weight: bold;
  text-transform: uppercase;
  margin-right: var(--seven-px);
  padding: var(--three-px) var(--seven-px);
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  color: ${({
    theme: {
      color: { blue03 },
    },
  }) => blue03};
  background-color: ${({
    theme: {
      color: { yellow },
    },
  }) => yellow};
  ${({
    theme: {
      app: { appHasScrolled },
    },
  }) =>
    appHasScrolled
      ? `
  font-size: 1.4rem;
    `
      : `
  font-size: 1.76rem;
  `}
`;

export const LogoTextTwo = styled.h4`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Nunito Sans";
  font-weight: bold;
  margin-right: var(--seven-px);
  text-transform: uppercase;
  color: ${({
    theme: {
      color: { yellow },
    },
  }) => yellow};
  ${({
    theme: {
      app: { appHasScrolled },
    },
  }) =>
    appHasScrolled
      ? `
  font-size: 1.4rem;
    `
      : `
  font-size: 1.76rem;
  `}
`;

export const LogoIcon = styled.img`
  --size: 40px;
  height: var(--size);
  width: var(--size);
`;
