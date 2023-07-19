'use client'

import Image from "next/image"
import { Tab } from "@headlessui/react"
import {Image as ImageType} from '@/types'
import GalleryTab from "./gabllery-tab"


interface GallerProps{
    images:ImageType[]
}



const Gallery:React.FC<GallerProps> = ({images}) => {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
        <div className="mx-auto object-contain mt-6 hidden w-full max-w-2xl block max-w-none">
            <Tab.List className='grid grid-cols-4 gap-6'>
                {images.map((image)=>(
                    <GalleryTab key={image.id} image={image}/>
                ))}
            </Tab.List>
        </div>
        <Tab.Panels className='aspect-square w-full'>
            {images.map((image)=>(
                <Tab.Panel key={image.id}>
                    <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
                        <Image src={image.url} fill alt="product_image" className='object-contain object-center'/>
                    </div>
                </Tab.Panel>
            ))}

        </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery
