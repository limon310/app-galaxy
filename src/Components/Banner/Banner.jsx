import React from 'react';
import heroPng from '../../assets/hero.png'
import googlePlayLogo from '../../assets/google.png'
import appStorepng from '../../assets/appstore.jfif'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <>
            <div className='w-11/12 mx-auto flex flex-col justify-center  items-center mt-20 text-center'>
                <h1 className='text-3xl md:text-7xl font-bold mb-4'>We Build <span className='text-[#632ee3]'>Productive</span> Apps</h1>
                <p className='text-gray-400'>At App Galaxy, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-5 mt-10 mb-10'>
                    <Link to="https://play.google.com/store/apps?hl=en" target="_blank">
                    <h3 className='flex gap-2 items-center text-xl font-semibold'><img className='w-8 h-8' src={googlePlayLogo} alt="" /> Google Play</h3>
                    </Link>
                    <Link to="https://www.apple.com/app-store/" target="_blank">
                    <h3 className='flex gap-2 items-center text-xl font-semibold'><img className='w-10 h-8' src={appStorepng} alt="" /> App Store</h3>
                    </Link>
                </div>
                <img className='w-[250px] md:w-[412px]' src={heroPng} alt="" />
            </div>
            <div className='text-center bg-gradient-to-l from-[#9f62f2] to-[#632ee3] p-2 md:p-20'>
                <h3 className='mb-10 text-3xl md:text-5xl font-bold text-white'>Trusted by Millions, Built for You</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    <div className='border-1 rounded-2xl border-gray-200 md:border-none'>
                        <span className='text-gray-200'>Total Downloads</span>
                        <h1 className='text-6xl font-extrabold text-white mt-4'>29.6M</h1>
                        <p className='text-gray-200 mt-4'>21% more than last month</p>
                    </div>
                    <div className='border-1 rounded-2xl border-gray-200 md:border-none'>
                        <span className='text-gray-200'>Total Reviews</span>
                        <h1 className='text-6xl font-extrabold text-white mt-4'>906K</h1>
                        <p className='text-gray-200 mt-4'>46% more than last month</p>
                    </div>
                    <div className='border-1 rounded-2xl border-gray-200 md:border-none'>
                        <span className='text-gray-200'>Active Apps</span>
                        <h1 className='text-6xl font-extrabold text-white mt-4'>132+</h1>
                        <p className='text-gray-200 mt-4'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;
