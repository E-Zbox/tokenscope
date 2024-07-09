"use client";
// store
import { useAppStore, useMenuStore } from "@/store";
// styles
import {
  Item,
  ItemIcon,
  ItemText,
  MainMenu,
  MenuContainer,
  MenuTitle,
  PoweredByContainer,
} from "../styles/Menu.styles";
// utils
import { HOME_HREF } from "@/utils/menu";

const Menu = () => {
  const { setAppHasScrolled } = useAppStore(({ setAppHasScrolled }) => ({
    setAppHasScrolled,
  }));

  const { menuState, setSelectedMenuState } = useMenuStore(
    ({ menuState, setSelectedMenuState }) => ({
      menuState,
      setSelectedMenuState,
    })
  );

  const handleClick = (href: string) => {
    if (href === HOME_HREF) {
      setAppHasScrolled(false);
    } else {
      setSelectedMenuState(href);
    }
  };

  return (
    <MainMenu>
      <MenuContainer>
        <MenuTitle>MAIN</MenuTitle>
        {menuState.map(({ hoverIcon, href, icon, selected, title }, index) => (
          <Item
            key={index}
            $bgImg={icon}
            $hoverBgImg={hoverIcon}
            $selected={selected}
            onClick={() => handleClick(href)}
          >
            <ItemIcon />
            <ItemText>{title}</ItemText>
          </Item>
        ))}
      </MenuContainer>
      <PoweredByContainer></PoweredByContainer>
    </MainMenu>
  );
};

export default Menu;
