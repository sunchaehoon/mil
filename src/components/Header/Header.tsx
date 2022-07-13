import React from 'react';
import * as S from "./Styled";
import "./style.css";

const Header = () => {
    return (
        <>
            <S.HeaderBorder>
                <S.MILLogo>
                    <h1 className='MIL-h1'>MIL</h1>
                </S.MILLogo>
                <S.HeaderRight>
                    <img className='usericon' src='images/usericon.svg' alt='유저프로필' width='40' />
                    <S.LoginButton>login</S.LoginButton>
                </S.HeaderRight>
            </S.HeaderBorder>
        </>
    );
};

export default Header;