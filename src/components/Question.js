import React, { useState } from 'react';
import Option from './Option';

const Question = ({q, change}) => {
    const {correctAnswer,id, options, question} = q
    const [answer, setAnswer] = useState(false)
    const showAnswer = () => {
        if(answer){
            setAnswer(false)
        }else{
            setAnswer(true)
        }
    }

    return (
        <div className='my-5 bg-slate-600 rounded-md p-4 text-white'>
            <div className='flex justify-between font-bold'>
                <h3>{question}</h3>
                {
                    answer === true ?
                    <i onClick={showAnswer} class="fa-solid fa-eye cursor-pointer"></i>
                    :
                    <i onClick={showAnswer} class="fa-solid fa-eye-slash cursor-pointer"></i>
                }
                
            </div>
            <p className={answer === true ? `static`: `hidden`}>Correct Answer: <small className='font-bold text-green-300'>{correctAnswer}</small></p>
            <div className='my-5 grid grid-cols-2 gap-4'>
                {
                    options.map((option, index) => <Option key={index} index={index} id = {id} change={change} correctAnswer={correctAnswer} option={option}></Option>)
                }
            </div>

        </div>
    );
};

export default Question;