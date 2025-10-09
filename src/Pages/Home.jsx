import React from 'react';
import Banner from '../Components/Banner/Banner';
import useApps from '../Hook/useApp';
import AppsCard from '../Components/AppsCard/AppsCard';
import { Link, NavLink } from 'react-router';
import Spinner from '../Components/Spinner';

const Home = () => {
    const {apps, loadingSpinner} = useApps();
    // console.log(apps)
    const featureApps = apps.slice(0,8);
    // console.log(featureApps)
    return (
        <>
        
        {
            loadingSpinner?<Spinner></Spinner>
            :<div className=''>
            <Banner></Banner>
            
            <div className='text-center mt-10'>
                <h1 className='text-5xl font-bold mb-4'>Trending Apps</h1>
                <p className='text-xl text-gray-400 mb-10'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
             
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                featureApps.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
            }
            </div>


           
            <div className='flex justify-center items-center mt-10 mb-20'>
                <NavLink to="/apps" className='btn bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-white py-3 px-7 rounded-md'>Show All</NavLink>
            </div>
        </div>
        // </div>
        }        
        
        </>
        
    );
};

export default Home;