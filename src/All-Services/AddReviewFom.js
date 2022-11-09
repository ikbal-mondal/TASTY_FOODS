import React from 'react';
import { Form } from 'react-router-dom';

const AddReviewFom = () => {
    return (
        <div>
                  <section className="p-6 dark:text-gray-100 ">
	<Form  className="  rounded-md shadow bg-slate-300 p-8 ng-untouched ng-pristine ng-valid">
		<h2 className=" text-3xl text-center mb-3 font-bold leading-tight">Add Your Review </h2>
	     <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 ">
         <div>
			<label for="name" className="block mb-1 ml-1">First Name</label>
			<input id="name" name='Fname' type="text" placeholder=" Your First Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="name" className="block mb-1 ml-1">Last Name</label>
			<input id="Lname" name='Lname' type="text" placeholder="Your Last Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="name" className="block mb-1 ml-1">Phone Numbers</label>
			<input id="phone" name='phone' type="text" placeholder="Your Phone  Numbers " required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input id="email" name='email' type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring   focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"  />
		</div>
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
        </div>
    );
};

export default AddReviewFom;