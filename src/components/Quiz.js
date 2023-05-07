import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
    const [marks, setMarks] = useState(0)
    const change = (value, index) => {
        setMarks(marks + value)
    }
    const quiz = useLoaderData()
    const {name, questions, total} = quiz.data
    return (
        <div className='md:w-3/5 mx-auto my-5'>
            <h1 className='text-center text-3xl font-bold'>Quiz Topic: {name}</h1>
            <p>Total Quiz: {total}</p>
            {
                questions.map(q => <Question key={q.id} q={q} change = {change}></Question>)
            }
            <button className='flex justify-center py-2 rounded-md mx-auto px-4 text-xl font-bold bg-slate-500 text-white' onClick={() => alert(`You Got ${marks} out of ${total}`)}>Finnish Quiz</button>

        </div>
    );
};

export default Quiz;