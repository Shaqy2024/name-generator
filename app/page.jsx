import { Search } from "@/components/Search";
import { Button } from "@/components/ui/button";
import { Filter, Heart, Lightbulb } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="pt-20 md:w-screen md:h-screen">
   
   <div className="md:px-0 px-5" >
    <h1 className="md:text-5xl text-4xl text-white capitalize font-semibold text-center mb-5"> Business Name Generator</h1>
    <p className="text-white text-center text-xl">Generate the perfect Business name by our ai-powered business name generator tool !</p>
   <Search />
   </div>

<div className='md:flex justify-between gap-10 mt-20 md:px-56 px-5'>
<div className="md:mb-0 mb-10">
  <Lightbulb className="text-primary mb-3" size={23}/>
  <h4 className="text-white test-lg font-bold">Genrate Idea</h4>
  <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Laudantium natus aliquam iste! Assumenda officia obcaecati 
     nam quod est, ullam explicabo?</p>
</div>
<div className="md:mb-0 mb-10">
  <Filter className="text-primary mb-3" size={23}/>
  <h4 className="text-white test-lg font-bold">Filter Result</h4>
  <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Laudantium natus aliquam iste! Assumenda officia obcaecati 
     nam quod est, ullam explicabo?</p>
</div>
<div className="md:mb-0 mb-10">
  <Heart className="text-primary mb-3" size={23}/>
  <h4 className="text-white test-lg font-bold">Save Name</h4>
  <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Laudantium natus aliquam iste! Assumenda officia obcaecati 
     nam quod est, ullam explicabo?</p>
</div>
</div>

    </div>
  );
}
