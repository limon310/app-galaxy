import React from 'react';
import errorImg from '../assets/error-404.png'
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center py-20'> 
            <img src={errorImg} alt="" />
            <h1 className='text-5xl font-bold mb-4 mt-4'>Oops, page not found!</h1>
            <p className='text-lg text-gray-400'>The page you are looking for is not available.</p>
            <button className='btn btn-outline bg-[#632EE3] py-4 px-7 rounded-md text-white text-lg mt-4'>Go Back</button>
        </div>
    );
};

export default Error;