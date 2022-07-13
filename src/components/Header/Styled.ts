import styled from "styled-components";

export const HeaderBorder = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    top: 0px;
    height: 120px;
`;

export const MILLogo = styled.div`
    @font-face {
        font-family: 'EF_MACHO';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/EF_MACHO.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'EF_MACHO';
    margin: 0 auto;
    color: black;
    display: flex;
    align-items: center;
`;

export const HeaderRight = styled.div`
    position: absolute;
    width: 20%;
    height: 100%;
    right: 0px;
`;

export const LoginButton = styled.button`
    position: relative;
    top: 60px;
    margin-left: 40px;
    cursor: pointer;
`;