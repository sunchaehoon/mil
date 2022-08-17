import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

const DanceChartSlide = () => {
   const [DanceChart, setDanceChart]: any = useState([]);
   useEffect(() => {
      axios
         .get('http://localhost:4000/DanceChart')
         .then((response) => {
            setDanceChart(response.data);
         })
         .catch(() => {
            console.log('something wrong.');
         });
   }, []);
   return (
      <S.SwiperSlide>
         <Link
            to="/detail/dance"
            title="기분전환에 딱! 드라이빙 댄스"
            className="MIL-recommend"
         >
            <S.RecommendHead>
               <S.RecommendHeadH4>
                  기분전환에 딱! 드라이빙 댄스
               </S.RecommendHeadH4>

               <S.TotalStatusData>
                  총 18곡
                  <S.BarNormal>|</S.BarNormal>
                  2022.5.11
               </S.TotalStatusData>
            </S.RecommendHead>
            <S.AlbumList>
               <S.RecommendTrackHome>
                  <S.RecommendTrackList>
                     {DanceChart.map(function (
                        a: string | number,
                        i: number,
                     ): any {
                        return (
                           <li key={DanceChart[i].rank}>
                              <S.ThumbnailChart>
                                 <img
                                    src={DanceChart[i].url}
                                    alt={`${DanceChart[i].artist} / ${DanceChart[i].url}`}
                                    className="chart_thumbnail"
                                 />
                                 <S.ChartTitle>
                                    {DanceChart[i].title}
                                    <S.ChartArtist>
                                       {DanceChart[i].artist}
                                    </S.ChartArtist>
                                 </S.ChartTitle>
                              </S.ThumbnailChart>
                           </li>
                        );
                     })}
                  </S.RecommendTrackList>

                  <S.RecommendTrackList className="recommend_track_list">
                     {DanceChart.map(function (
                        a: string | number,
                        i: number,
                     ): any {
                        while (i >= 4) {
                           return (
                              <li key={DanceChart[i].rank}>
                                 <S.ThumbnailChart>
                                    <img
                                       src={DanceChart[i].url}
                                       alt={`${DanceChart[i].artist} / ${DanceChart[i].url}`}
                                       className="chart_thumbnail"
                                    />
                                    <S.ChartTitle>
                                       {DanceChart[i].title}
                                       <S.ChartArtist>
                                          {DanceChart[i].artist}
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
      </S.SwiperSlide>
   );
};

export default DanceChartSlide;
