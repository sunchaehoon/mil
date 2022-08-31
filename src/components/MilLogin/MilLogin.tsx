import Header from 'components/Header/Header';
import React from 'react';
import * as S from './Styled';
import './style.css';

const MilLogin = () => {
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
                                 id='input'
                                 type="text"
                                 name="email"
                                 placeholder="아이디(이메일)"
                                 autoComplete="on"
                              />
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
