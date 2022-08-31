import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ChartRec from 'components/ChartRec/ChartRec';
import * as S from './Styled';

// export const getPosts = async () => {
//     const BaladChat = await axios.get('http://localhost:4000/posts');
//     return BaladChat.data;
// };

const Home = () => {
   const pgTitle = document.querySelector('title');
   if (pgTitle instanceof Element) {
      pgTitle.innerHTML = 'MIL | Home';
   }

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
