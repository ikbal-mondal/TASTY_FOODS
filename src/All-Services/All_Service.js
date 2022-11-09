import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllService from './AllService';



const All_Service = () => {

const services = useLoaderData()
 console.log(services);
    return (
        
           
          <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 my-12   gap-6 container mx-auto  ">
               
               {   
            
            services.map(FoodService => <AllService key={FoodService._id} FoodService={FoodService}></AllService>)
            
           
              
            
            }





          </div>
    );
};

export default All_Service;