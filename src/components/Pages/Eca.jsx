import React from 'react'
import school2 from '../../assets/school1.jpg'

const Faculty = () => {
  return (
    
    <div className='container mx-auto pt-10'>
      
      
      <div className='flex-col relative  top-14 max-h-[400px] '>
      <span className='text-blue-800 font-bold text-2xl'>Our  Community</span>
      <div className="h-[3px] w-[80px] bg-blue-800  ml-[230px] mt-[-18px]"></div>
      <p className='flex-col text-black  w-[400px] font-bold pt-8 '>The faculty at Antarikshya strives to cultivate a nurturing environment for all learners. The dedicated faculty members of our school are the backbone of our educational community, bringing passion, expertise, and innovation to the classroom every day. With their unwavering commitment to student success, they create engaging learning environments that inspire curiosity, critical thinking, and lifelong learning.</p>

        </div>

        <div className='flex flex-col items-end mt-[-200px]'>
        <img className='absolute h-[400px] w-[400px] rounded-lg mt-[-30px] mr-[200px] z-10' src={school2} alt="" />
     <div className="relative h-[400px] w-[250px] bg-blue-800 mr-[-20px] mt-[-80px] z-0"></div>

</div>


<div className='   max-h-[1000px] mt-[180px] '>
<span className='text-blue-800 font-bold text-2xl'>Our Team</span>
      <div className="h-[3px] w-[80px] bg-blue-800  ml-[230px] mt-[-18px]"></div>


{/* image halanw parni item is down below just given background and sizing  */}
      <div className=" h-[400px] w-[1200px] bg-current ml-[90px] mt-[50px] "></div>
   <div className='  ml-[120px] mt-[50px]'>
  <p className='flex-col text-black  w-[1200px]   pt-8'>
  Our school team members are the driving force behind our collective success, working collaboratively to create a positive and enriching environment for all. Comprising teachers, administrators, support staff, and volunteers, our team is united by a shared commitment to the well-being and growth of every student.
  </p>
  <p className='flex-col text-black  w-[1200px]   pt-10'>
  Whether in the classroom, on the sports field, or in the community, our team members exemplify dedication, creativity, and compassion. Together, we celebrate diversity, foster inclusivity, and cultivate a culture of respect and teamwork. With each member bringing their unique skills and perspectives to the table, our team is stronger and more resilient, empowering each other and our students to reach new heights of achievement and fulfillment.
  </p>
   </div>


</div>

<div className='relative h-[600px] w-full bg-blue-950 mt-[50px]'>

  <div className='absolute flex flex-col items-center justify-center ml-[350px] mt-[50px]'>
  <div className="h-[3px] w-[80px] bg-white mr-[-120px] ml-[150px]"></div>
<span className='text-white font-bold ml-[160px] text-2xl'>FOUNDERS</span>
      <div className="h-[3px] w-[80px] bg-white  ml-[30px] "></div>


      <p className='flex items-center justify-center font-bold text-xl text-white mt-[100px] mr-[300px]'>Antarikshya School was founded by Mr. Ram Shrestha and Ms. Sita Pathak in 1998</p>
       

      <div className="flex justify-between space-x-[150px] mr-[300px]">
  <div className="w-[200px] h-[200px] rounded-full bg-gray-300"></div>
  <div className="w-[200px] h-[200px] rounded-full bg-gray-300"></div>
</div>

<div className="flex justify-between space-x-[150px] pt-8 mr-[300px]">

  <div className='w-[352px] h-[98px] bg-gray-300 mr-[80px]'></div>
  <div className='w-[352px] h-[98px] bg-gray-300 mr-[80px]'></div>
</div>





  </div>

  

</div>





    </div>
  )
}

export default Faculty
