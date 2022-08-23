import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

const WakeupChartSlide = () => {
   const [WakeupChart, setWakeupChart]: any = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:4000/WakeupChart')
         .then((response) => {
            setWakeupChart(response.data);
         })
         .catch(() => {
            console.log('something wrong.');
         });
   }, []);

   return (
      <>
         <S.SwiperSlide>
            <Link
               to="/detail/wakeup"
               title="달콤한 목소리로 당신의 아침을 Wake Up"
               className="MIL-recommend-1p"
            >
               <S.RecommendHead>
                  <S.RecommendHeadH4>
                     달콤한 목소리로 당신의 아침을 Wake Up
                  </S.RecommendHeadH4>
                  <S.TotalStatusData>
                     총 24곡
                     <S.BarNormal>|</S.BarNormal>
                     2019.12.27
                  </S.TotalStatusData>
               </S.RecommendHead>
               <S.AlbumList>
                  <S.RecommendTrackHome>
                     <S.RecommendTrackList>
                        {WakeupChart.map(function (
                           a: string | number,
                           i: number,
                        ): any {
                           return (
                              <li key={WakeupChart[i].rank}>
                                 <S.ThumbnailChart>
                                    <img
                                       src={WakeupChart[i].url}
                                       alt={`${WakeupChart[i].artist} / ${WakeupChart[i].url}`}
                                       className="chart_thumbnail"
                                    />
                                    <S.ChartTitle>
                                        {WakeupChart[i].title}
                                        <S.ChartArtist>
                                            {WakeupChart[i].artist}
                                        </S.ChartArtist>
                                    </S.ChartTitle>
                                 </S.ThumbnailChart>
                              </li>
                           );
                        })}
                     </S.RecommendTrackList>

                     <S.RecommendTrackList className='recommend_track_list'>
                     {WakeupChart.map(function (
                        a: string | number,
                        i: number,
                     ): any {
                        while (i >= 4) {
                           return (
                              <li key={WakeupChart[i].rank}>
                                 <S.ThumbnailChart>
                                    <img
                                       src={WakeupChart[i].url}
                                       alt={`${WakeupChart[i].artist} / ${WakeupChart[i].title}`}
                                       className="chart_thumbnail"
                                    />
                                    <S.ChartTitle>
                                       {WakeupChart[i].title}
                                       <S.ChartArtist>
                                          {WakeupChart[i].artist}
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
            <S.Btn_play_type1 title='달콤한 목소리로 당신의 아침을 Wake Up'>
                전체듣기
            </S.Btn_play_type1>
         </S.SwiperSlide>
      </>
   );
};

export default WakeupChartSlide;
