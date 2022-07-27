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
    width: 955px;
    padding: 100px 80px 0 80px;
    margin: 0 auto;
    background-color: #fff;
`;

export const sectionInner =  styled.div`
    padding-top: 10px;
    max-width: 1600px;
    min-width: 800px;
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
    transition-duration: 0ms;
    transform: translate3d(-1910px, 0px, 0px);
    margin-top: -16px;
    margin-left: 0;
    overflow-x: visible;
    overflow-y: visible;
`;

export const SwiperSlide = styled.li`
    margin-top: 16px;
    position: relative;
    width: 955px;
    overflow: visible;
    margin-left: 0;
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