"use client" 
import { Product } from "@/types"
import Currency from "./ui/currency"
import { ShoppingCart } from "lucide-react"
import useCart from "@/hooks/use-cart"
import { MouseEventHandler } from "react"
interface InfoProps{
    data:Product
}

const Info:React.FC<InfoProps> = ({data}) => {
    const cart=useCart()
    
    const onAddToCart:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation()
        cart.addItem(data)
    }

  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
        <div className="mt-3 flex items-end justify-between">
            <p className="text-2xl text-gray-750">
                <Currency value={data?.price}/>
            </p>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-col gap-y-6">
        <h3  className="font-semibold gap-x-4 text-blue-500"> Available in all the quantities. Mention the quantity in the cart page.</h3>            

            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold gap-x-4">Shop name:</h3>
                <div className="flex ">
                    {data.color.name}                    
                </div>
            </div>
            <div className="flex gap-x-4">
                <h3 className="font-semibold gap-x-4">Description:</h3>
                <div className="flex ">
                    {data.description2}                    
                </div>
            </div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
            <button onClick={onAddToCart} className='hover:opacity-75 font-semibold rounded-full text-white flex items-center p-3' style={{backgroundColor:'black'}}>Add to Cart <ShoppingCart className="ml-2"/></button>
        </div>
    </div>
  )
}

export default Info