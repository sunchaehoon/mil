import styled from "styled-components";

export const Header = styled.header`
    z-index: 100;
    position: fixed;
    height: 100px;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
`;

export const HeaderInner = styled.div`
    /* display: flex; */
    position: relative;
    margin: 0 auto;
    min-width: 955px;
    max-width: 1600px;
`;

export const LogoH1 = styled.h1`
    margin: 37px 0 0 81px;
    vertical-align: middle;
    width: fit-content;
    user-select: none;
    font-size: 25px;
    display: inline-block;
    width: 55px;
    height: 23px;
    color: #551a8b;
    @font-face {
        font-family: 'EF_MACHO';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/EF_MACHO.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'EF_MACHO';
`;

export const HeaderNav = styled.nav`
    display: inline-block;
    margin: 36px 0 0 40px;
    vertical-align: middle;
`;

export const HeaderRightUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
`;

export const HeaderRightLi = styled.li`
    list-style: none;
    user-select: none;
    margin-left: 20px;
    @font-face {
        font-family: 'CBNUJIKJI';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/CBNUJIKJI.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'CBNUJIKJI';
`;

export const HeaderSearch = styled.fieldset`
    position: relative;
    display: inline-block;
    height: 32px;
    width: 180px;
    border: 1px solid #d2d2d2;
    border-radius: 17px;
    vertical-align: middle;
    margin: 36px 0 0 35px;
    padding: 0 30px 0 38px;
`;

export const HdSearchInp = styled.input`
    position: relative;
    top: 4px;
    width: 100%;
    font-size: 14px;
    border: 0;
`;

export const SearchImg = styled.img`
    background-image: url('https://www.music-flo.com/img/sp_button.8292213d.png');
    background-position: -242px -632px;
    width: 25px;
    height: 25px;
    content: "";
    position: absolute;
    top: 4px;
    left: 10px;
`;

export const HeaderNav2 = styled.div`
    float: right;
    margin: 45px 81px 0 0;
`;

