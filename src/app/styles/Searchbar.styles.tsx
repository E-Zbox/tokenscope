import styled from "styled-components";

interface ISearchIcon {
  $enabled: boolean;
}

export const MainSearch = styled.main`
  height: 50px;
  width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 30px;
  padding: 0px calc(var(--ten-px) * 1) 0px calc(var(--ten-px) * 2);
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  color: ${({
    theme: {
      color: { blue03 },
    },
  }) => `${blue03}d5`};
  background: transparent;
  font-size: 1.2rem;

  &::placeholder {
    font-size: 1.1rem;
    opacity: 0.7;
  }
`;

export const SearchIcon = styled.img<ISearchIcon>`
  --size: 32px;
  ${({ $enabled }) =>
    $enabled
      ? `
      height: var(--size);
      width: var(--size);
      scale: 0.85;
      margin-left: calc(var(--three-px) * 2);
    `
      : `
      height: 0px;
      width: 0px;
      `}
  opacity:;

  &:hover {
    scale: 1;
  }

  &:active {
    scale: 0.9;
  }
`;
