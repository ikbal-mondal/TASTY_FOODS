import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const AddReview = () => {
	const {user} = useContext(AuthContext)
	const [reviews, setReviews] = useState([])

    useEffect(() => {
      
       fetch(`https://tasty-foods-server.vercel.app/reviews?email=${user && user.email}`)
	   .then(res => res.json())
	   .then(data => setReviews(data))

	},[user  && user.email])

	const handleRemove = (id) => {
   
		const Proceed = window.confirm('Are You Sure, You Want to delete');
		if(Proceed){
		   fetch(`https://tasty-foods-server.vercel.app/reviews/${id}`, {
			   method: 'Delete'
		   })
		   .then(res => res.json())
		   .then(data => {
			   console.log(data);
			   if(data.deletedCount > 0){
				alert('deleted successfully')
				const remaining = reviews.filter(review => review._id !== id)
				setReviews(remaining)
			   }
		   })
		}
   
	 }


    return (
         <div className="">

	             {
					 reviews.map(review => <ReviewCard 
						key={review._id}
						review={review}
						handleRemove={handleRemove}
					 ></ReviewCard>)
				 }
            
		 </div>

    );
};

export default AddReview;