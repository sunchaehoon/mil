import React, {useEffect, useState} from 'react';
import Header from './Header/Header';

const Home = () => {

    const pgTitle = document.querySelector("title");
    if(pgTitle instanceof Element) {
        pgTitle.innerHTML = "MIL | Home";
    }


    return (
        <>
            <Header />
        </>
    );
};

export default Home;