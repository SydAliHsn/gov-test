import React from 'react';
import Link from 'next/link';


const ImageLink = ({ url }: { url: string }): JSX.Element => {
    return <div>
        <Link href={url}></Link>
        <img src={url} alt="Screenshot" />
    </div>;
};

export default ImageLink;