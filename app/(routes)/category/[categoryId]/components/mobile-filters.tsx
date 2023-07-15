'use client'

import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import { Color, Size } from "@/types"
import { Dialog } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import Filter from "./filter"

interface MobileFiltersProps{
    sizes:Size[]
    colors:Color[]
}

const MobileFilters:React.FC<MobileFiltersProps> = ({sizes,colors}) => {

    const [open,setOpen]=useState(false)
    const onOpen=()=>{setOpen(true)}
    const onClose=()=>{setOpen(false)}
  return (
    <div className="flex items-center gap-x-2 lg:hidden">
        <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
            Filters <Plus size={20}/>
        </Button>    
        <Dialog open={open} as="div" className='relative z-40 lg:hidden' onClose={onClose} >
          <div className="fixed inset-0 backdrop-blur-sm  duration-300 bg-black bg-opacity-30"/>
          <div className="flex inset-0 z-40 fixed">
            <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
              <div className="flex items-center justify-end px-4">
                <IconButton onClick={onClose} icon={<X size={15}/>}/>
              </div>
              
              <div className="p-4">
                <Filter valueKey="sizeId" name="Sizes" data={sizes}/>
                <Filter valueKey="colorId" name="Colors" data={colors}/>
              </div>

            </Dialog.Panel>
          </div>
        </Dialog>  
    </div>
  )
}

export default MobileFilters