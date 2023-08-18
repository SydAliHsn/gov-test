import React from 'react';


const CodeBlock = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return <code className='bg-slate-900 dark:bg-gray-950 p-1 rounded-md text-gray-200 dark:text-gray-300 italic'>{children}</code>
}

export default CodeBlock;