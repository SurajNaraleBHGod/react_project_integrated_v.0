import { useState,createContext } from 'react'
import ToDoList from './components/ToDoList.jsx'
import './App.css'
import Error from './Error.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Stopwatch from './components/Stopwatch.jsx'
import Password from './components/password.jsx'

export default function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<ToDoList/>,
      errorElement:<Error/>
    },
    {
      path:'/Home',
      element:<Home/>
    },
    {
      path:'/stopwatch',
      element:<Stopwatch/>
    },
    {
      path:'/password',
      element:<Password/>
    }
  ])



  return (
    <>

 <RouterProvider router={router}>
  
 </RouterProvider>
   
   
      

    </>
  )
}



