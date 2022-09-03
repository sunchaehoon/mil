import styled from "styled-components";

type delInputBtn = {
    display: string;
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
    width: 680px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 70px auto 0 auto;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    margin-top: 100px;
`;

export const FormWrapper = styled.div`
    width: 100%;
    text-align: left;
    max-width: 560px;
    margin: 0 auto;
`;

export const FormId = styled.div`
    position: relative;
    margin: 10px 0 50px 0;
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
    display: block !important;
    position: absolute;
    width: 29px;
    height: 29px;
    text-indent: -9999em;
    background-size: 100%;
    top: 1rem;
    display: ${(props: delInputBtn) => props.display};
`;

export const InputPw = styled(InputId)`
    
`;







