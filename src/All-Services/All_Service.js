import React, { useEffect } from 'react';
import { useState } from 'react';
import ShowAllServices from './ShowAllServices';



const All_Service = () => {
  
  
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
        
           
          <div className="grid grid-cols-3 gap-4 container mx-auto ">
               
               {   
            
            services.map(FoodService =>
            <ShowAllServices key={FoodService._id} FoodService={FoodService}></ShowAllServices>
            )
              
            
            }





          </div>
    );
};

export default All_Service;