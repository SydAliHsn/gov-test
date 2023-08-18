import React from 'react';

const About = (props: {}): JSX.Element => {
    return <div className='pt-10 flex flex-col gap-8'>
        <h1 className='sm:text-center text-4xl sm:text-5xl font-bold'>About Govsites</h1>
        <p className='text-lg leading-8 pt-5'>In an era dominated by digital information, GovSites emerges as a vital tool, streamlining the journey to essential government services. </p>

        <p className='text-lg leading-8'>Our platform serves as a dedicated hub, meticulously curating verified government websites and services, providing users with a trustworthy gateway to accurate information. We understand the complexities individuals face while navigating official channels, and GovSites was designed to empower citizens with a seamless, secure, and user-centric experience.</p>

        <p className='text-lg leading-8'>
            At GovSites, our core principle revolves around simplifying interactions with the government. We've taken the guesswork out of online searches, offering a curated directory that eliminates misinformation and ensures direct access to legitimate resources. Our mission is to enhance accessibility, empower informed decision-making, and foster a stronger connection between citizens and the services they rely on. Join us in this transformative journey as we redefine how individuals engage with government services, making reliable information and resources readily available to all.
        </p>
    </div>;
};

export default About;