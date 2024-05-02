// this is the facilities section 
import React from 'react'
import bus from '../../assets/bus.png'
import Library1 from '../../assets/Library1.png'
import Library2 from '../../assets/Library2.png'
import canteen from '../../assets/canteen.png'
import Lab1 from "../../assets/Lab1.png"
import Lab2 from "../../assets/Lab2.png" 

const Facilities = () => {
  return (
    <div className='container mx-auto pt-10'>
       <span className='text-blue-800 font-bold text-2xl'>Our  Facilities</span>
      <div className="h-[3px] w-[80px] bg-blue-900  ml-[230px] mt-[-18px]"></div>

      <p className='flex-col text-blue-900 w-[400px] font-bold pt-12 text-2xl '>Transportion</p>

      <div className='pt-12 flex gap-[100px] justify-center '>
      <img className='w-[548px] h-[524px] max-sm:w-[500px] rounded-lg py-2' src={bus} alt="" />
      <img className='w-[548px] max-sm:w-[500px] rounded-lg py-2' src={bus} alt="" />
      </div>

      </div>
  )
}

export default Facilities