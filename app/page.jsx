import { Search } from "@/components/Search";
import { Button } from "@/components/ui/button";
import { Filter, Heart, Lightbulb } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="pt-20 w-screen h-screen">
   
   <div >
    <h1 className="text-5xl text-white capitalize font-semibold text-center mb-5"> Business Name Generator</h1>
    <p className="text-white text-center text-xl">Generate the perfect Business name by our ai-powered business name generator tool !</p>
   <Search />
   </div>

<div className='flex justify-between gap-10 mt-20 px-56'>
<div>
  <Lightbulb className="text-primary mb-3" size={23}/>
  <h4 className="text-white test-lg font-bold">Genrate Idea</h4>
  <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Laudantium natus aliquam iste! Assumenda officia obcaecati 
     nam quod est, ullam explicabo?</p>
</div>
<div>
  <Filter className="text-primary mb-3" size={23}/>
  <h4 className="text-white test-lg font-bold">Filter Result</h4>
  <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Laudantium natus aliquam iste! Assumenda officia obcaecati 
     nam quod est, ullam explicabo?</p>
</div>
<div>
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
