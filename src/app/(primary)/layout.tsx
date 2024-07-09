"use client";
import React, { MutableRefObject, useEffect, useRef } from "react";
// components
import Navbar from "../components/Navbar";
// store
import { useAppStore, useMenuStore } from "@/store";
// styles
import { AppContainer, MainApp } from "../styles/App.styles";
// utils
import { DASHBOARD_HREF } from "@/utils/menu";

export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { appHasScrolled, setAppHasScrolled, navbarHeight } = useAppStore(
    ({ appHasScrolled, setAppHasScrolled, navbarHeight }) => ({
      appHasScrolled,
      setAppHasScrolled,
      navbarHeight,
    })
  );

  const { menuState, setSelectedMenuState } = useMenuStore(
    ({ menuState, setSelectedMenuState }) => ({
      menuState,
      setSelectedMenuState,
    })
  );

  const mainAppRef = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollEventListener = () => {
    const { scrollTop } = mainAppRef.current;

    if (scrollTop > 0) {
      setAppHasScrolled(true);
    } else if (scrollTop == 0) {
      setAppHasScrolled(false);
    }
  };

  useEffect(() => {
    if (mainAppRef.current) {
      mainAppRef.current.addEventListener("scrollend", scrollEventListener);
    }

    return () => {
      mainAppRef.current?.removeEventListener("scrollend", scrollEventListener);
    };
  }, []);

  useEffect(() => {
    const { href: selectedMenuHref } = menuState.find((menu) => menu.selected)!;
    if (!appHasScrolled) {
      mainAppRef.current?.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    } else {
      const { clientHeight } = mainAppRef.current;

      if (selectedMenuHref === DASHBOARD_HREF) {
        mainAppRef.current.scrollTo({
          behavior: "smooth",
          top: clientHeight * 1,
        });
      }
    }
  }, [appHasScrolled, menuState]);

  return (
    <MainApp ref={mainAppRef}>
      <Navbar />
      <AppContainer>{children}</AppContainer>
    </MainApp>
  );
}
