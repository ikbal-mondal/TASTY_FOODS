import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mx-auto'>
            <div className="w-full max-w-md p-8 space-y-3  rounded-xl bg-slate-800 text-white">
	<h1 className="text-2xl font-bold text-center">Register Now</h1>
	<form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Name</label>
			<input type="text" name="username" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Email</label>
			<input type="text" name="username" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			<div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Register Now</button>
	</form>
	
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">have an account?
		<Link to='/login' className="underline dark:text-gray-100">Log in now</Link>
	</p>
</div>
        </div>
    );
};

export default Register;