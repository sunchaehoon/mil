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
                                            <Link className='MIL-recommend' to="/detail/ballad" title='오늘 퇴근하고 혼술하며 함께 할 인디 상세보기'>
                                                <S.RecommendHead>
                                                    <S.RecommendHeadH4>오늘 퇴근하고 혼술하며 함께 할 인디</S.RecommendHeadH4>
                                                    <S.TotalStatusData>
                                                        총 15곡
                                                        <S.BarNormal>|</S.BarNormal>
                                                        2022.6.20
                                                    </S.TotalStatusData>
                                                </S.RecommendHead>
                                                <S.AlbumList>
                                                    <S.RecommendTrackHome>
                                                        <S.RecommendTrackList>
                                                            <li>
                                                                <S.ThumbnailChart>
                                                                    <img src='https://cdn.music-flo.com/image/album/883/297/03/04/403297883_5d89b540.jpg?1569305922166/dims/resize/140x140/quality/90' width='53' height='53' alt='임재현/조금 취했어' className='chart_thumbnail' />
                                                                    <S.ChartTitle>조금 취했어</S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </S.RecommendTrackList>
                                                    </S.RecommendTrackHome>
                                                </S.AlbumList>
                                            </Link>
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