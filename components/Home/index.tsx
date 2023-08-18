import React from 'react';
import Hero from './Hero';
import Tutorial from './Tutorial';
import Suggest from './Suggest';

const Home = (props: {}): JSX.Element => {
    return <main className='space-y-12 sm:space-y-32 gradient-bg '>
        <Hero />
        <Tutorial />
        <Suggest />
    </main>
};

export default Home;