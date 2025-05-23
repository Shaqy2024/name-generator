import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
MoveRight

export const Topbar = () => {
  return (
    <div className='fixesd top-0 left-0 w-full bg-[#202020] flex justify-between md:px-56 px-5 md:py-8 py-5'>
        <Link href="/">
        <h1 className='uppercase md:text-4xl text-3xl font-semibold text-primary'>shakib.Ai</h1>
         </Link> 
         <Link href ="https://github.com/Shaqy2024?tab=repositories" className='text-white hover:underline hover:text-primary flex gap-2 items-center' > devlopment by shakib
         <MoveRight />
         </Link>
    </div>
  )
}
