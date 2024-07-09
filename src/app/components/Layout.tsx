"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
// lib/registry
import StyledComponentsRegistry from "@/lib/registry";
// store
import { useAppStore } from "@/store";
// styles
import GlobalStyles from "@/app/styles/Global.styles";
// utils
import { devices, theme } from "@/utils/data";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { appHasScrolled, navbarHeight } = useAppStore(
    ({ appHasScrolled, navbarHeight }) => ({
      appHasScrolled,
      navbarHeight,
    })
  );

  const mainTheme = {
    app: { appHasScrolled, navbarHeight },
    color: { ...theme },
    devices,
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <html lang="en">
        <head>
          <link
            as="font"
            href="https://fonts.googleapis.com/css?family=Source Sans Pro&display=swap"
            rel="stylesheet"
          />
          <link
            as="font"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
            rel="stylesheet"
          />
          <link
            as="font"
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            as="font"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
      <GlobalStyles theme={mainTheme} />
    </ThemeProvider>
  );
};

export default Layout;
