import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full flex justify-center bg-slate-500 py-5 md:px-40 md:py-10'>
            <div className='md:text-2xl text-2xl font-bold'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-40'>
                <div>
                    <p>address</p>
                    <p><small>Rampura, Dhaka - 1208</small></p>
                </div>
                <div>
                    <p>Usefull Links</p>
                    <p className='hover:underline'><small><Link to='/'>Home</Link></small></p>
                    <p className='hover:underline'><small><Link to='/topic'>Topic</Link></small></p>
                    <p className='hover:underline'><small><Link to='/staristics'>Statistics</Link></small></p>
                    <p className='hover:underline'><small><Link to='/blog'>Blog</Link></small></p>
                </div>
                <div>
                    <p>Follow Us</p>
                    <div className='flex justify-between'>
                        <Link><FontAwesomeIcon icon={faVideo} /></Link>
                        <Link><FontAwesomeIcon icon={faVideo} /></Link>
                        <Link><FontAwesomeIcon icon={faVideo} /></Link>
                    </div>
                </div>
            </div>
            <p className='text-center text-xs md:text-2xl pt-5 md:pt-10'>All right reserved by <Link className='text-slate-200'>Programming Quiz</Link></p>
            </div>
        </div>
    );
};

export default Footer;