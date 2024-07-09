import styled from "styled-components";

interface IItem {
  $bgImg: string;
  $hoverBgImg: string;
  $selected: boolean;
}

export const MainMenu = styled.main`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: calc(var(--ten-px) * 3) var(--ten-px);
  background: ${({
    theme: {
      color: { blue03 },
    },
  }) => `linear-gradient(to bottom, ${blue03}, ${blue03});`};
`;

export const MenuContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const MenuTitle = styled.h4`
  ${({
    theme: {
      color: { white01 },
    },
  }) => `
    color: ${white01}66;
    font-family: Roboto;
    font-size: 0.98rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-left: calc(var(--seven-px) * 2);
    margin-bottom: calc(var(--ten-px) * 2);
  `}
`;

export const Item = styled.div<IItem>`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2px;
  border-radius: 5px;
  cursor: pointer;
  padding: calc(var(--seven-px) * 1.5);

  ${({
    $bgImg,
    $hoverBgImg,
    $selected,
    theme: {
      color: { blue01, white02 },
    },
  }) => `
  
  & > {
    div {
        background-image: url(${$selected ? $hoverBgImg : $bgImg});
    }

    h4 {
        color: ${$selected ? blue01 : `${white02}6D`};
    }
  }

  &:hover {
    background-color: ${$selected ? `` : `${white02}2D`};
    
    & > div {
      background-image: url(${$hoverBgImg});
    }

    & > h4 {
        color: ${blue01};
    }
  }

  &:active {
    scale: ${$selected ? 1 : 0.97};
  }
`}
`;

export const ItemIcon = styled.div`
  --size: 24px;
  height: var(--size);
  width: var(--size);
  background-position: center;
  background-size: cover;
`;

export const ItemText = styled.h4`
  font-family: "Nunito Sans";
  font-size: 1.24rem;
  font-weight: bold;
  margin-left: var(--ten-px);
`;

export const PoweredByContainer = styled.div``;
