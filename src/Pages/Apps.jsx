import React, { useState } from 'react';
import useApps from '../Hook/useApp';
import AppsCard from '../Components/AppsCard/AppsCard';
import { Search } from 'lucide-react';

const Apps = () => {
    const { apps, loadingSpinner } = useApps();
    const [search, setSearch] = useState("");
    const term = search.trim().toLowerCase();
    const searchApps = term?apps.filter(app => app.title.toLowerCase().includes(term))
    :apps
    console.log(searchApps)
    // const {title, companyName, downloads, ratingAvg, image} = apps;
    return (
        <div className='mt-20 w-11/12 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-4'>Our All Applications</h1>
                <p className='text-lg text-gray-400 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mb-5'>
                <h3>({searchApps.length}) Apps Found</h3>
                <label className="input">
                    <Search></Search>
                    <input onChange={(e) => setSearch(e.target.value)} defaultValue={search} type="search" placeholder="Search Apps" />
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    searchApps.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
                }
            </div>
        </div>
    );
};

export default Apps;