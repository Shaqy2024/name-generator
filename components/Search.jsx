"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast, Toaster } from 'sonner'
import { QueryDialog } from './QueryDialog'
import { useQueryContext } from '@/context/BusinessNameContext'

export const Search = () => {
  const {query, updateQuery} = useQueryContext()
  const [keyword, setKeyword] = useState('')
  const [queryDialog, setQueryDialog] = useState(false)
  const handleKeyword = (e)=>{
    setKeyword(e.target.value)

  }


const showQueryDialog = () =>{
  if(!keyword){
 return toast("plise enter a keyword", {
  description: "you must enter a keyword to generate a name"} )

  }

  updateQuery({keyword})
  setQueryDialog(!queryDialog)



}

  return (
    <div className='flex justify-center items-center pt-5'>
    <div className='w-[500px] flex items-center gap-5'>
<Input onChange={handleKeyword} placeholder='Enter Keyword...' className='h-12 text-white md:text-md border-primary' />
<Button onClick={showQueryDialog} className='h-12 text-lg px-5 cursor-pointer'>Generate</Button>
<QueryDialog queryDialog={queryDialog}  setQueryDialog={setQueryDialog} keyword={keyword}/>
    </div>
    </div>
  )
}
