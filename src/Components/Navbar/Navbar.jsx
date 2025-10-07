import React from 'react';
import logoImg from '../../assets/logo.png'
import githubLogo from '../../assets/github.png'
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/apps">Apps</NavLink>
                            <NavLink>Installation</NavLink>

                        </ul>
                    </div>
                    <img className='hidden md:block w-[40px] h-[40px]' src={logoImg} alt="" />
                    <Link to="/" className=" text-xl font-bold">App Galaxy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 menu menu-horizontal px-1 font-semibold">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/apps">Apps</NavLink>
                        <NavLink to="/install">Installation</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="https://github.com/limon310/app-galaxy" target='_blank' className="btn bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-white"><img className='w-[20px] h-[20px] rounded-full border-1 border-white' src={githubLogo} alt="" /> Contribute</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;