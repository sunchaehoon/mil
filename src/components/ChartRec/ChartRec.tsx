import React, { useEffect, useState, Component, useRef } from 'react';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import BaladChartSlide from 'components/ChartSlide/BaladChartSlide/BaladChartSlide';
import DanceChartSlide from 'components/ChartSlide/DanceChartSlide/DanceChartSlide';

const ChartRec = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const [disLeft, setDisLeft] = useState('none');
   const [disRight, setDisRIght] = useState('none');
   const [counter, setCounter] = useState<number>(0);

   const [slideLef, setSlideLef] = useState(0);

   useEffect(() => {
      if (counter <= 0) {
         setDisRIght('block');
         setDisLeft('none');
      } else if (counter >= 1) {
         setDisLeft('block');
         setDisRIght('none');
      }
   }, [counter]);

   const leftBtnClickHandler = () => {
      setCounter(counter - 1);
   };
   const rightBtnClickHandler = () => {
      setCounter(counter + 1);
   };

   return (
      <S.SectionHome>
         <S.SectionInner>
            <S.Recommendsection>
               <S.SectionContents>
                  <S.ThumbnailWiper CurrentCounter={counter}>
                     <BaladChartSlide />
                     <DanceChartSlide />
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
            </S.Recommendsection>
         </S.SectionInner>
      </S.SectionHome>
   );
};

export default ChartRec;
