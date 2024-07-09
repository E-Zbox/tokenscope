"use client";
import { MutableRefObject, useEffect, useRef } from "react";
// store
import { useAppStore } from "@/store";
// styles
import {
  Logo,
  LogoIcon,
  LogoTextOne,
  LogoTextTwo,
  MainNav,
} from "../styles/Navbar.styles";
import { SearchIcon } from "../styles/Searchbar.styles";
// utils
import { screens } from "@/utils/data";

const Navbar = () => {
  const { appHasScrolled, setAppHasScrolled, navbarHeight, setNavbarHeight } =
    useAppStore(
      ({
        appHasScrolled,
        setAppHasScrolled,
        navbarHeight,
        setNavbarHeight,
      }) => ({
        appHasScrolled,
        setAppHasScrolled,
        navbarHeight,
        setNavbarHeight,
      })
    );

  const intervalIdRef = useRef() as MutableRefObject<NodeJS.Timeout>;

  const mainNavRef = useRef() as MutableRefObject<HTMLDivElement>;

  const {
    default: {
      assets: { searchIcon },
    },
    navbar: {
      assets: { appLogo },
    },
  } = screens;

  useEffect(() => {
    if (mainNavRef.current) {
      if (appHasScrolled) {
        setNavbarHeight(80);
      } else {
        setNavbarHeight(100);
      }
    }
  }, [appHasScrolled]);

  return (
    <MainNav ref={mainNavRef}>
      <Logo>
        <LogoTextOne>Token</LogoTextOne>
        <LogoTextTwo>Scope</LogoTextTwo>
        <LogoIcon src={appLogo.src} alt="" />
      </Logo>
      {appHasScrolled ? (
        <SearchIcon
          src={searchIcon.src}
          alt=""
          onClick={() => setAppHasScrolled(false)}
          $enabled={true}
        />
      ) : (
        <></>
      )}
    </MainNav>
  );
};

export default Navbar;
