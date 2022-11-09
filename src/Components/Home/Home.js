import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Gallery from './Gallery';
import HomeServiceCort from './HomeServiceCort';
import Make from './Make';


const Home = () => {

    const  [services,setServices] = useState([])
    
    useEffect(()=>{
 
          fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setServices(data)
        })
    },[])
 


    return (
        <div className='container mx-auto'>
         <div>
            <Banner></Banner>
            
            <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 mt-12 mb-6   gap-6   ">
            {
              
              services.map(foodsService => <HomeServiceCort key={foodsService._id} foodsService={foodsService}></HomeServiceCort>)

            }
            </div>
            <div className="text-center">
       <Link to='/all-service'>
       <button className='btn btn-outline btn-primary px-24 '> See All </button>
       </Link>
      </div>
        </div>
        <Make></Make>
        <Gallery></Gallery>
        </div>
    );
};

export default Home;