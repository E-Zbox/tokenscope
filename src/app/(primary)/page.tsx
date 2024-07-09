"use client";
import { MutableRefObject, useEffect, useRef } from "react";
// components
import Menu from "../components/Menu";
// screens
import DashboardScreen from "../screens/DashboardScreen";
import HomeScreen from "../screens/HomeScreen";
import TxScreen from "../screens/TxScreen";
// store
import { useAppStore, useMenuStore } from "@/store";
// styles
import { MainPage, PageContainer, PageScroller } from "../styles/App.styles";
// utils
import { DASHBOARD_HREF, TRANSACTION_HREF, WHALES_HREF } from "@/utils/menu";

export default function Home() {
  const { appHasScrolled } = useAppStore(({ appHasScrolled }) => ({
    appHasScrolled,
  }));
  const { menuState } = useMenuStore(({ menuState }) => ({ menuState }));

  const pageScrollerRef = useRef() as MutableRefObject<HTMLDivElement>;

  /* useEffect(() => {
    if (appHasScrolled) {
      const { href: selectedMenuHref } = menuState.find(
        (menu) => menu.selected
      )!;

      const { clientHeight } = pageScrollerRef.current;

      switch (selectedMenuHref) {
        case DASHBOARD_HREF:
          pageScrollerRef.current.scrollTo({
            behavior: "smooth",
            top: 0,
          });
          break;
        case TRANSACTION_HREF:
          pageScrollerRef.current.scrollTo({
            behavior: "smooth",
            top: clientHeight * 1,
          });
          break;
        case WHALES_HREF:
          pageScrollerRef.current.scrollTo({
            behavior: "smooth",
            top: clientHeight * 2,
          });
          break;
        default:
          break;
      }
    }
  }, [appHasScrolled, menuState]);
  */

  return (
    <>
      <HomeScreen />
      <MainPage>
        <Menu />
        <PageScroller ref={pageScrollerRef}>
          <PageContainer>
            <DashboardScreen />
            {/* <TxScreen /> */}
          </PageContainer>
        </PageScroller>
      </MainPage>
    </>
  );
}
