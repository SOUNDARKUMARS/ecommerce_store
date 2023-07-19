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
<<<<<<< HEAD
        <div className="mx-auto object-contain mt-6 block w-full max-w-2xl sm:block lg:max-w-none">
=======
        <div className="mx-auto object-contain mt-6 hidden w-full max-w-2xl block max-w-none">
>>>>>>> 716997a3e50d608ca7a21c61dad2ea5bf1efdc68
            <Tab.List className='grid grid-cols-4 gap-6'>
                {images.map((image)=>(
                    <GalleryTab key={image.id} image={image}/>
                ))}
            </Tab.List>
        </div>
        <Tab.Panels className='aspect-square w-full'>
            {images.map((image)=>(
                <Tab.Panel key={image.id}>
                    <div className='aspect-square relative h-full w-full sm:rounded-lg'>
                        <Image src={image.url} fill alt="product_image" className='object-contain object-center'/>
                    </div>
                </Tab.Panel>
            ))}

        </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery
