import React, { useEffect, useState } from 'react';
import InstallAppsCard from '../Components/InstallAppsCard';
import { Download, Star } from 'lucide-react';
import { toast } from 'react-toastify';

const Installation = () => {
    const [installed, setInstalled] = useState([]);
    const [sort, setSort] = useState("none")
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("app"))
        if (savedData) {
            setInstalled(savedData);
        }
    }, [])
    // console.log(installed)
    if (installed.length === 0) return <p className='text-center py-5 text-3xl font-bold'>No data available</p>
    // handle sorted
    const handleSorted = () => {
        if (sort === "size-ascen") {
            return [...installed].sort((a, b) => a.downloads - b.downloads)
        }
        if(sort === "size-descen"){
            return [...installed].sort((a,b) => b.downloads-a.downloads)
        }
        else{
            return installed;
        }
    }
    // handle remove
    const handleRemove = (id) => {
        const existingData = JSON.parse(localStorage.getItem("app"));
        const updateData = existingData.filter(d => d.id !== id)
        setInstalled(updateData);
        toast("Uninstalled Success")
        localStorage.setItem("app", JSON.stringify(updateData))
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center py-10 md:py-20'>
                <h1 className='text-5xl font-semibold'>Your Installed Apps</h1>
                <p className='text-lg text-gray-400 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-semibold'>({installed.length}) app found</h3>
                <label className=' py-2 px-6 '>
                    <select onChange={(e) => setSort(e.target.value)} defaultValue={sort} name="" id="" className='py-3 px-6 border-2 border-gray-400 rounded-md'>
                        <option value="none">Sort by Size</option>
                        <option value="size-ascen">Lo-&gt; High</option>
                        <option value="size-descen">High-&gt; Low</option>
                    </select>
                </label>
            </div>
            {/* installed app history */}
            <div className='space-y-4 py-5 mb-10'>
                {
                    handleSorted().map(app => <div key={app.id} app={app}>

                        <div class="p-4 bg-white shadow-md rounded-lg">
                            <div class="flex items-center justify-between">

                                <div class="flex items-center space-x-4">

                                    <div class="w-16 h-16 bg-gray-200 rounded-xl flex-shrink-0 ">
                                        <img className='rounded-md' src={app.image} alt="" />
                                    </div>

                                    <div class="flex flex-col">
                                        <h3 class="text-lg font-semibold text-gray-800">
                                            {app.title}: {app.companyName}
                                        </h3>

                                        <div class="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                                            <div className="flex flex-col md:flex-row gap-10 mt-5">
                                                <div className='flex gap-3'>
                                                    <p className='text-green-700 mb-2'><Download></Download></p>

                                                    <span className='text-base font-medium'>{app.downloads}</span>
                                                </div>
                                                <div className='flex gap-3'>
                                                    <p className='text-yellow-600 mb-2'><Star></Star></p>

                                                    <span className='text-base font-medium'>{app.ratingAvg}</span>
                                                </div>
                                                <div>
                                                    <span className='text-base font-medium'>{app.size} MB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button onClick={() => handleRemove(app.id)} class="px-5 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition duration-150 shadow-md">
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Installation;

