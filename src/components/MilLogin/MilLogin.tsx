import Header from 'components/Header/Header';
import React, { useState, useEffect } from 'react';
import * as S from './Styled';
import './style.css';

const MilLogin = () => {
   interface IsInputWrite {
      write: boolean;
   }

   const inputId: any = document.getElementById('id-input');
   const inputIdBtn: any = document.getElementById('id-input-btn');
   const [inputIdShow, setInputIdShow] = useState('none');
   const [inputWrite, chgInputWrite] = useState({ write: false });
   const [idText, setIdText] = useState('');

   function delInput() {
      setIdText('');
      inputId.focus();
   }
   const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIdText(e.target.value);
      if (idText != '') {
         // inputIdBtn.style.display = 'none';
         setInputIdShow('block');
      } else {
         setInputIdShow('none');
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
                           <S.FormId>
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
                                 onClick={delInput}
                              >
                                 초기화
                              </S.InputResetBtn>
                           </S.FormId>
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
