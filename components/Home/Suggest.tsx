import React from 'react';
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs'



const Suggest = (props: {}): JSX.Element => {
    return <div className='container mx-auto px-4 lg:!max-w-4xl xl:!max-w-5xl pb-16'>
        <div className='flex flex-col gap-6 sm:gap-8 lg:gap-10'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                I'd like to Suggest a Website or Service.
            </h2>

            <p className='sm:text-lg md:text-xl text-gray-800 dark:text-gray-300'>
                If you have a service in mind that seems to be missing, give us a shout on <Link
                    className='font-medium' href={'https://twitter.com'}> <BsTwitter className='inline text-xl text-blue-500' />{' '}
                    <span className='underline underline-offset-4 hover:no-underline'>Twitter</span></Link>.
            </p>
        </div >
    </div >;
};

export default Suggest;