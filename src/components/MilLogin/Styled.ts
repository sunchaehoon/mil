import styled from "styled-components";

type delIdInputBtn = {
    display: string;
}

type pwToggle = {
    pwToggle: boolean;
}

type idSaveToggle = {
    idSaveToggle: boolean;
}

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

export const MainSection = styled.section`
    padding: 90px 85px 40px;
    height: 100%;
    background-color: #fff;
`;

export const ViewWrap = styled.div`
    height: 100%;
`;

export const SignContainer = styled.div`
    padding: 50px 120px;
    width: 682px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 70px auto 0 auto;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(217, 217, 217);
    border-image: initial;
    margin-top: 100px;
`;

export const FormWrapper = styled.div`
    width: 100%;
    text-align: left;
    max-width: 560px;
    margin: 0 auto;
`;

export const FormLgn = styled.div`
    position: relative;
    margin: 10px 0 20px 0;
    margin-bottom: 30px;
`;

export const InputId = styled.input`
    font-size: 16px;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #ebebeb;
    height: 58px;
    vertical-align: middle;
    color: #181818;
    padding-right: 38px;
    ::placeholder {
        color: #bdbdbd;
    }
`;

export const InputResetBtn = styled.button`
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAAXNSR0IArs4c6QAAAeFJREFUaAXtmDFSwzAQRWPaFKlgnDpluAFV0lJxUipaU3GDpHTtDDSkcG32gzTjUSxHkVai+ZoxdtbSat+TMCaLBRsN0AAN0AAN0AAN0AAN0AAN0AAN0AANpBqoUhPY8ev1+k2uV8MwvJxOpy8bjznXdX1fVdWrjD13Xfcck8Mdc+cGEj4D8knGNyg0No8Z25hcq9g87jg1UKykJD/I8ShHFKyFNDkOJqd8TG9qWxeluIVKaB+6jVPGhmhQBY2FzQ2JutRBJ2CPEtv5VtZAvkufrRzY+sG7QPoGtyygmN0BmIQN6RNMcqVjNtBrsCUhUUtWUB8s4tLsdp1c7b8uej+zg6LUidVDGL+TRSAxWRFQTOTAIlQMEpOpvTAg2VxbLpcXUqdiczlS7l1MnpLMN3az2Tz0fd/Ifbtd0fX3WmD3bdt++sZqxbODupAAQ/Fj8BKwWUGnIO3qzd3TWsVxnmygISBuHynM+wY1LjrmOguo84Q9zm3NUrDqoLdA2pUpAasK6kLeshVTxlphc2c1UI1CNXL4YNVeGMx3PPbvZNRDxfwrt5Ni8da0NTl9td8UVwOVWc9S2IecoyBt1YDFwwu55KuUbxvnmQZogAZogAZogAZogAZogAZogAZogAb+38AP9dn9eh9f170AAAAASUVORK5CYII=') 0 0 no-repeat;
    left: auto;
    right: 0;
    position: absolute;
    width: 1.825rem;
    height: 1.825rem;
    text-indent: -9999em;
    background-size: 100%;
    top: 1rem;
    display: ${(props: delIdInputBtn) => props.display};
`;

export const InputPwResetBtn = styled(InputResetBtn)`
    right: 29px;
`;

export const InputPw = styled(InputId)`
`;

export const ShowPwBtn = styled.button`
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAB0CAYAAADU6SE0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVFRUNDMzBBODlGMTFFODg0RjlEQkM1ODhCNUFBNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVFRUNDMzFBODlGMTFFODg0RjlEQkM1ODhCNUFBNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QjRGNzhGNUE4MzYxMUU4ODRGOURCQzU4OEI1QUE1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QjRGNzhGNkE4MzYxMUU4ODRGOURCQzU4OEI1QUE1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrpR5c4AAAaLSURBVHja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');
    background-position: ${(props: pwToggle) => (!props.pwToggle ? "0 0" : "0 -94%")};
    width: 1.825rem;
    height: 1.825rem;
    background-size: 100%;
    position: absolute;
    top: 1.0625rem;
    right: 0;
`;

export const SaveLogin = styled.div`
    margin-top: -10px;
    width: 100%;
    margin: 0 auto;
`;

export const SaveId = styled.p`
    margin-bottom: 20px;
`;

export const SignSaveId = styled.label`
    display: inline-block;
    position: relative;
`;

export const SaveIdBox = styled.input`
    position: absolute;
    left: -9999em;
`;

export const SaveIdSpan = styled.span`
    color: #333;
    overflow: hidden;
    display: block;
    font-size: 16px;
    padding: 0 0 0 38px;
    min-height: 25px;
    line-height: 25px;
    user-select: none;
    font-weight: 100;
    font-family: 'Happiness-Sans-Title';

    @font-face {
        font-family: 'Happiness-Sans-Title';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Title.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    ::before {
        content: "";
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        left: 0;
        top: 2px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABkCAYAAADE6GNbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkQ1NkNGNzlENDJEMTFFODlFNjFFQUY4MDkxOTAzRDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ1NkNGN0FENDJEMTFFODlFNjFFQUY4MDkxOTAzRDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRDU2Q0Y3N0Q0MkQxMUU4OUU2MUVBRjgwOTE5MDNEMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRDU2Q0Y3OEQ0MkQxMUU4OUU2MUVBRjgwOTE5MDNEMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm7g8NEAAAO1SURBVHja7JtNKHRhFMf/dxoNUUqRWaixsZkNJWpKNJSSlZ0iydfKxkchiRT5XqB8ZkOysGOhpjELY8OCxWRFYjHKApliQvd9jnvng8X7Gh/jPm/n1Mw854mc35z7nOc81/8q0E1VVWV/f79RfDYI1y5eKTCmBcTLpyjKssPhWBKfKk0q9HZ4eGgNBoOrAsIJiUxAuC0WS01+fr7frGfiFUJMqjabTUlNTUVCQoIhg396esLd3R3Oz89V8eU79QSUKV6vt0kMFggiNzdXMZvNUmTj+fkZR0dHBCMSozSb9DUByoQsEGQUK8Wsr+8Gk76wQZeTbBYVs90Uqk5GXRN/s6iYU0z4T4xBGIRBGIRBGIRBGIRBGIRBGIRBGIRBGIRBGIRBGIRBGIRBGIRBGIRBGOQ9CGk7XhUFsllUzAEC8dGIZBGyWVTMPhOpbGhE2g6SRchiFCvFTGNiUHRRjUtSUQ3pUNwOh6Psv5E5KaFJ2YVnb+RAPT0OQRkCM2oWIvF5PFHz9FZerlofH7Eqhk7JCpc7MRE1OzuKn/RaiqQQZE6KnRiU4mK1SUwsSL6xN4t9BA2ytyfEEFbQSW52sUYMW2Y/bMTAbTyDMAiDMMiXLTlZBGaSHKRB9BlbW8DcXGy/ZyhVf309UFurjTMzJc1IdTVQVxc5a8zOSghSVQW0tET8mRlgZ0cykIoKoLU14i8uApubklWt0lKgoyNyfF0Vx7u1NcnKb1ER0N0dKbOUhaUlyfaRggKgr48eL9L87W1gejqOG2JhITA6ChQXf/4P5uUBg4P0NI7mu1zA+Hicd3aq8/Rt9vcDlZWfOMaJs+jQEGCxaP7eHjA8/D23nmIC2d0Nn5HR3h4bTE4OMDICJCVp/sEBMDAAvLz8Qq+1sQGsr8cOk50NjI0BKfqh+vgY6O2l+7i/2DTOz8cGk5UFTEzQo3aaf3ICdHUBwaABut+PwlC/RBBpaZp/egp0dgIPDwZq4/8Fk54OTE0BGRmaf3Gh/Uwg8DMl/UvdL8GEGr4QDJnXC0xOAlar5vv9QFsbcHv7c3sT3TL9cvGjho9gQp3r9XUkEzSmXurqSoIT4vvLLARxc6Nl4qchvrVFiYYhu7/XLrXLy/i0Pd96QiQYyojNBqysAGdn8evfvmWN8F0UBmEQBmEQBmEQo4CIliIgOwQxhBV0kpuP/s++LDsFMbwq6EpK4IKcohoyt8eDMtI0qiQVogkZISh2YnijoBOZadRFNnajSjv04uSjy0lkIqyg+yPAAHL6cgYajojrAAAAAElFTkSuQmCC');
        background-position: ${(props: idSaveToggle) => (!props.idSaveToggle ? "0 0" : "0 -20px")};
        background-repeat: no-repeat;
        background-size: 100%;
    }
`;

export const LoginBtnSpan = styled.span`
    font-family: 'Happiness-Sans-Title';
    font-size: 1.2rem;
    font-weight: 100;
    @font-face {
        font-family: 'Happiness-Sans-Title';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Title.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`;

export const FindIdPw = styled.div`
    width: 100%;
    position: absolute;
    margin-top: 0.9375rem;
`;

export const FindIdLi = styled.li`
    position: relative;
    padding: 0 0.5625rem;
    display: inline-block;
    :first-child {
        padding-left: 0;
    }
`;










