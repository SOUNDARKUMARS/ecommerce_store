'use client'
import { ShoppingBagIcon } from "lucide-react";
import React, { useEffect, useState } from 'react'
import Button from './ui/button'
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {

  const [Ismounted,setIsMonted]=useState(false)
  const router=useRouter()
  const cart=useCart()

  useEffect(()=>{
    setIsMonted(true)
  },[])

  if(!Ismounted) return null

  return (
    <div className='flex items-center ml-auto gap-x-4'>
        <Button onClick={()=>router.push("/cart")} className="flex items-center rounded-full bg-black py-2">
          <ShoppingBagIcon size={20} color="white"/><span className="ml-2 text-sm font-medium text-white">{` (${cart.items.length})`}</span>
        </Button>
    </div>
  )
}

export default NavbarActions