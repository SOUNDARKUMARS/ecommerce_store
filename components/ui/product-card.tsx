'use client'
import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./icon-button"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { useRouter } from "next/navigation"
import usePreviewModal from "@/hooks/use-prev-modal"
import { MouseEventHandler } from "react"
import useCart from "@/hooks/use-cart"

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ProductCard{
    data:Product

}


const ProductCard:React.FC<ProductCard> = ({data}) => {
    const previewModal=usePreviewModal()
    const cart=useCart()
    const onPreview:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation()
        previewModal.onOpen(data)
    }

    const onAddToCart:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation()
        cart.addItem(data)
    }

 

    const router=useRouter()
    const handleClick=()=>{
        router.push(`/product/${data.id}`)
    }
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 " onClick={handleClick}>
        <div className='aspect-square rounded-xl bg-gray-100 relative'>
            <Image alt="product image" src={data?.images?.[0]?.url} height={470} width={420} style={{ mixBlendMode: "multiply" }} className='aspect-square object-contain rounded-md'/>
            <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                <div className="flex gap-x-6 justify-center ">
                    <IconButton onClick={onPreview}
                    icon={<Expand size={20} className='text-black'/>}
                    />
                    <IconButton onClick={onAddToCart}
                    icon={<ShoppingCart  size={20} className='text-black'/>}
                    />
                </div>
            </div>
        </div>
        {/* description about the product */}
        <div>
            <p className="font-semibold text-xl opacity-90">{data.name || <Skeleton/>}</p>
            <p className="text-sm text-gray-500 ">{data.category.name|| <Skeleton/>}</p>
            <div className="flex items-center justify-between">
                <Currency value={data.price} />
            </div>
        </div>
    </div>
  )
}

export default ProductCard