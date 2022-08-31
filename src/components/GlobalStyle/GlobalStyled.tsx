import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const globalStyles = createGlobalStyle`
    @font-face {
        font-family: 'EF_MACHO';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/EF_MACHO.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'EF_MACHO';

    button {
        outline: none;
        background-color: transparent;  /* 이미지 배경 투명*/
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
    }

    li, ol, ul {
        list-style: none;
    }

    img {
        user-select: none;
    }

    address, body, button, dd, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, html, li, ol, p, span, td, th, ul {
        margin: 0;
        padding: 0;
        border: 0;
    }

    article, aside, dialog, figure, footer, header, hgroup, nav, section {
        display: block;
    }

    body {
        font-weight: 400;
        font-size: 100%;
        color: #333;
        width: 100%;
    }

    button, input, select, textarea {
        font-family: inherit;
        vertical-align: middle;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    ${reset};
`;

export default globalStyles;