import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../Hook/useApp';
import { Download, Star, ThumbsUp, } from 'lucide-react';
import { toast } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Spinner from '../Components/Spinner';

const AppsDetails = () => {
    const [isInstall, setIsInstall] = useState(false)
    // console.log(isInstall)
    const { id } = useParams();
    // console.log(id)
    const { apps, loadingSpinner } = useApps();
    // console.log(apps)
    const app = apps.find(singleApp => singleApp.id === Number(id));
    // console.log(app)
    useEffect(()=>{
        const installsApps = JSON.parse(localStorage.getItem("app")) || []
        const alreadyInstallApp = installsApps.some(installsApp=> installsApp.id ===Number(id))
        if(alreadyInstallApp){
            setIsInstall(true)
        }
    },[id])
    if (loadingSpinner) return <Spinner></Spinner>;
    if (!app) {
        return (
            <div className='w-11/12 mx-auto py-20 text-center'>
                <h1 className='text-4xl font-bold text-red-600 mb-4'>App Not Found</h1>
                <p className='text-lg text-gray-600'>Sorry, no app details found for ID: {id}.</p>
                <Link to="/" className='btn btn-outline text-green-500 mt-4 text-2xl'>Go to Home</Link>
            </div>
        );
    }
    const { title, image, companyName, downloads, ratingAvg, reviews, size, description, ratings } = app;
    //raginsg reverse
    const reverseRatings = [...ratings].reverse();
    // console.log(reverseRatings)
    // console.log(ratings)
    const handleInstalled = () => {
        const existingList = JSON.parse(localStorage.getItem("app"));
        let updateList = [];
        if (existingList) {
            const duplicateList = existingList.some(a => a.id === app.id)
            if (duplicateList) return toast("App Already installed!");
            updateList = [...existingList, app];
            toast("Installed Success")
        }
        else {
            updateList.push(app);
        }
        localStorage.setItem("app", JSON.stringify(updateList))
    }
    return (
        <>
        <div className='w-11/12 mx-auto py-20'>
            <div className="flex flex-col md:flex-row gap-8 bg-base-100 shadow-sm rounded-md p-5">
                <figure>
                    <img className='w-full h-[300px] rounded-md'
                        src={image}
                        alt="" />
                </figure>
                <div className="flex w-full flex-col">
                    <div className=" rounded-box grid h-20 text-2xl font-bold">{title} {companyName}
                        <p className='text-sm text-gray-400'>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
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
                        <button onClick={() => {
                            if (!isInstall) {
                                handleInstalled()
                                setIsInstall(true)
                            }
                        }} className={`bg-[#00d390] py-3 px-6 rounded-md cursor-pointer text-white ${isInstall ? "bg-gray-400" : ""}`}>{isInstall ? <span>Installed</span> : <span>Install Now ({size}) MB</span>}</button>
                    </div>
                </div>
            </div>

            {/* VerticalComposedChart */}
            <div className='py-10 mt-10'>
                <h3 className='text-2xl font-semibold mb-4'>Ratings</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        layout="vertical"
                        data={reverseRatings}
                        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <YAxis
                            dataKey="name"
                            type="category"
                        />
                        <XAxis
                            type="number"
                            dataKey="count"
                        />
                        <Tooltip />
                        <Legend></Legend>
                     <Bar dataKey="count" barSize={30} fill="orange" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='py-15'>
                <h3 className='text-2xl font-semibold mb-4'>Description</h3>
                <p className='text-lg text-gray-400'>{description}</p>
            </div>
        </div>
        
        </>
    );
};
export default AppsDetails;