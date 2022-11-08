import React from 'react';

import { Link } from 'react-router-dom';

const Service = () => {


    return (
        
        <>
     
      <h1 className='text-center'>Services</h1>

    <div className="text-center">
       <Link to='/all-service'>
       <button className='btn btn-outline btn-primary '> See All </button>
       </Link>
      </div>



     </>

    );
};

export default Service;