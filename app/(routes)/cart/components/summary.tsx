'use client'
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { toast } from "react-hot-toast"
import Currency from "@/components/ui/currency"
import Button from "@/components/ui/button"
import useCart from "@/hooks/use-cart"
import { useEffect } from "react"



const Summary = () => {
    const srchPrms=useSearchParams()
    const items=useCart((state)=>state.items)
    const removeAll=useCart((state)=>state.removeAll)

    useEffect(()=>{
        if(srchPrms.get('success')){
            toast.success("Payment completed.")
        }
        if(srchPrms.get('canceled')){
            toast.success("Somthing went wrong.")
        }
    },[srchPrms,removeAll])

    const total=items.reduce((tot,item)=>{
        return tot+Number(item.price)
    },0)

    const onCheckOut=async()=>{
        const response=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
            productIds:items.map((item)=>item.id)
        })
        window.location=response.data.url        
    }


  return (
    <div className="mt-16 bg-gray-100 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
        <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div>
                    Subtotal
                </div>
                <Currency value={total}/>
            </div>
        </div>
        <Button disabled={items.length===0} onClick={onCheckOut}  className="w-full mt-6">Checkout</Button>
    </div>
  )
}

export default Summary