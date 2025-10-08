import { Download, Star } from 'lucide-react';
import React from 'react';

const AppsCard = ({ app }) => {
    console.log(app)
    const {title, image, companyName , downloads, ratingAvg} = app
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="card bg-white w-75 h-full shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="">
                    <h2 className="text-lg font-medium mt-4">{title}: { companyName}</h2>
                    <div className='flex justify-between mt-4 text-end'>
                        <p className='flex gap-2 bg-[#F1F5E8] text-[#00D390] py-3 px-5 rounded-md'><Download></Download> {downloads}</p>
                        <p className='text-right flex gap-2 bg-[#FFF0E1] text-[#FF8811] py-3 px-5 rounded-md'><Star></Star> {ratingAvg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsCard;