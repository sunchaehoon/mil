import React, { useEffect, useState, Component, useRef } from 'react';
import * as S from './Styled';
import './style.css';
import axios from 'axios';
import BaladChartSlide from 'components/ChartSlide/BaladChartSlide/BaladChartSlide';
import DanceChartSlide from 'components/ChartSlide/DanceChartSlide/DanceChartSlide';
import WakeupChartSlide from 'components/ChartSlide/WakeupChartSlide/WakeupChartSlide';

const ChartRec = () => {
   const [disLeft, setDisLeft] = useState('none');
   const [disRight, setDisRight] = useState('none');
   const [counter, setCounter] = useState<number>(0);

   useEffect(() => {
      if (counter <= 0) {
         setDisLeft('none');
         setDisRight('block');
      } else if (counter >= 2) {
         setDisLeft('block');
         setDisRight('none');
      } else {
         setDisLeft('block');
         setDisRight('block');
      }
   }, [counter]);

   const leftBtnClickHandler = () => {
      setCounter(counter - 1);
   };
   const rightBtnClickHandler = () => {
      setCounter(counter + 1);
   };
   const underBarClick = (n: number) => {
      setCounter(n);
   };

   return (
      <S.SectionHome>
         <S.SectionInner>
            <S.Recommendsection>
               <S.SectionContents>
                  <S.ThumbnailWiper CurrentCounter={counter}>
                     <BaladChartSlide />
                     <DanceChartSlide />
                     <WakeupChartSlide />
                  </S.ThumbnailWiper>
               </S.SectionContents>
               <S.PagingArrow>
                  <S.PreviousArrow
                     display={disLeft}
                     onClick={leftBtnClickHandler}
                  >
                     <span>이전</span>
                  </S.PreviousArrow>
                  <S.ForwardArrow
                     display={disRight}
                     onClick={rightBtnClickHandler}
                  >
                     <span>다음</span>
                  </S.ForwardArrow>
               </S.PagingArrow>
               <S.PagingDot>
                  <S.SwiperBullet
                     CurrentCounter={counter}
                     n={0}
                     onClick={() => {
                        underBarClick(0);
                     }}
                  />
                  <S.SwiperBullet
                     CurrentCounter={counter}
                     n={1}
                     onClick={() => {
                        underBarClick(1);
                     }}
                  />
                  <S.SwiperBullet
                     CurrentCounter={counter}
                     n={2}
                     onClick={() => {
                        underBarClick(2);
                     }}
                  />
               </S.PagingDot>
            </S.Recommendsection>
         </S.SectionInner>
      </S.SectionHome>
   );
};

export default ChartRec;
