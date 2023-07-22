"use client"
import Image from 'next/image'
import ig from '@/components/assets/ig.png'
import whatsApp from '@/components/assets/whatsapp.png'
import linkedin from '@/components/assets/linkedin.png'
import Link from 'next/link'

import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-hot-toast'

const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_7frenui', 'template_49yihj2', form.current, '0k1ikOz8LCyPMcJiE')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          })
          e.target.reset()
          toast.success("Its pleasure to answer you!")
      }
    
  return (
    <div className='grid justify-center mt-16 mb-15'>
        <p className='lg:w-[750px] sm:w-[500px] w-[350px] m-3 text-center'>Hey there, Fashionista! I am happy, you want to get in touch. Whether you have a style question or just want to chat about the latest trends, I am here for you! Feel free to reach out through any of the snazzy methods</p>
        <br />
        <div className='text-center'>
           <p className='text-2xl font-bold m-5'>Lexico Clozet</p>
           <p  className='text-md font-semibold m-5'>SoundarKumar S</p>
           <p  className='text-md font-semibold m-5'>+91 735 899 7258</p>
           <p className='text-sm m-5'>soundarkumarsaravanan@gmail.com</p>
        </div>

        <div className='flex justify-center w-full'>
        <form ref={form} onSubmit={sendEmail} className="fform">
    
                    <div className="fflex">
                        <label>
                            <input required placeholder="" type="text" name='firstname' className="iinput"/>
                            <span>first name</span>
                        </label>

                        <label>
                            <input required placeholder="" name='secondname' type="text" className="iinput"/>
                            <span>last name</span>
                        </label>
                    </div>  
                            
                    <label>
                        <input required placeholder="" name='email' type="email" className="iinput"/>
                        <span>email</span>
                    </label> 
                        
                    <label className='messages_span'>
                        <textarea required name='message'  placeholder="" className="iinput01"></textarea>
                        <span>message</span>
                    </label>
                    
                        <button className="ffancy">
                            <span className="ttop-key"></span>
                            <input type="submit" value="Send Message " className='text-gray-700 font-semibold'/>
                            <span className="bbottom-key-1"></span>
                            <span className="bbottom-key-2"></span>
                        </button>
                </form>
        </div>
<br />
        <div className='flex flex-row gap-10 justify-center my-10'>
           <Link href={'https://www.instagram.com/snd_axe_.k/'} target='blank'><Image src={ig} alt='Instagram'width={75} height={75}/>    </Link>      
           <Link href={'https://api.whatsapp.com/send?phone=7358997258'} target='blank'><Image src={whatsApp} alt='WhatsApp'width={75} height={75}/>   </Link>       
           <Link href={'https://www.linkedin.com/in/soundar-kumar-41a682219/'} target='blank'><Image src={linkedin} alt='LinkedIn'width={75} height={75}/>  </Link>       
        </div>

        <div>
            {/* live chat */}
        </div>
    </div>
  )
}

export default Contact