import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ChartRec from 'components/ChartRec/ChartRec';
import * as S from './Styled';
import { Link } from 'react-router-dom';
import axios from 'axios';

// export const getPosts = async () => {
//     const BaladChat = await axios.get('http://localhost:4000/posts');
//     return BaladChat.data;
// };

const Home = () => {
   return (
      <>
         <S.App>
            <Header />

            <S.Wrap>
               <ChartRec />
            </S.Wrap>
         </S.App>
      </>
   );
};

export default Home;
