import NavBar  from "./NavBar"
import {useState,useEffect} from 'react'
export default function Home(){
    const [text,setText]= useState('')
    const [count,setCount]= useState(0)
   

    return(
        <>

         <NavBar/>
         <div style={{border:'20px solid black',height:'30%',backgroundColor:'black',color:'white'}}>
                Enter Text: <input 
                                style={{color:'black',padding:'10px'}} 
                                className="" 
                                type='text'
                                onChange={(e)=>{ setText(e.target.value); setCount((p)=>{return ++p})}}
                                ></input>
         </div>
          
         {count} times
        
        </>
       
    ) 
}

