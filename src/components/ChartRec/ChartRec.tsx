import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

const ChartRec = () => {
   const [data, setData]: any = useState([]);

   const pgTitle = document.querySelector('title');
   if (pgTitle instanceof Element) {
      pgTitle.innerHTML = 'MIL | Home';
   }

   useEffect(() => {
      axios
         .get('http://localhost:4000/BaladChart')
         .then((response) => {
            setData(response.data);
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
                           className="MIL-recommend"
                           to="/detail/ballad"
                           title="오늘 퇴근하고 혼술하며 함께 할 인디 상세보기"
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
                                    {data.map(function (
                                       a: string | number,
                                       i: number,
                                    ): any {
                                       return (
                                          <li key={data[i].rank}>
                                             <S.ThumbnailChart>
                                                <img
                                                   src={data[i].url}
                                                   alt={`${data[i].artist} / ${data[i].url}`}
                                                   className="chart_thumbnail"
                                                />
                                                <S.ChartTitle>
                                                   {data[i].title}
                                                   <S.ChartArtist>
                                                      {data[i].artist}
                                                   </S.ChartArtist>
                                                </S.ChartTitle>
                                             </S.ThumbnailChart>
                                          </li>
                                       );
                                    })}
                                 </S.RecommendTrackList>

                                 <S.RecommendTrackList className="recommend_track_list">
                                    {data.map(function (
                                       a: string | number,
                                       i: number,
                                    ): any {
                                       while (i >= 4) {
                                          return (
                                             <li key={data[i].rank}>
                                                <S.ThumbnailChart>
                                                   <img
                                                      src={data[i].url}
                                                      alt={`${data[i].artist} / ${data[i].url}`}
                                                      className="chart_thumbnail"
                                                   />
                                                   <S.ChartTitle>
                                                      {data[i].title}
                                                      <S.ChartArtist>
                                                         {data[i].artist}
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
                  </S.ThumbnailWiper>
               </S.SectionContents>
            </S.Recommendsection>
         </S.sectionInner>
      </S.SectionHome>
   );
};

export default ChartRec;
