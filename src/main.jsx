import React from 'react';

import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import MainLyout from './assets/components/MainLyout'
import Hadith from './assets/components/Hadith';
import Home from './assets/components/Home';
import Islamic from './assets/components/Islamic';
import Singlecard from './assets/components/Singlecard';
import Readbook from './assets/components/Readbook';
import Wishlistbook from './assets/components/Wishlistbook';





const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLyout></MainLyout>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
        loader:()=>fetch('data.json'),
      },
      {
        path:'/home/:bookId',
        element:<Singlecard></Singlecard>,
        loader:()=>fetch('data.json'),  
      },
      {
        path:'/listedbook',
        element:<Hadith></Hadith>,
      },
      {
        path:'/pagetoread',
        element:<Islamic></Islamic>,
      },
      {
        path:'/readbook',
        element:<Readbook></Readbook>,
       
      },
      
      {
        path:'/wishlistbook',
        element:<Wishlistbook></Wishlistbook>,
      }
     
       
     

    ]
  },

 
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
