import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title,img,price,rating,description} = useLoaderData();
    return (
        
            <div className="container mx-auto space-y-12 shadow-2xl shadow-red-200 my-8 p-4">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-3xl font-bold">Name: {title}</h3>
                <b className='my-3'>price: ${price}</b>
				<p className="my-6 dark:text-gray-400">{description}</p>
				<button type="button" className="self-start">Rating : {rating}</button>
			</div>
		</div>
        </div>
    );
};

export default ServiceDetails;