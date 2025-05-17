import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
MoveRight

export const Topbar = () => {
  return (
    <div className='fixesd top-0 left-0 w-full bg-[#202020] flex justify-between px-56 py-8'>
        <Link href="/">
        <h1 className='uppercase text-4xl font-semibold text-primary'>shakib.Ai</h1>
         </Link> 
         <Link href ="https://github.com/Shaqy2024?tab=repositories" className='text-white hover:underline hover:text-primary flex gap-2 items-center' > devlopment and design by shakib
         <MoveRight />
         </Link>
    </div>
  )
}
