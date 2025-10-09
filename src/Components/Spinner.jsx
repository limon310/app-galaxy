import { Loader } from 'lucide-react';
import React from 'react';
import loadingLogo from '../assets/logo.png'
const Spinner = () => {
    return (
        <div className=''>
            {/* <div className='flex flex-col justify-center items-center h-full'>
            // skeleton
                {
                    Array.from({ length: 8 }).map((_, i) =>
                        <div key={i} className="flex flex-col w-52 gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    )
                }
            </div> */}
            <p className='mt-10 mb-10 flex justify-center items-center text-3xl font-semibold text-gray-400'>L <span className='ml-2'><Loader></Loader></span><span className='ml-2'>OADING.....</span></p>

            {/* <p className='mt-10 mb-10 flex justify-center items-center text-3xl font-semibold text-gray-400'>L <img className='w-[80px] h-[80px] animate-spin' src={loadingLogo} alt="" />    OADING.....</p> */}
        </div>
    );
};

export default Spinner;