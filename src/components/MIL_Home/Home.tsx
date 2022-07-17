import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import * as S from './Styled';

const Home = () => {

    const pgTitle = document.querySelector("title");
    if(pgTitle instanceof Element) {
        pgTitle.innerHTML = "MIL | Home";
    }


    return (
        <>
            <S.App>
                <Header />

                <S.Wrap>
                    <S.SectionHome>
                        <S.sectionInner>
                            
                        </S.sectionInner>
                    </S.SectionHome>
                    
                </S.Wrap>
            </S.App>
        </>
    );
};

export default Home;