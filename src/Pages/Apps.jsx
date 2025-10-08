import React from 'react';
import useApps from '../Hook/useApp';
import AppsCard from '../Components/AppsCard/AppsCard';

const Apps = () => {
    const {apps} = useApps();
    console.log(apps)
    // const {title, companyName, downloads, ratingAvg, image} = apps;
    return (
        <div className='mt-20 w-11/12 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-4'>Our All Applications</h1>
                <p className='text-lg text-gray-400 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mb-5'>
                <h3>({apps.length}) Apps Found</h3>
                <label className=''>
                    <select name="" id="" className='py-2 px-5'>
                        <option value="none">Sort by price</option>
                        <option value="price-aac">Lo-&gt; High</option>
                        <option value="price-decc">High-&gt; Low</option>
                    </select>
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                apps.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
            }
            </div>
        </div>
    );
};

export default Apps;