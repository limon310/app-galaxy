import React, { useState } from 'react';
import useApps from '../Hook/useApp';
import AppsCard from '../Components/AppsCard/AppsCard';
import { Search } from 'lucide-react';
import Spinner from '../Components/Spinner';

const Apps = () => {
    const { apps, loadingSpinner } = useApps();
    const [search, setSearch] = useState("");
    const term = search.trim().toLowerCase();
    const searchApps = term?apps.filter(app => app.title.toLowerCase().includes(term))
    :apps
    // console.log(searchApps)
    // const {title, companyName, downloads, ratingAvg, image} = apps;
    return (
        <>
         {
            loadingSpinner?<Spinner></Spinner>
            :   <div className='mt-20 mb-20 w-11/12 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-4'>Our All Applications</h1>
                <p className='text-lg text-gray-400 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mb-5'>
                <h3 className='text-2xl font-semibold'>({searchApps.length}) Apps Found</h3>
                <label className="input">
                    <Search></Search>
                    <input onChange={(e) => setSearch(e.target.value)} defaultValue={search} type="search" placeholder="Search Apps" />
                </label>
            </div>
            <div>
                {
                    searchApps.length ===0?<h2 className='text-center text-5xl font-bold py-10 mb-10'>No App Found</h2>:""
                }
                {
                loadingSpinner?<Spinner></Spinner>
                :<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    searchApps.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
                }
            </div>
            }
            </div>
        </div>
         }
        </>
        
   
    );
};

export default Apps;