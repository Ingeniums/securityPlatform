import React from 'react'
import Gameph from '../images/BattleoftheBastards.png'
import Gameph2 from '../images/Kinginthenorth.png'

var list =[{"id":1,"rank":1,"name":"kjdjsq","time":4638},{"id":2,"rank":2,"name":"kjdjsq","time":4638},{"id":3,"rank":3,"name":"kjdjsq","time":4638},{"id":4,"rank":4,"name":"kjdjsq","time":4638}]
function Platform() {
  return (
    <div className='flex flex-col sm:h-screen h-full'>
        <div className='flex sm:flex-row flex-col w-full justify-center  h-60'>
            <div className='flex justify-self-center mx-auto mt-5 sm:ml-5 sm:w-1/4 w-1/3  sm:my-auto '>
                <img src={Gameph} className=' w-full h-3/4 '/>
            </div>
            <div className='flex sm:w-3/4 w-full mt-5 flex-col justify-center' >
                <span className=' flex font-Roman sm:justify-end justify-self-center lg:text-2xl md:text-xl sm:text-lg  text-base mx-auto md:mx-10 sm:mx-8 sm:my-7 text-white'> 0 Hours : 0 Minutes: 0 Secondes</span>
                <span className='text-white flex  sm:justify-end  md:mx-10 sm:mx-8 text-xl justify-self-center mx-auto mt-3 '>www.givenwebsite.com</span>
            </div>
            </div>
            <div className='flex bg-white w-full h-1 shadow-md shadow-amber-600'></div>
            <div className='flex sm:flex-row flex-col  mt-4 w-full '>
                <div className='flex flex-col sm:justify-center justify-self-center  mx-auto w-4/5 sm:w-2/4 mt-10 sm:order-1 order-2'>
               { list.map((t)=>(
         <div className='flex flex-row justify-between items-center  bg-bgdiv gap-4  my-2 rounded-md h-16' key={t.id}>
           <div className='flex w-1/5 px-6 text-white font-Roman '>{t.rank}</div><div className='flex w-2/5 text-white font-Roman'>{t.name}</div><div className='flex w-2/5 justify-end mr-7 text-white font-Roman text-sm'>10 Mins : 10 Secs</div>
         </div> 
       ))}
                </div>
                <div className='flex flex-col w-1/3 mt-20  justify-self-center mx-auto  sm:mx-4 sm:justify-center sm:order-2 order-1 '>
                <img src={Gameph2} className=' sm:w-6/12 sm:mx-auto'/>
                <span className='flex  text-color1 md:text-6xl justify-center sm:mx-auto text-5xl   mt-6 font-Roman   '>TEAMNAME</span>

                </div>
                

            </div>
      
    </div>
  )
}

export default Platform
