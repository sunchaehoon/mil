import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import * as S from './Styled';
import {Link} from 'react-router-dom';
import "./style.css";

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
                            <S.Recommendsection>
                                <S.SectionContents>
                                    <S.ThumbnailWiper>
                                        <S.SwiperSlide>
                                            <Link className='MIL-recommend' to="/detail/ballad" title='오늘 퇴근하고 혼술하며 함께 할 인디'></Link>
                                            <S.RecommendHead>
                                                <S.RecommendHeadH4>오늘 퇴근하고 혼수랗며 함께 할 인디</S.RecommendHeadH4>
                                                <S.TotalStatusData>
                                                    총 15곡
                                                    <S.BarNormal>|</S.BarNormal>
                                                    2022.6.20
                                                </S.TotalStatusData>
                                            </S.RecommendHead>
                                        </S.SwiperSlide>
                                    </S.ThumbnailWiper>
                                </S.SectionContents>
                            </S.Recommendsection>
                        </S.sectionInner>
                    </S.SectionHome>
                    
                </S.Wrap>
            </S.App>
        </>
    );
};

export default Home;