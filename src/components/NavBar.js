import React from 'react';
import Logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex items-center justify-between mx-5 my-10'>
            <Link to='/'><img className='h-10' src={Logo} alt="" srcset="" /></Link>
            <div className='navbar font-bold text-xl mx-auto'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/topic'>Topic</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default NavBar;