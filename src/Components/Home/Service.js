import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {

   const  [services,setServices] = useState()
    
   useEffect(()=>{

         fetch('services.json')
         .then(res => res.json())
   },[])



    return (
        
        <>
     
      <h1 className='text-center'>Services</h1>

    <div className="text-center">
       <Link to='/all_service'>
       <button className='btn btn-outline btn-primary '> See All </button>
       </Link>
      </div>



     </>

    );
};

export default Service;