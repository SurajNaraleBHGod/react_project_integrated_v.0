import { useState , useCallback , useEffect , useRef} from 'react'
import '../App.css'
import NavBar from './NavBar'


export default function Password() {
  const [length, setLength] = useState(8)
  const [isNumber, setNumber]= useState(false)
  const [isCharacter, setCharacter]= useState(false)
  const [password,setPassword]= useState("")
/*
*  useCallback 
*/  
const passwordGenerator =useCallback(()=>{

    let password=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNumber) str+="0123456789"
    if(isCharacter) str+= "!@#$%^&*()_+=-{}\|:;\"'<>.,?/`~"

    for(let i=0;i<length;i++){
        let char= Math.floor(Math.random()*str.length)
        password+=str.charAt(char)
    }

    setPassword(password)

    },[length,isNumber,isCharacter,setPassword]);

  /*
  * useEffect
  *
  */

  useEffect(()=>{
      passwordGenerator()
      
  },[length,isNumber,isCharacter])


  /*
  * useRef
  *
  */
 const passRef=useRef(null)

 const copyThePassword=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    
    
  
 },[password])


  
  return (
  
    <>
    <NavBar/>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-3 my-3 px-2 text-orange-500 bg-gray-300">
        <h1 className="text-black text-center"> Hello Every_One </h1>
        <div className="flex">

          <input 
            type="text"
            value={password}
            className=" w-full py-1 px-3 rounded-lg"
            placeholder='password'
            readOnly
            ref={passRef}
          ></input>


          <button
                className="bg-blue-900 text-white px-2"
                onClick={copyThePassword}
                
          >Copy</button>
        
        
        </div>

        <div className=" flex items-center gap-x-3">

          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e)=>{
                setLength(e.target.value)
            }}
            
          ></input>
          Length:{length}
          
          <input
            type="checkbox"
            onClick={(e)=>{
                console.log(isNumber)
                setNumber((p )=> !p)
                
            }}
          ></input>Number

          <input
            type="checkbox"
            onClick={(e)=>{
              console.log(isCharacter)
              setCharacter((p)=>!p)
            }}

          ></input>Character

        </div>

       


      

      </div>
      </>
  
  )
}


