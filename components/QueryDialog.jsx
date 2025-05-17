import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { nameStyle, Randomness } from '@/helpers/constant'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useQueryContext } from '@/context/BusinessNameContext'
import { useRouter } from 'next/navigation'


export const QueryDialog = ({queryDialog, setQueryDialog}) => {

  const router = useRouter()

  const {query, updateQuery} = useQueryContext()
  const handlenameStyle = (nameStyle) => {
    updateQuery({nameStyle})
    
  }
    const handleRandomNess = (randomness) => {
      updateQuery({randomness})
      
    
  }
  const handleFormField = (e) =>{
    updateQuery({[e.target.name]: e.target.value})
  }

  const generateBusinessName = () =>{
router.push("/business-name")
  }

  return (
    <div><Dialog open={queryDialog} onOpenChange={setQueryDialog}>
 
  <DialogContent>
    <DialogHeader>
      <DialogTitle></DialogTitle>
    </DialogHeader>
    <Tabs defaultValue="NameStyle" >
  <TabsList className="p-0 bg-transparent gap-5 mb-3">
    <TabsTrigger value="NameStyles" className="text-md border data-[state=active]:bg-primary ">Name Styles</TabsTrigger>
    <TabsTrigger value="Randomness" className="text-md border data-[state=active]:bg-primary ">Randomness</TabsTrigger>
    <TabsTrigger value="BrandInfo" className="text-md border data-[state=active]:bg-primary ">Brand Info</TabsTrigger>
  </TabsList>
  <TabsContent value="NameStyles">
    
<h4 className='text-lg font-semibold mb-3'>Select Name Style</h4>
<RadioGroup defaultValue="Medium" onValueChange={handlenameStyle} className="grid grid-cols-2 gap-4">
  
  {nameStyle.map((singleNameStyle)=>
  <Label key={`nameStyle${singleNameStyle.id}`} html={`nameStyle${singleNameStyle.id}`} className="p-2 rounded border flex gap-5 items-center ">
        <RadioGroupItem value={singleNameStyle.name} id={`nameStyle${singleNameStyle.id}`}/>
        <div>
          <p className='text-lg font-semibold'>{singleNameStyle.name}</p>
          <p className='text-sm text-muted-foreground'>{singleNameStyle.description}</p>
        </div>
  </Label>
  )}
  
  
 
</RadioGroup>



  </TabsContent>
<TabsContent value="Randomness">
  <h4 className='text-lg font-semibold mb-3'>Select singleRandomNess</h4>
<RadioGroup defaultValue="-Auto" onValueChange={handleRandomNess} className="">
  {Randomness.map((singleRandomNess)=>
  <Label key={`nameStyle${singleRandomNess.id}`} html={`nameStyle${singleRandomNess.id}`} className="p-2 rounded border flex gap-5 items-center mb-1 ">
        <RadioGroupItem value={singleRandomNess.name} id={`nameStyle${singleRandomNess.id}`}/>
        <div>
          <p className='text-lg font-semibold'>{singleRandomNess.name}</p>
          <p className='text-sm text-muted-foreground'>{singleRandomNess.description}</p>
        </div>
  </Label>
  )}
  
  
 
</RadioGroup>
</TabsContent>
<TabsContent value="BrandInfo">
  <h4 className='text-lg font-semibold mb-3'>Enter Brand Info</h4>
  <div className="mb-3">
    <label>Keyword</label>
    <Input value={query?.keyword || ""} onChange={handleFormField}  name="keyword" placeholder="Keyword" />
  </div>

  <div className="mb-3">
    <label>description</label>
    <Input value={query?.description || ""} onChange={handleFormField} name="description" placeholder="description" />
  </div>
  <Button onClick={generateBusinessName}>Genrate</Button>
</TabsContent>
</Tabs>

  </DialogContent>
</Dialog>
</div>
  )
}
