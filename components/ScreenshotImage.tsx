import React from 'react';
import Image from 'next/image';


const ScreenshotImage = ({ imageUrl }: { imageUrl: string }): JSX.Element => {
    return <div className="w-full aspect-video relative mt-8 overflow-hidden rounded-lg shadow-md shadow-gray-400 dark:shadow-none"><Image src={imageUrl} fill={true} alt="ScreenshotImage" /></div>
};

export default ScreenshotImage;