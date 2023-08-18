import React from 'react';
import Link from 'next/link';

import CodeBlock from '../CodeBlock';

const Tutorial = (props: {}): JSX.Element => {
    return <div className='container mx-auto px-4 lg:!max-w-4xl xl:!max-w-5xl'>
        <div className='flex flex-col gap-6 sm:gap-8 lg:gap-10'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                How do I find a Website or Service?
            </h2>

            <p className='sm:text-lg md:text-xl text-gray-800 dark:text-gray-300'>
                Simply browse from the menu or press <CodeBlock>command / ctrl + k</CodeBlock > to go to the search bar.
            </p>

            <p className='sm:text-lg md:text-xl text-gray-800 dark:text-gray-300'>
                You can also go to the <CodeBlock><Link href={'/catalog'} className='text-sky-600'>/catalog</Link></CodeBlock > page and browse from there.
            </p>

        </div>
    </div>;
};



export default Tutorial;