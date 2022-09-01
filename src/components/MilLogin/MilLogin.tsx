import Header from 'components/Header/Header';
import React, {useState} from 'react';
import * as S from './Styled';
import './style.css';

const MilLogin = () => {
   interface IsInputWrite {
      write: boolean;
   }

   const inputId = document.getElementById("id-rem-btn");
   const [inputWrite, chgInputWrite] = useState({write: false});
   const [idText, setIdText] = useState("");

   function delInput() {
      
   }
   const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIdText(e.target.value);
   }


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
                                 id="input"
                                 type="text"
                                 name="email"
                                 placeholder="아이디(이메일)"
                                 autoComplete="on"
                                 autoCorrect="off"
                                 spellCheck="false"
                              />
                              <S.InputResetBtn onChange={idChange}>초기화</S.InputResetBtn>
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
