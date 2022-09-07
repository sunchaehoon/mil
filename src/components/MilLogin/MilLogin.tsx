import Header from 'components/Header/Header';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Styled';
import './style.css';

const MilLogin = () => {
   const inputId: any = document.getElementById('id-input');
   const inputPw: any = document.getElementById('pw-input');
   const [inputIdShow, setInputIdShow] = useState<string>('none');
   const [inputPwShow, setInputPwShow] = useState<string>('none');
   const [idText, setIdText] = useState<string>('');
   const [pwText, setPwText] = useState<string>('');
   const [pwToggle, setPwToggle] = useState<boolean>(false);
   const [idSaveToggle, setIdSaveToggle] = useState<boolean>(false);

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
                                    <S.SaveIdSpan onClick={clickIdSaveToggle} idSaveToggle={idSaveToggle}>아이디 저장</S.SaveIdSpan>
                                 </S.SignSaveId>
                              </S.SaveId>

                              <Link to="#" id='login-btn' className='disabled'>
                                 <S.LoginBtnSpan>로그인</S.LoginBtnSpan>
                              </Link>
                           </S.SaveLogin>

                           <S.FindIdPw>
                              <S.FindIdLi>
                                 <Link to="" className='link-style'>아이디 찾기</Link>
                              </S.FindIdLi>
                           </S.FindIdPw>

                        </S.FormWrapper>
                     </S.SignContainer>
                  </S.ViewWrap>
               </S.MainSection>
            </S.Wrap>
         </S.App>
      </>
   );
};

export default MilLogin;
