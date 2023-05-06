import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Home = () => {
    const quizs = useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-[url(./images/bg.jpg)] bg-cover rounded-md'>
                <div className='bg-slate-500/75 rounded-md'>
                    <div className='py-40 text-center'>
                        <p className='text-3xl font-bold text-white'>Check Your Programming Skill</p>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-center my-5 text-3xl font-bold'>Quiz Topics</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    quizs.data.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;