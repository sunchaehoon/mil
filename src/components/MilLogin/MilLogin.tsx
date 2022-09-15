import Header from 'components/Header/Header';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Styled';
import './style.css';
import axios from 'axios';
import fakeAuth from "fake-auth";

const MilLogin = () => {
   const inputId: any = document.getElementById('id-input');
   const inputPw: any = document.getElementById('pw-input');
   const [inputIdShow, setInputIdShow] = useState<string>('none');
   const [inputPwShow, setInputPwShow] = useState<string>('none');
   const [idText, setIdText] = useState<string>('');
   const [pwText, setPwText] = useState<string>('');
   const [pwToggle, setPwToggle] = useState<boolean>(false);
   const [idSaveToggle, setIdSaveToggle] = useState<boolean>(false);
   const [popupShow, setPopupShow] = useState<string>('none');
   const navigate = useNavigate();

   function delIdInput() {
      setIdText('');
      setInputIdShow('none');
      inputId.focus();
   }
   function delPwInput() {
      setPwText('');
      setInputPwShow('none');
      inputPw.focus();
   }

   function clickPwToggle() {
      setPwToggle((prev) => !prev);
   }

   function clickIdSaveToggle() {
      setIdSaveToggle((prev) => !prev);
   }

   function clickPopupBtn() {
      setPopupShow('none');
   }

   const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIdText(e.target.value);
      if (inputId.value == '') {
         setInputIdShow('none');
      } else {
         setInputIdShow('block');
      }
   };
   const pwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPwText(e.target.value);
      if (inputPw.value == '') {
         setInputPwShow('none');
      } else {
         setInputPwShow('block');
      }
   };

   const pgTitle = document.querySelector('title');
   if (pgTitle instanceof Element) {
      pgTitle.innerHTML = 'MIL | Login';
   }

   const checkLogin = (e: any) => {
      e.preventDefault();

      axios
         .get('http://localhost:4000/users')
         .then((user) => {
            user.data.map(function (a: number | string, i: number) {
               if (user.data[i].id == idText && user.data[i].pw == pwText) {
                  alert(user.data[i].nickname + '님 로그인');
                  navigate(-1);
               } else {
                  setPopupShow('block');
               }
            });
         })
         .catch(() => {
            console.log('ajax error');
         });
   };

   

   return (
      <>
         <S.App>
            <Header />

            <S.Wrap>
               <S.MainSection>
                  <S.ViewWrap>
                     <S.SignContainer>
                        <S.FormWrapper>
                           <S.FormLgn>
                              <S.InputId
                                 id="id-input"
                                 type="text"
                                 name="email"
                                 placeholder="아이디(이메일)"
                                 autoComplete="on"
                                 autoCorrect="off"
                                 spellCheck="false"
                                 value={idText}
                                 onChange={idChange}
                              />
                              <S.InputResetBtn
                                 display={inputIdShow}
                                 onClick={delIdInput}
                              >
                                 초기화
                              </S.InputResetBtn>
                           </S.FormLgn>

                           <S.FormLgn>
                              <S.InputPw
                                 id="pw-input"
                                 type={pwToggle ? 'text' : 'password'}
                                 name="password"
                                 placeholder="비밀번호"
                                 autoComplete="off"
                                 autoCorrect="off"
                                 spellCheck="false"
                                 value={pwText}
                                 onChange={pwChange}
                              />
                              <S.ShowPwBtn
                                 onClick={clickPwToggle}
                                 pwToggle={pwToggle}
                              />
                              <S.InputPwResetBtn
                                 display={inputPwShow}
                                 onClick={delPwInput}
                              >
                                 초기화
                              </S.InputPwResetBtn>
                           </S.FormLgn>

                           <S.SaveLogin>
                              <S.SaveId>
                                 <S.SignSaveId>
                                    <S.SaveIdBox />
                                    <S.SaveIdSpan
                                       onClick={clickIdSaveToggle}
                                       idSaveToggle={idSaveToggle}
                                    >
                                       아이디 저장
                                    </S.SaveIdSpan>
                                 </S.SignSaveId>
                              </S.SaveId>

                              <Link
                                 to="/"
                                 id="login-btn"
                                 className="disabled"
                                 onClick={checkLogin}
                              >
                                 <S.LoginBtnSpan>로그인</S.LoginBtnSpan>
                              </Link>
                           </S.SaveLogin>

                           <S.FindIdPw>
                              <ul>
                                 <S.FindIdLi>
                                    <Link to="" className="link-style">
                                       아이디 찾기
                                    </Link>
                                 </S.FindIdLi>
                                 <S.FindIdLi>
                                    <Link
                                       to=""
                                       id="identify"
                                       className="link-style"
                                    >
                                       비밀번호 찾기
                                    </Link>
                                 </S.FindIdLi>
                              </ul>
                              <S.SignupLink>
                                 <Link to="" className="link-signup-style">
                                    회원가입
                                 </Link>
                              </S.SignupLink>
                           </S.FindIdPw>
                        </S.FormWrapper>
                     </S.SignContainer>
                  </S.ViewWrap>
               </S.MainSection>
            </S.Wrap>
         </S.App>

         <S.PopupContainer display={popupShow}>
            <S.PopupAlert>
               <div>
                  <S.PopupText>아이디 또는 비밀번호가 일치하지 않습니다.</S.PopupText>
               </div>
               <S.PopupDiv>
                  <S.PopupBtn onClick={clickPopupBtn}>확인</S.PopupBtn>
               </S.PopupDiv>
            </S.PopupAlert>
         </S.PopupContainer>
      </>
   );
};

export default MilLogin;
