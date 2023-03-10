import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import Gameph from '../images/BattleoftheBastards.png'
import Gameph2 from '../images/Kinginthenorth.png'
import Over from '../images/BattleisOver.png'

const formatTimer = (m) => {
  const date = new Date(null);
  date.setSeconds(m);

  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${minutes} Mins : ${seconds} Secs`;
}

const formatTimeLeft = (m) => {
  const date = new Date(null);
  date.setSeconds(m);

  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${minutes} Minutes : ${seconds} Seconds`;
}

const socket = io("ws://localhost:8000");

function Platform() {

  const [teamName, setTeamName] = useState(null);
  const [timers, setTimers] = useState({});
  const [sortedKeys, setSortedKeys] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeOver, setTimeOver] = useState(false);

  useEffect(() => {

    socket.on('data_update', (data) => {
      setTeamName(data.is_valid_team ? data.team_name : null);
      setTimers(data.timers);
      setTimeLeft(data.time_left);
      setSortedKeys(Object.keys(data.timers).sort((a, b) => data.timers[b] - data.timers[a]));
      if (data.time_left == 0)
      {
        setTimeOver(true);
        socket.disconnect();
      }
    });

  }, [timers]);

  return (
    <div className='flex flex-col h-full sm:h-screen'>
        <div className='flex sm:flex-row flex-col w-full justify-center  h-60'>
            <div className='flex justify-self-center mx-auto mt-5 sm:ml-5 sm:w-1/4 w-1/3  sm:my-auto '>
                <img src={Gameph} className=' w-full sm:h-3/4 h-full'/>
            </div>
            <div className='flex sm:w-3/4 w-full mt-5 flex-col justify-center' >
                <span className=' flex font-Roman sm:justify-end justify-self-center lg:text-2xl md:text-xl sm:text-lg  text-base mx-auto md:mx-10 sm:mx-8 sm:my-7 text-white'>{formatTimeLeft(timeLeft)}</span>
            </div>
            </div>
            <div className='flex bg-white w-full h-1 shadow-md shadow-amber-600'></div>
            {!timeOver?
            <div className='flex sm:flex-row flex-col  mt-4 w-full '>
                <div className='flex flex-col sm:justify-center justify-self-center  mx-auto w-4/5 sm:w-2/4 mt-10 sm:order-1 order-2'>
               { sortedKeys.map((team_name, i)=>(
         <div className='flex flex-row justify-between items-center  bg-bgdiv gap-4 text-xl my-2 rounded-md h-16' key={i}>
           <div className='flex w-1/5 px-6 text-white font-Roman '>{i+1}</div><div className='flex w-2/5 text-white font-Roman'>{team_name}</div><div className='flex w-2/5 justify-end mr-7 text-white font-Roman text-base'>{formatTimer(timers[team_name])}</div>
         </div> 
       ))}
                </div>
                <div className='flex flex-col w-1/3 sm:mt-24 mt-20 justify-self-center mx-auto  sm:mx-4 sm:justify-center sm:order-2 order-1 '>
                <img src={Gameph2} className=' w-11/12 sm:w-6/12 sm:mx-auto'/>
                <span className='flex  text-color1 md:text-6xl lg:text-7xl justify-center sm:mx-auto text-5xl   mt-6 font-Roman   '>{teamName || 'Invalid'}</span>

                </div>
                </div>
            :
               <div className='flex flex-col  mt-20 justify-center '>
                <img src={Over} className=' sm:w-2/5 mx-auto w-3/5' />
                <img src={Gameph2} className='w-1/6 mx-auto mt-7'/>
                <span className='flex  text-color1 md:text-6xl  justify-center sm:mx-auto text-5xl   mt-6 font-Roman   '>{teamName || 'Invalid'}</span>

                </div>
              }

            
                

            
      
    </div>
  )
}

export default Platform
