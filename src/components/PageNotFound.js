import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='h-96 w-full text-2xl flex justify-center items-center text-center'>
            <div>
            <p className='text-red-600 font-bold'>404 Page Not Found</p>
            <p>Back to <Link className='font-bold text-blue-800' to='/'> Home</Link></p>
            </div>
        </div>
    );
};

export default PageNotFound;