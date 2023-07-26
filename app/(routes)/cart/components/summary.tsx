import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import emailjs from "emailjs-com";

const Summary = () => {
  const form = useRef<HTMLFormElement>(null);

  const srchPrms = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const total = items.reduce((tot, item) => {
    return tot + Number(item.price);
  }, 0);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fufu9yl", "template_uv6wfby", form.current!, "0k1ikOz8LCyPMcJiE") // Replace with your email.js parameters
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
    toast.success("Order Placed! Item on the way...");
  };

  return (
    <div className="mt-16 bg-gray-100 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center mb-4 justify-between border-t border-gray-200 pt-4">
          <div>Subtotal</div>
          <Currency value={total} />
        </div>
      </div>
      <div>
            <form ref={form} onSubmit={sendEmail} className="fform">
                
                <div className="fflex mt-2">
                    <label>
                        <input required type="text" name='customerName' className="iinput w-full"/>
                        <span>Username</span>
                    </label>

                </div>  
                        
                <label>
                    <input required  name="phoneNumber" className="iinput"/>
                    <span>Phone number</span>
                </label> 
                    
                <label className='messages_span'>
                    <textarea required name='address' className="iinput01"></textarea>
                    <span>Address</span>
                </label>
                    
                <label className='messages_span'>
                    <textarea name='description'  placeholder="Any additional messages (optional)" className="iinput01"></textarea>
                    <span>Just say it!</span>
                </label>
                
                <button className="ffancy">
                    <span className="ttop-key"></span>
                    <input type="submit" value="Place order now" className='text-gray-700 text-xl font-semibold'/>
                    <span className="bbottom-key-1"></span>
                    <span className="bbottom-key-2"></span>
                </button>
            </form>
      </div>
    </div>
  );
};

export default Summary;
