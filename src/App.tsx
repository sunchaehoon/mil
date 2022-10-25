import React, {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import GlobalStyle from "components/GlobalStyle/GlobalStyled";
import {
  RecoilRoot, 
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
