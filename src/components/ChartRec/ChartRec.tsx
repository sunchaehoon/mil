import React, { useEffect, useState, Component } from 'react';
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

// interface NextArrowProps {
//    className?: any;
//    style?: any;
//    onClick: React.MouseEventHandler<HTMLDivElement>;
// }

// export default function NextArrow({ className, style, onClick }: NextArrowProps) {
//    return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
//  }
const ChartRec = () => {
   const slides = ['Balad', 'Dance'];
   const [currentIndex, setCurrentIndex] = useState(0);

   return (
      <S.SectionHome>
         <S.SectionInner>
            <S.Recommendsection>
               <S.SectionContents>
                  <S.ThumbnailWiper>
                     <div className="slider-area">
                        <div className="slider">
                           <div className="slider-list">
                              <div
                                 className="slider-track"
                                 style={{
                                    transform: `translateX(${
                                       (0 / slides.length) *
                                       (0.5 + currentIndex)
                                    }%)`,
                                 }}
                              >
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
                              </div>
                           </div>
                        </div>
                     </div>
                  </S.ThumbnailWiper>
                  
               </S.SectionContents>
               <S.PagingArrow>
                  <S.PreviousArrow>
                     <span>이전</span>
                  </S.PreviousArrow>
                  <S.ForwardArrow>
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
