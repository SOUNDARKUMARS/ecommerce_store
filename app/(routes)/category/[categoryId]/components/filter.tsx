'use client'

import Button from "@/components/ui/button"
import { Color } from "@/types"
import {  } from "@/types"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import qs from "query-string"
import { cn } from "@/lib/utils"


interface FilteProps{
  data:(Color)[]
  name:string
  valueKey:string
}



const Filter:React.FC<FilteProps> = ({data,name,valueKey}) => {
  const searchParams=useSearchParams()
  const router= useRouter()

  const selectedValue=searchParams.get(valueKey)

  const onclick=(id:string)=>{
    const current=qs.parse(searchParams.toString())
    const query={
      ...current, 
      [valueKey]:id
    }

    if(current[valueKey]==id){
      query[valueKey]=null
    }

    const url=qs.stringifyUrl({
      url:window.location.href,
      query:query
    },{skipNull:true})

    router.push(url)
}
  return (
    <div className='mb-8'>
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter)=>(
          <div key={filter.id} className="flex items-center">
              <Button className={cn('rounded-full text-sm text-gray-800 p-2 bg-white border-gray-400 hover:bg-gray-300 hover:text-black',selectedValue==filter.id && 'bg-black text-white')}
              onClick={()=>onclick(filter.id)}
              >
                {filter.name}
                
              </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter