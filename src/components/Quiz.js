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
        <div className='md:w-3/5 mx-auto'>
            <h1 className='text-center text-3xl font-bold'>Quiz Topic: {name}</h1>
            <p>Total Quiz: {total}</p>
            {
                questions.map(q => <Question key={q.id} q={q} change = {change}></Question>)
            }
            <button onClick={() => alert(`You Got ${marks} out of ${total}`)}>Finnish Quiz</button>

        </div>
    );
};

export default Quiz;