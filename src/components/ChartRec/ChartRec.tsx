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
import Slider, {Settings} from 'react-slick';
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

   // const ChartSlider = () => {
   //    const settings = {
   //       dots: true,
   //       infinite: true,
   //       speed: 500,
   //       autoplay: true,
   //       autoplaySpeed: 2000,
   //       slidesToShow: 2,
   //       slidesToScroll: 1,
   //       centerMode: true,
   //       centerPadding: '0px',
   //    };
   // }
   


   return (
      <S.SectionHome>
         <S.sectionInner>
            <S.Recommendsection>
               <S.SectionContents>
                  <S.ThumbnailWiper>

                     <SimpleSlider />

                  </S.ThumbnailWiper>
               </S.SectionContents>
            </S.Recommendsection>
         </S.sectionInner>
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
