import React from 'react'
import Gameph from '../images/BattleoftheBastards.png'
import Gameph2 from '../images/Kinginthenorth.png'

var list =[{"id":1,"rank":1,"name":"kjdjsq","time":4638},{"id":2,"rank":1,"name":"kjdjsq","time":4638},{"id":3,"rank":1,"name":"kjdjsq","time":4638},{"id":4,"rank":1,"name":"kjdjsq","time":4638}]
function Platform() {
  return (
    <div className='flex flex-col h-screen'>
        <div className='flex flex-row w-full h-60'>
            <div className='flex w-1/3 m-10'>
                <img src={Gameph} alt="photo" className=' '/>
            </div>
            <div className='flex w-2/3  m-5  flex-col justify-center' >
                <span className=' flex font-GameTh justify-end text-3xl mx-12 my-7 text-slate-50'> 0 Hours : 0 Minutes: 0 Secondes</span>
                <span className='text-slate-50 flex justify-end text-xl mr-12'>www.givenwebsite.com</span>

            </div>
            

            </div>
            <div className='flex bg-white w-full h-1 shadow-md shadow-amber-600'></div>
            <div className='flex flex-row m-4'>
                <div className='flex flex-col justify-center  w-2/3 mt-10 ml-5'>
               { list.map((t)=>(
         <div className='flex flex-row justify-between items-center w-5/6 bg-bgdiv gap-4  my-2 rounded-md h-16' key={t.id}>
           <div className='flex w-1/5 px-6 text-white font-GameTh '>{t.rank}</div><div className='flex w-2/5 text-white font-GameTh'>{t.name}</div><div className='flex w-2/5 justify-end mr-7 text-white font-GameTh text-sm'><span className=' font-GameTh '>10</span> Mins : <span>10</span> Secs</div>
         </div> 
       ))}

                </div>
                <div className='flex flex-col w-1/3 mt-32 ml-28 '>
                <img src={Gameph2} alt="photo" className=' w-52 h-20 '/>
                <span className=' text-color1 text-3xl flex justify-center mr-56 mt-6 font-GameTh xl:text-6xl'>TEAMNAME</span>

                </div>
                

            </div>
      
    </div>
  )
}

export default Platform
