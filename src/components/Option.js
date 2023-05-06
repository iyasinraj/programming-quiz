import React from 'react';

const Option = ({option}) => {


    return (
        <div className={`rounded-md bg-slate-800 p-2`}>
            <div>
                <input  type="radio" name='option' value={option} />{option}
            </div>
        </div>
    );
};

export default Option;