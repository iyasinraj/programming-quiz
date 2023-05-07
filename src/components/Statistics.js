import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData()
    return (
        <div>
            <p className='text-center text-3xl font-bold'>Statistics</p>
            <div className='w-11/12 mx-auto'>
                <BarChart
                width={500}
                height={300}
                data={quizData.data}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;