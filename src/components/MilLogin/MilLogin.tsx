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
                            <S.SignContainer className='sign-container'>
                                
                            </S.SignContainer>
                        </S.ViewWrap>
                    </S.MainSection>
                </S.Wrap>
            </S.App>
        </>
    );
};

export default MilLogin;