import React, { useEffect, useState, Component, useRef } from 'react';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import BaladChartSlide from 'components/ChartSlide/BaladChartSlide/BaladChartSlide';
import DanceChartSlide from 'components/ChartSlide/DanceChartSlide/DanceChartSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import SimpleSlider from 'components/ChartSlide/SimpleSlider';


const ChartRec = () => {
   const slides = ['Balad', 'Dance'];
   const slideWidth = 955;
   const [currentIndex, setCurrentIndex] = useState(0);

   const [slideLef, setSlideLef] = useState(0);
   const curSlideLef: any = useRef();

   function PrevBtn() {
      if (currentIndex === 0) {
         return;
      }
      setCurrentIndex((prev) => prev - 1);
      curSlideLef.current.style.transform = `translateX(${955}px)`;
   }

   function ForwBtn() {
      if(currentIndex === 1) {
         return;
      }
      setCurrentIndex((prev) => prev + 1);
      curSlideLef.current.style.transform = `translateX(-${955}px)`;
   }

   return (
      <S.SectionHome>
         <S.SectionInner>
            <S.Recommendsection>
               <S.SectionContents>
                  <S.ThumbnailWiper ref={curSlideLef}>
                     {/* <div className="slider-area">
                        <div className="slider">
                           <div className="slider-list">
                              <div
                                 className="slider-track"
                                 style={{
                                    transform: `translateX(${
                                       (-100 / slides.length) *
                                       (0.5 + currentIndex)
                                    }%)`,
                                 }}
                              > */}
                     {/* {slides.map((color, index) => (
                                    <div key={index} className="slider-item">
                                       <a>
                                          <div style={{ background: color }}>
                                             {index}
                                          </div>
                                       </a>
                                    </div>
                                 ))} */}
                     <BaladChartSlide />
                     <DanceChartSlide />
                     {/* </div>
                           </div>
                        </div>
                     </div> */}
                  </S.ThumbnailWiper>
               </S.SectionContents>
               <S.PagingArrow>
                  <S.PreviousArrow onClick={PrevBtn}>
                     <span>이전</span>
                  </S.PreviousArrow>
                  <S.ForwardArrow onClick={ForwBtn}>
                     <span>다음</span>
                  </S.ForwardArrow>
               </S.PagingArrow>
            </S.Recommendsection>
         </S.SectionInner>
      </S.SectionHome>
   );
};

export default ChartRec;

const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   autoplay: true,
   autoplaySpeed: 2000,
   slidesToShow: 2,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0px',
};

const ChartSlider = styled(Slider)`
   .slick-list {
      width: 2955px;
      margin-left: 0;
   }

   .slick-track {
      /* overflow-x: hidden; */
   }
`;
