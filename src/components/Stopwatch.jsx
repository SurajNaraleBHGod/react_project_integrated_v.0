import {useState,useEffect,useRef} from 'react'

export default function Stopwatch(){

    const [isRunning,setIsRunning]= useState(false)
    const [elaspsedTime, setElapsedTime]= useState(0)
    const intervalIdRef= useRef(null)
    const startTimeRef= useRef(0)

    useEffect(()=>{

    },[isRunning])

    function start(){
 
    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){

        return `00:00:00`
    }

    return(
       <div className="stopwatch">
        <div className="display">
        {formatTime()}
        <div className='control'>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
        </div>

       </div>
    )

}