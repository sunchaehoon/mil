import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import * as S from './Styled';
import {Link} from 'react-router-dom';
import "./style.css";
import axios from "axios";


// export const getPosts = async () => {
//     const BaladChat = await axios.get('http://localhost:4000/posts');
//     return BaladChat.data;
// };


const Home = () => {

    const pgTitle = document.querySelector("title");
    if (pgTitle instanceof Element) {
        pgTitle.innerHTML = "MIL | Home";
    }       

    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then(chart => {
                return(
                    <li>
                        <S.ThumbnailChart>
                            <img src={chart.data[0].url} alt={`${chart.data[0].artist} / ${chart.data[0].url}`} className='chart_thumbnail' />
                            <S.ChartTitle>
                                {chart.data[0].title}
                                <S.ChartArtist>{chart.data[0].artist}</S.ChartArtist>
                            </S.ChartTitle>
                        </S.ThumbnailChart>
                    </li>
                );
            }
        )
    })
    // const getChart = () => {
    //     axios.get('http://localhost:4000/posts')
    //     .then((chart) => {
    //         chart.data.map(function(a: number, i: number): any {
    //             return (
    //                 <li>
    //                     <S.ThumbnailChart>
    //                         <img src={chart.data[i].url} alt={`${chart.data[i].artist} / ${chart.data[i].url}`} className='chart_thumbnail' />
    //                         <S.ChartTitle>
    //                             {chart.data[i].title}
    //                             <S.ChartArtist>{chart.data[i].artist}</S.ChartArtist>
    //                         </S.ChartTitle>
    //                     </S.ThumbnailChart>
    //                 </li>
    //             );
    //         })
    //     })
    // }

    // map
    // 1.array 자료 갯수만큼 함수안의 코드 실행
    // 2.함수의 파라미터 a는 array안에 있던 자료
    // 3.return에 뭘 적으면 array로 담아줌 



    //let [baladChart, chgBaladChart] = useState(['', '', '', '']);


    

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
                                                                    <img src="https://cdn.music-flo.com/image/album/883/297/03/04/403297883_5d89b540.jpg?1569305922166/dims/resize/140x140/quality/90" alt='임재현/조금 취했어' className='chart_thumbnail' />
                                                                    <S.ChartTitle>
                                                                        {}
                                                                        <S.ChartArtist>임재현</S.ChartArtist>
                                                                    </S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
                                                            <li>
                                                                <S.ThumbnailChart>
                                                                    <img src="https://cdn.music-flo.com/image/v2/album/662/145/07/04/407145662_61bc226d_s.jpg?1639719534775/dims/resize/140x140/quality/90" alt="김민석(멜로망스)/취중고백" className='chart_thumbnail' />
                                                                    <S.ChartTitle>
                                                                        취중고백
                                                                        <S.ChartArtist>김민석(멜로망스)</S.ChartArtist>
                                                                    </S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
                                                            <li>
                                                                <S.ThumbnailChart>
                                                                    <img src="https://cdn.music-flo.com/image/v2/album/854/089/08/04/408089854_626246eb_s.jpg?1650607853236/dims/resize/140x140/quality/90" alt="경서/나의 X에게" className='chart_thumbnail' />
                                                                    <S.ChartTitle>
                                                                        나의 X에게
                                                                        <S.ChartArtist>경서</S.ChartArtist>
                                                                    </S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
                                                            <li>
                                                                <S.ThumbnailChart>
                                                                    <img src="https://cdn.music-flo.com/image/v2/album/080/747/08/04/408747080_62c7dce2_s.jpg?1657265380357/dims/resize/140x140/quality/90" alt="WSG워너비 (가야G)/그때 그 순간 그대로 (그그그)" className='chart_thumbnail' />
                                                                    <S.ChartTitle>
                                                                        그때 그 순간 그대로 (그그그)
                                                                        <S.ChartArtist>WSG워너비 (가야G)</S.ChartArtist>
                                                                    </S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
                                                            {/* {
                                                                baladChart.map(function(a: string | number, i: number): any {
                                                                    return (
                                                                        <li>
                                                                            <S.ThumbnailChart>
                                                                                <img src={baladChart[i].url} alt={`${chart.data[i].artist} / ${chart.data[i].url}`} className='chart_thumbnail' />
                                                                                <S.ChartTitle>
                                                                                    {chart.data[i].title}
                                                                                    <S.ChartArtist>{chart.data[i].artist}</S.ChartArtist>
                                                                                </S.ChartTitle>
                                                                            </S.ThumbnailChart>
                                                                        </li>
                                                                    );
                                                                })
                                                            } */}
                                                            


                                                        </S.RecommendTrackList>

                                                        <S.RecommendTrackList className='recommend_track_list'>
                                                            <li>
                                                                <S.ThumbnailChart>
                                                                    <img src="https://cdn.music-flo.com/image/v2/album/332/330/06/04/406330332_60d58c16_s.jpg?1624607767591/dims/resize/140x140/quality/90" alt="MSG워너비(M.O.M)/바라만 본다" className='chart_thumbnail' />
                                                                    <S.ChartTitle>
                                                                        바라만 본다
                                                                        <S.ChartArtist>MSG워너비(M.O.M)</S.ChartArtist>
                                                                    </S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
                                                            <li>
                                                                <S.ThumbnailChart>
                                                                    <img src="https://cdn.music-flo.com/image/v2/album/908/069/07/04/407069908_61a88ae5_s.jpg?1638435559398/dims/resize/140x140/quality/90" alt="이무진/눈이 오잖아(Feat.헤이즈)" className='chart_thumbnail' />
                                                                    <S.ChartTitle>
                                                                        눈이 오잖아(Feat.헤이즈)
                                                                        <S.ChartArtist>이무진</S.ChartArtist>
                                                                    </S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
                                                            <li>
                                                                <S.ThumbnailChart>
                                                                    <img src="https://cdn.music-flo.com/image/v2/album/479/552/06/04/406552479_6141a960_s.jpg?1631693154773/dims/resize/140x140/quality/90" alt="마크툽 (MAKTUB)/찰나가 영원이 될 때 (The Eternal Moment)" className='chart_thumbnail' />
                                                                    <S.ChartTitle>
                                                                        찰나가 영원이 될 때 (The Eternal Moment)
                                                                        <S.ChartArtist>마크툽 (MAKTUB)</S.ChartArtist>
                                                                    </S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
                                                            <li>
                                                                <S.ThumbnailChart>
                                                                    <img src="https://cdn.music-flo.com/image/v2/album/570/423/06/04/406423570_6107b4c7_s.jpg?1627894985655/dims/resize/140x140/quality/90" alt="헤이즈 (Heize)/비가 오는 날엔 (2021)" className='chart_thumbnail' />
                                                                    <S.ChartTitle>
                                                                        비가 오는 날엔(2021)
                                                                        <S.ChartArtist>헤이즈 (Heize)</S.ChartArtist>
                                                                    </S.ChartTitle>
                                                                </S.ThumbnailChart>
                                                            </li>
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
}

export default Home;