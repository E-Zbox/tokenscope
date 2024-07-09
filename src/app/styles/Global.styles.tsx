import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Source Sans Pro;
        transition: 350ms linear;
        color: ${({
          theme: {
            color: { blue01 },
          },
        }) => blue01};

        // variables
        --three-px: 3px;
        --seven-px: 7px;
        --ten-px: 10px;
    }

    body {
        position: relative;
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${({
          theme: {
            color: { blue01, red01, yellow },
          },
        }) => `
            radial-gradient(ellipse at center, ${yellow}, transparent),
            radial-gradient(ellipse at top left, ${blue01}45, transparent),
            radial-gradient(ellipse at bottom right, ${red01}, transparent);
        `}

        &::before {
            content: "";
            position: absolute;
            left: 0px;
            top: 0px;
            height: 100%;
            width: 100%;
            z-index: -1;
            background: radial-gradient(ellipse at center, #000000a5, #000000ed);
        }
    }
`;
