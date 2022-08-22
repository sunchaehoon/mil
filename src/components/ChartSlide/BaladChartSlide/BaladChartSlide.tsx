import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';


const BaladChartSlide = () => {
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
      <S.SwiperSlide>
         <Link
            to="/detail/ballad"
            title="오늘 퇴근하고 혼술하며 함께 할 인디 상세보기"
            className="MIL-recommend-1p"
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
   );
};

export default BaladChartSlide;
