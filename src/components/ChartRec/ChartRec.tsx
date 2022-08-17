import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

const ChartRec = () => {
   const [BaladChart, setBaladChart]: any = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:4000/BaladChart')
         .then((response) => {
            setBaladChart(response.data);
         })
         .catch(() => {
            console.log('something wrong.');
         });
   }, []);

   return (
      <S.SectionHome>
         <S.sectionInner>
            <S.Recommendsection>
               <S.SectionContents>
                  <S.ThumbnailWiper>
                     <S.SwiperSlide>
                        <Link
                           to="/detail/ballad"
                           title="오늘 퇴근하고 혼술하며 함께 할 인디 상세보기"
                           className="MIL-recommend"
                        >
                           <S.RecommendHead>
                              <S.RecommendHeadH4>
                                 오늘 퇴근하고 혼술하며 함께 할 인디
                              </S.RecommendHeadH4>
                              <S.TotalStatusData>
                                 총 15곡
                                 <S.BarNormal>|</S.BarNormal>
                                 2022.6.20
                              </S.TotalStatusData>
                           </S.RecommendHead>
                           <S.AlbumList>
                              <S.RecommendTrackHome>
                                 <S.RecommendTrackList>
                                    {BaladChart.map(function (
                                       a: string | number,
                                       i: number,
                                    ): any {
                                       return (
                                          <li key={BaladChart[i].rank}>
                                             <S.ThumbnailChart>
                                                <img
                                                   src={BaladChart[i].url}
                                                   alt={`${BaladChart[i].artist} / ${BaladChart[i].url}`}
                                                   className="chart_thumbnail"
                                                />
                                                <S.ChartTitle>
                                                   {BaladChart[i].title}
                                                   <S.ChartArtist>
                                                      {BaladChart[i].artist}
                                                   </S.ChartArtist>
                                                </S.ChartTitle>
                                             </S.ThumbnailChart>
                                          </li>
                                       );
                                    })}
                                 </S.RecommendTrackList>

                                 <S.RecommendTrackList className="recommend_track_list">
                                    {BaladChart.map(function (
                                       a: string | number,
                                       i: number,
                                    ): any {
                                       while (i >= 4) {
                                          return (
                                             <li key={BaladChart[i].rank}>
                                                <S.ThumbnailChart>
                                                   <img
                                                      src={BaladChart[i].url}
                                                      alt={`${BaladChart[i].artist} / ${BaladChart[i].url}`}
                                                      className="chart_thumbnail"
                                                   />
                                                   <S.ChartTitle>
                                                      {BaladChart[i].title}
                                                      <S.ChartArtist>
                                                         {BaladChart[i].artist}
                                                      </S.ChartArtist>
                                                   </S.ChartTitle>
                                                </S.ThumbnailChart>
                                             </li>
                                          );
                                       }
                                    })}
                                 </S.RecommendTrackList>
                              </S.RecommendTrackHome>
                           </S.AlbumList>
                        </Link>
                        <S.Btn_play_type1 title="오늘 퇴근하고 혼술하며 함께 할 인디">
                           전체듣기
                        </S.Btn_play_type1>
                     </S.SwiperSlide>

                     {/* <S.SwiperSlide>
                        <Link
                           to="/detail/dance"
                           title="기분전환에 딱! 드라이빙 댄스"
                           className="MIL-recommend"
                        >
                           <S.RecommendHead>
                              <S.RecommendHeadH4>
                                 기분전환에 딱! 드라이빙 댄스
                              </S.RecommendHeadH4>
                           </S.RecommendHead>
                           <S.TotalStatusData>
                              총 18곡
                              <S.BarNormal>|</S.BarNormal>
                              2022.5.11
                           </S.TotalStatusData>
                        </Link>
                     </S.SwiperSlide> */}
                     
                  </S.ThumbnailWiper>
               </S.SectionContents>
            </S.Recommendsection>
         </S.sectionInner>
      </S.SectionHome>
   );
};

export default ChartRec;
