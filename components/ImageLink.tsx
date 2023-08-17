import React from 'react';
import Image from 'next/image';


const ImageLink = ({ url }: { url: string }): JSX.Element => {
    return <div>
        <img src={url} alt="Screenshot" />
    </div>;
};

export default ImageLink;