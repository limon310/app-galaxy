import { Download, Star } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const AppsCard = ({ app }) => {
    // console.log(app)
    const {title, companyName , downloads, ratingAvg, id, image} = app;
    // const handleDetails = () =>{
    //     console.log("clicked")
    // }
    console.log(image)
    return (
          <NavLink to={`/details/${id}`}>
              <div className='flex flex-col justify-center items-center h-full'>
            <div className="card bg-white w-75 h-full shadow-sm">
                <figure>
                    <img className=''
                        src={image}
                        alt="Shoes" />
                        {/* <img src={image} alt="" /> */}
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
          </NavLink>
    );
};

export default AppsCard;