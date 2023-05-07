import React from 'react';

const Option = ({option, id, index, correctAnswer, change}) => {
    const getResult = (value) =>{
        let mark = value === correctAnswer? 1 : 0;
        change(mark, id)
    }
    return (
        <div className={`rounded-md bg-slate-800 p-2`}>
            <div>
                <input onClick={() => getResult(option)} type="radio" name={id} value={option} />{option}
            </div>
        </div>
    );
};

export default Option;