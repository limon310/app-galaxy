import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../Hook/useApp';
import { Download, Star, ThumbsUp,  } from 'lucide-react';
import { Bar, BarChart, ComposedChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';

const AppsDetails = () => {
    const [desable, setDesable] = useState(false)
    console.log(desable)
    const { id } = useParams();
    // console.log(id)
    const { apps, loadingSpinner } = useApps();
    // console.log(apps)
    const app = apps.find(singleApp => singleApp.id === Number(id));
    console.log(app)
    // if(loadingSpinner) return <p>Loading....</p>;
    // const { image, title, companyName, description, downloads, ratingAvg, reviews } = app;
    if(loadingSpinner) return <p>Loading....</p>;
    const { title, image, companyName, downloads, ratingAvg, reviews, size, description} = app;
    const handleInstalled = () =>{
        const existingList = JSON.parse(localStorage.getItem("app"));
        let updateList = [];
        if(existingList){
            const duplicateList = existingList.some(a => a.id === app.id)
            if(duplicateList) return toast("App Already installed!");
                updateList = [...existingList, app];  
                toast("Installed Success")
        }
        else{
            updateList.push(app);
        }
        localStorage.setItem("app", JSON.stringify(updateList))
    }
    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className="flex flex-col md:flex-row gap-5 bg-base-100 shadow-sm">
                <figure>
                    <img className='w-full rounded-md'
                        src={image}
                        alt="" />
                </figure>
                <div className="flex w-full flex-col">
                    <div className=" rounded-box grid h-20 ">{title} {companyName}
                        <p>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                    </div>
                    <div className="divider"></div>
                    <div className="flex flex-col md:flex-row gap-10">
                    <div>
                        <p className='text-green-700 mb-2'><Download></Download></p>
                        <p className='mb-2 text-sm text-gray-600'>Downloads</p>
                        <span className='text-2xl font-bold'>{downloads}</span>
                    </div>
                    <div>
                        <p className='text-yellow-600 mb-2'><Star></Star></p>
                        <p className='mb-2 text-sm text-gray-600'>Average Ratings</p>
                        <span className='text-2xl font-bold'>{ratingAvg}</span>
                    </div>
                    <div>
                        <p className='text-green-700 mb-2'><ThumbsUp></ThumbsUp></p>
                        <p className='mb-2 text-sm text-gray-600'>Total Reviews</p>
                        <span className='text-2xl font-bold'>{reviews
                            }</span>
                    </div>
                    </div>
                    <div className='mb-10 mt-7 '>
                        <Link onClick={handleInstalled} className='bg-[#00d390] py-3 px-6 rounded-md text-white'>Install Now ({size} MB)</Link>
                    </div>
                </div>
            </div>

            {/* barchart */}
            {/* <BarChart width={800} height={300} data={app}>
                    <XAxis dataKey="ratingAvg"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="reviews" fill='green'></Bar>
                </BarChart> */}
            <div className='py-15'>
                <h3 className='text-2xl font-semibold mb-4'>Description</h3>
                <p className='text-lg text-gray-400'>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;