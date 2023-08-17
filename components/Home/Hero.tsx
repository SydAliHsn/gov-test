import React from 'react';
// import { Link } from 'nextra-theme-docs';
import Link from 'next/link';

const Hero = (props: {}): JSX.Element => {

    return <div className='container mx-auto px-4 lg:px-0 pb-20 pt-20 md:pt-36'>
        <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 text-center'>
            <h1 className='max-w-7xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold capitalize'>
                A directory of
                <span className='text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-pink-600'> authentic </span>
                government <span className='hidden sm:inline'>web</span>sites
            </h1>

            <p className='sm:text-lg md:text-xl max-w-4xl 2xl:max-w-5xl text-gray-800 dark:text-gray-300'>Welcome to Govsites! It's a simple collection of <span className='font-bold'> Australian government's</span> websites, apps, services and tools available to every day Australians. This site only contains links to authentic Australian government sites and services.</p>

            {/* <div className='flex gap-4 justify-center'> */}
            <Link className='bg-gradient-to-r from-purple-500 to-indigo-600 py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-white font-semibold text-lg' href={'/catalog'}>Explore All Sites</Link>
            {/* </div> */}
        </div>
    </div>;
};

export default Hero;