import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BaladChartSlide from './BaladChartSlide/BaladChartSlide';
import DanceChartSlide from './DanceChartSlide/DanceChartSlide';

const Container = styled.div`
   overflow: hidden;
`;

const StyleSlider = styled(Slider)`
   .slick-slider div {
      outline: none;
   }

   .slick-list {
      width: 1950px;
   }
`;

export default class SimpleSlider extends Component {
   render() {
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

      return (
         <Container>
            <StyleSlider {...settings}>
               <BaladChartSlide />
               <DanceChartSlide />
            </StyleSlider>
         </Container>
      );
   }
}
