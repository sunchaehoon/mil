import styled from "styled-components";

export const App = styled.div`
    padding-bottom: 111px;
`;

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1600px;
    min-width: 955px;
`;

export const SectionHome = styled.div`
    padding: 100px 80px 0 80px;
    margin: 0 auto;
    background-color: #fff;
`;

export const sectionInner =  styled.div`
    padding-top: 10px;
    max-width: 900px;
    min-width: 600px;
    margin: 0 auto;
`;

export const Recommendsection = styled.section`
    display: block;
    padding-top: 0!important;
`;

export const SectionContents = styled.div`
    margin-bottom: 27px;
    border-radius: 6px;
    min-height: 189px;
    margin-top: 6px;
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
`;

export const ThumbnailWiper = styled.ul`
    /* transition-duration: 0ms;
    transform: translate3d(-1910px, 0px, 0px);
    margin-top: -16px;
    margin-left: 0;
    overflow-x: visible;
    overflow-y: visible; */

    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
`;

export const SwiperSlide = styled.li`
    margin-top: 16px;
    position: relative;
    width: 955px;
    overflow: visible;
    margin: 0 auto;
`;

export const RecommendHead = styled.div`
    z-index: 4;
    position: absolute;
    width: 230px;
    padding: 40px 0 0 40px;
    font-size: 28px;
    font-weight: 800;
    line-height: 40px;
    color: #fff;
`;

export const RecommendHeadH4 = styled.h4`
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin-bottom: 20px;

    font-size: 26.8px;
    font-weight: 800;
    line-height: 40px;
    color: #fff;
`;

export const TotalStatusData = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
`;

export const BarNormal = styled.span`
    padding: 0 10px;
    font-size: 9px;
    color: #fff;
    opacity: .3;
`;

export const AlbumList = styled.div`
    z-index: 4;
    position: absolute;
    top: 30px;
    left: 324px;
`;

export const RecommendTrackHome = styled.div`
    position: relative;
    height: 260px;
    overflow: hidden;
`;

export const RecommendTrackList = styled.ul`
    float: left;
`;

export const ThumbnailChart = styled.div`
    display: inline-block;
    font-size: 0;
    color: #fff;
    vertical-align: top;
`;

export const ChartTitle = styled.strong`
    margin: 5px 0 0 20px;
    width: 210px;
    max-width: 210px;

    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    font-size: 16px;
    font-family: 'GangwonEdu_OTFBoldA';

    @font-face {
        font-family: 'GangwonEdu_OTFBoldA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;