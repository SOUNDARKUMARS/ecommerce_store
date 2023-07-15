'use client'
import PreviewModal from "@/components/preview-modal"
import { useEffect, useState } from "react"

const ModalProvider=()=>{
    const [IsMounted,SetIsMounted]=useState(false)
    useEffect(()=>{
        SetIsMounted(true)
    },[])

    if(!IsMounted) return null
    
    return(
        <div>
            <PreviewModal/>
        </div>
    )
}

export default ModalProvider