import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ToDoList from './components/ToDoList.jsx'
import Error from './Error.jsx'
import {createContext} from 'react'
import Home from './components/Home.jsx'

export const UserContext = createContext();
const impData=[
  {
    name:'SurajNarale',
    message:'Hello Everyone... i integrate everything that i learn ...'
  }
]


ReactDOM.createRoot(document.getElementById('root')).render(
  

    <UserContext.Provider value={impData}>
      <App/>
    </UserContext.Provider>


)



