import styled from "styled-components";

export const SectionHome = styled.div`
    padding: 100px 80px 0 80px;
    margin: 0 auto;
    background-color: #fff;
`;

export const sectionInner =  styled.div`
    padding-top: 10px;
    max-width: 955px;
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
    position: relative;
    width: 955px;
    overflow: visible;
    left: 0;
    font-size: 26.5px;

    @media screen and (max-width: 900px) {
        font-size: 25px;
    }
    @media screen and (max-width: 800px) {
        font-size: 23.5px;
    }
`;

export const RecommendHead = styled.div`
    z-index: 4;
    position: absolute;
    width: 24%;
    padding: 40px 0 0 40px;
    font-size: 1em;
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

    /* font-size: 26.8px; */
    font-weight: 800;
    line-height: 40px;
    color: #fff;
    user-select: none;
`;

export const TotalStatusData = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    user-select: none;
`;

export const BarNormal = styled.span`
    padding: 0 10px;
    font-size: 9px;
    color: #fff;
    opacity: .3;
    user-select: none;
`;

export const AlbumList = styled.div`
    z-index: 4;
    position: absolute;
    top: 30px;
    left: 33.5%;
`;

export const RecommendTrackHome = styled.div`
    position: relative;
    height: 260px;
    overflow: hidden;
`;

export const RecommendTrackList = styled.ul`
    float: left;
    li {
        display: block;
        height: 45px;
        width: auto !important;
        margin-top: 0;
        margin-right: 0;
        margin-left: 0;
        padding: 10px 0;
    }
`;

export const ThumbnailChart = styled.div`
    display: inline-block;
    font-size: 0px;
    color: #fff;
    vertical-align: top;
`;

export const ChartTitle = styled.strong`
    margin: 5px 0 0 20px;
    max-width: 210px;
    width: 210px;  

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
    @media screen and (max-width: 1050px) {
        font-size: 12px;
        width: 190px;
    }
`;

export const ChartArtist = styled.span`
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: #fff;
    opacity: .6;
    @media screen and (max-width: 1050px) {
        font-size: 9px;
    }
`;

export const Btn_play_type1 = styled.button`
    left: 40px;
    top: auto;
    bottom: 40px;

    z-index: 4;
    position: absolute;
    color: transparent;
    text-indent: 100%;
    background-image: url('https://www.music-flo.com/img/sp_button.8292213d.png');
    background-position: -119px -208px;
    width: 54px;
    height: 54px;
    user-select: none;

    :hover {
        background-position: -60px -208px;
    }
`;
