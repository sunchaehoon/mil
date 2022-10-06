import React from 'react';
import {Link} from "react-router-dom";
import * as S from "./Styled";
import "./style.css";

interface LoginProps {
    isLogin?: boolean;
    userNickname?: string;
    userId?: string;
}

const Header = ({ isLogin, userNickname, userId }: LoginProps) => {

    function Logout() {
        isLogin = false;
    }
    
    return (
        <>
            <S.Header>
                <S.HeaderInner>
                    <S.LogoH1><Link className='MIL-logo' to="/">MIL</Link></S.LogoH1>

                    <S.HeaderNav>
                
                        <S.HeaderRightUl>
                            <S.HeaderRightLi>
                                <Link className='header-li-link' to="/intrd-mil">차트</Link>
                            </S.HeaderRightLi>
                            <S.HeaderRightLi>
                                <Link className='header-li-link' to="/loginpg">내 리스트</Link>
                            </S.HeaderRightLi>
                            <S.HeaderRightLi>
                                <Link className='header-li-link' to="/signuppg">이용권</Link>
                            </S.HeaderRightLi>
                        </S.HeaderRightUl>

                    </S.HeaderNav>

                    <S.HeaderSearch>
                        <S.SearchImg />
                        <S.HdSearchInp type='text' placeholder='검색어를 입력하세요.' />
                    </S.HeaderSearch>
                    <S.HeaderNav2>
                    {
                    isLogin == false ?
                    <ul className='nav2-ul'>
                        <li><Link className='link' to="/introduce-mil">MIL 소개</Link></li>
                        <li><Link className='link' to="/mil-login">로그인</Link></li>
                        <li><Link className='link' to="/mil-signup">회원가입</Link></li>
                    </ul>
                    : userNickname == '' ?
                    <ul className='nav2-ul'>
                        <li><Link className='link' to="/introduce-mil">MIL 소개</Link></li>
                        <li>
                            <S.UserPrf>
                                <S.PrfBtn>
                                    {localStorage.getItem("nickname")}
                                    <S.Lgout onClick={Logout}>로그아웃</S.Lgout>
                                </S.PrfBtn>
                            </S.UserPrf>
                        </li>
                    </ul>
                    :
                    <ul className='nav2-ul'>
                        <li><Link className='link' to="/introduce-mil">MIL 소개</Link></li>
                        <li>
                            <S.UserPrf>
                                <S.PrfBtn>
                                    {userNickname}
                                </S.PrfBtn>
                            </S.UserPrf>
                        </li>
                    </ul>
                    }
                    </S.HeaderNav2>
                </S.HeaderInner>
            </S.Header>
        </>
    );
};

export default Header;