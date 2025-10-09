import { Download, Star, ThumbsUp } from 'lucide-react';
import React from 'react';

const InstallAppsCard = ({ app, handleRemove}) => {
    console.log(app)
    const { image, title, companyName, ratingAvg, downloads, size, id} = app;
    console.log(id)
    return (
        <div class="p-4 bg-white shadow-md rounded-lg">
            <div class="flex items-center justify-between">

                <div class="flex items-center space-x-4">

                    <div class="w-16 h-16 bg-gray-200 rounded-xl flex-shrink-0 ">
                        <img className='rounded-md' src={image} alt="" />
                    </div>

                    <div class="flex flex-col">
                        <h3 class="text-lg font-semibold text-gray-800">
                            {title}: {companyName}
                        </h3>

                        <div class="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                            <div className="flex flex-col md:flex-row gap-10 mt-5">
                                <div className='flex gap-3'>
                                    <p className='text-green-700 mb-2'><Download></Download></p>
                                    
                                    <span className='text-base font-medium'>{downloads}</span>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='text-yellow-600 mb-2'><Star></Star></p>
                                    
                                    <span className='text-base font-medium'>{ratingAvg}</span>
                                </div>
                                <div>
                                    <span className='text-base font-medium'>{size} MB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={() => handleRemove(id)} class="px-5 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition duration-150 shadow-md">
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallAppsCard;