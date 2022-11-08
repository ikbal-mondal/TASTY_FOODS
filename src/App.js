import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import All_Service from './All-Services/All_Service';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Layout/Main';


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
           path:'/all_service',
           element:<All_Service></All_Service>
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
