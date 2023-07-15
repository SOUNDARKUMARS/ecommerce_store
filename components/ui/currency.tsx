'use client'

import { useEffect, useState } from "react"

const formatter =new Intl.NumberFormat('en-us',{
    style:'currency',
    currency:'INR'
})
interface CurrencyProp{
    value:string | number
}

const Currency:React.FC<CurrencyProp>= ({value}) => {
  const [isMounted, setIsMounted]=useState(false)
  useEffect(()=>{setIsMounted(true)},[])
  if(!isMounted) {return null}
  return (
    <div className="font-semibold">
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency