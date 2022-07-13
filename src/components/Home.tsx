import React, {useEffect, useState} from 'react';
import Header from './Header/Header';

const Home = (initialTitle :any) => {

    interface Title {
        title: string | undefined,
        setTitle: string | undefined;
    }
    const [title, setTitle] = useState<Title | null>(null);


    return (
        <>
            <Header />
        </>
    );
};

export default Home;