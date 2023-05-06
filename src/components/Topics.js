import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Topics = () => {
    const quizs = useLoaderData()
    return (
        <div className='w-11/12 mx-auto my-5'>
            <p className='text-center my-5 text-3xl font-bold'>Quiz Topics</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    quizs.data.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Topics;