import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import All_Service from './All-Services/All_Service';
import ServiceDetails from './All-Services/ServiceDetails';
import './App.css';
import AddReview from './Components/AddReviw/AddReview';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Main from './Layout/Main';
import Login from './Login&Register/Login/Login';
import Register from './Login&Register/Register/Register';


function App() {
  const router = createBrowserRouter([

    {
     path:'/' , 
     element: <Main></Main> ,
      children:[
      
         {
           path:'/',
           element:<Home></Home>
         },
         {
           path:'/home',
           element:<Home></Home>
         },
         {
           path:'/all-service',
           element:<All_Service></All_Service>
         },
         {
           path:'/addReview',
           element:<AddReview></AddReview>
         },
         {
           path:'/login',
           element:<Login></Login>
         },
         {
           path:'/register',
           element:<Register></Register>
         },
         {
           path:'/blogs',
           element:<Blogs></Blogs>
         },
         {
           path:'/serviceDetails/:id',
           element:<ServiceDetails></ServiceDetails>,
           loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
           
         },
         
       
      ]
    }

 ])

  return (
    <div className=''>
          <RouterProvider router={router}></RouterProvider>
   
    </div>
  );
}

export default App;
