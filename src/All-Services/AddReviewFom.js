import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const AddReviewFom = () => {
	const {user} = useContext(AuthContext)
    return (
        <div  className='grid lg:grid-cols-2 mg:grid-cols-2 ms:grid-cols-1  '>
          {
			user && 
			user.email && 
			<section className="p-6 dark:text-gray-100 ">
	<Form  className="  rounded-md shadow bg-slate-300 p-8 ng-untouched ng-pristine ng-valid">
		<h2 className=" text-3xl text-center mb-3 font-bold leading-tight">Add Your Review </h2>
	     <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 ">
		
         </div>
		<div>
			<label for="message" className="block mb-1 ml-1">Message</label>
			<textarea  name='message' id="message" type="text" placeholder="Message..." className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 text-white py-2 mt-6 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 bg-blue-700">Send</button>
		</div>
	</Form>
</section> 

		  }       

          {
            !user &&

          <div className="shadow-2xl shadow-slate-900 py-4 pb-12 container mx-auto rounded-2xl">
			 <img style={{width:'200px'}} className='mx-auto' src="https://cdn-icons-png.flaticon.com/512/272/272354.png" alt="" />
			  <h1 className='text-center text-5xl opacity-50 font-semibold '>Please Login to add a review</h1>
		  </div>
      
          }


        </div>
    );
};

export default AddReviewFom;