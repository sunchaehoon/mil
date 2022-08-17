import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import BaladChartSlide from 'components/ChartSlide/BaladChartSlide/BaladChartSlide';
import DanceChartSlide from 'components/ChartSlide/DanceChartSlide/DanceChartSlide';

const ChartRec = () => {
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
      <S.SectionHome>
         <S.sectionInner>
            <S.Recommendsection>
               <S.SectionContents>
                  <S.ThumbnailWiper>

                     <BaladChartSlide />
                     {/* <DanceChartSlide /> */}
                  </S.ThumbnailWiper>
               </S.SectionContents>
            </S.Recommendsection>
         </S.sectionInner>
      </S.SectionHome>
   );
};

export default ChartRec;
