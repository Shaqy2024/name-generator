import Sidebar from '@/components/Sidebar'
import React from 'react'

const BusinessName = () => {
  return (
    <div className='px-20'>
      <h1 className='mt-10 text-4xl text-white font-semibold text-center border-b pb-10 border-gray-500'>Business Name</h1>
  
  <div className='flex justify-center gap-10 mt-10'>
    <div className='w-[25%] '>
      <Sidebar />
    </div>
    <div className='w-[75%] border'></div>
    </div> 
    </div>
  )
}

export default BusinessName