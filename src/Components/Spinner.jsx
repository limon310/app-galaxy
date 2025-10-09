import React from 'react';

const Spinner = (count = 6) => {
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            <div className='flex flex-col justify-center items-center h-full'>
                {
                    Array.from({ length: 8 }).map((_, i) =>
                        <div key={i} className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Spinner;