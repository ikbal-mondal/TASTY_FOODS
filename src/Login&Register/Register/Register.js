import React from 'react';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='my-8'>
            <div className="w-full max-w-md p-8 space-y-3 mx-auto shadow-2xl shadow-slate-600 rounded-xl bg-green-400 text-black">
	<h1 className="text-2xl font-bold text-center">Register Now</h1>
	<Form className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Name</label>
			<input type="text" name="name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Email</label>
			<input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		
		</div>
		<button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Register
                </button>

	</Form>
	
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">have an account?
		<Link to='/login' className="underline dark:text-gray-100">Log in now</Link>
	</p>
</div>
        </div>
    );
};

export default Register;