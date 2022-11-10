import React, { useContext } from 'react';
import { Form, json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const AddReviewFom = () => {
	const {user} = useContext(AuthContext)
	const {title, _id} = useLoaderData()
	console.log(`foods title : ${title}`);

 const handleReviewFrom = event => {

	event.preventDefault();
	const from = event.target;
	const email = user && user.email || 'unregistered';
	const rating = from.rating.value;
	const message = from.message.value;


	const reviews = {

		foodId:_id,
		FoodName: title,
		email: email,
		rating:rating,
		message: message,
        
	}
  

    fetch('http://localhost:5000/reviews' , {
		 method: 'POST',
		 headers: {
			'content-type' : 'application/json'
		 },
		 body: JSON.stringify(reviews)
	})
	.then(res => res.json())
	.then(data => {
		console.log(data)
		if(data.acknowledged){
			alert('Your Review Successfully ')
			from.reset();

		}
	})
	.catch(error => console.log(error));
   
   
	 
 }


    return (
        <div  className='grid lg:grid-cols-2 mg:grid-cols-2 ms:grid-cols-1 items-center container mx-auto '>
          {
			user && 
			user.email && 
			<section className="p-6 dark:text-gray-100 ">
				<h2>Your Review food name: {title}</h2>
	<Form onSubmit={handleReviewFrom} className="  rounded-md shadow bg-cyan-300 p-8 ng-untouched ng-pristine ng-valid">
		<h2 className=" text-3xl text-center mb-3 font-bold leading-tight">Add Your Review </h2>
	     <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 ">
		
         </div>
		<div>
			<label for="message" className="block mb-1 ml-1">Your  Email</label>
			<input  name='email'  type="email" placeholder="email" defaultValue={user &&user.email}  readOnly className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></input>
		</div>
		<div>
			<label className="block mb-1 ml-1">Rating</label>
			<input  name='rating'  type="text" placeholder="Rating up 1 to 5 "  className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></input>
		</div>
		<div>
			<label for="message" className="block mb-1 ml-1">Message</label>
			<textarea  name='message' id="message" type="text" placeholder="Message..." className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" required></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 text-white py-2 mt-6 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 bg-blue-700">Send Your Review</button>
		</div>
	</Form>
</section> 

		  }       

          {
            !user &&

          <div className="shadow-2xl shadow-slate-400 py-4 pb-12 container mx-auto rounded-2xl">
			 <img style={{width:'200px'}} className='mx-auto' src="https://cdn-icons-png.flaticon.com/512/272/272354.png" alt="" />
			  <h1 className='text-center text-5xl opacity-50 font-semibold '>Please Login to add a review</h1>
		  </div>
      
          }


         {
			 !user && 
			 
			<img src="https://img.freepik.com/premium-vector/cyber-security-concept-people-work-screen-protecting-data-confidentiality-illustration_138260-701.jpg" alt="" />
		 }

         {
			 user && 
			 user.email && 
			<img src="http://unblast.com/wp-content/uploads/2020/10/Feedback-Vector-Illustration.jpg" alt="" />
		 }

        </div>
    );
};

export default AddReviewFom;