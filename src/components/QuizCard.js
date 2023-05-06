import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({quiz}) => {
    const {id, name, logo, total} = quiz
    return (
        <div className='bg-gray-400 rounded-xl p-4'>
            <img src={logo} alt="logo"/>
            <div className='flex justify-between md:justify-evenly mt-4'>
                <div>
                    <h1 className='md:text-xl font-bold'>{name}</h1>
                    <p>Total Quiz: {total}</p>
                </div>
                <div>
                    <Link to = {`/topic/${id}`} ><button className='bg-blue-600 font-bold text-white rounded-md py-2 px-4'>Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;