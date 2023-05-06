import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData()
    const {id, logo, name, questions, total} = quiz.data
    return (
        <div className='md:w-3/5 mx-auto'>
            <h1 className='text-center text-3xl font-bold'>Quiz Topic: {name}</h1>
            <p>Total Quiz: {total}</p>
            <div>

            </div>
        </div>
    );
};

export default Quiz;