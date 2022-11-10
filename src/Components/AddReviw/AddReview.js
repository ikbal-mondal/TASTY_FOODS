import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddReview = () => {
	const {user} = useContext(AuthContext)
	const [reviews, setReviews] = useState({})

    useEffect(() => {
      
       fetch(`http://localhost:5000/reviews?email=${user.email}`)
	   .then(res => res.json())
	   .then(data => setReviews(data))

	},[user  && user.email])
    return (
         <div className="">

            <h2 className='text-6xl'>You have {reviews.length} Review </h2>
		 </div>

    );
};

export default AddReview;