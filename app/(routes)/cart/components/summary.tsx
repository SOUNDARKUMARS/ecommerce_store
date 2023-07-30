import { useState, useRef } from "react";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Summary = () => {


  
  const form = useRef<HTMLFormElement>(null);

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [description, setdescription] = useState("");
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const total = items.reduce((tot, item) => {
    return tot + Number(item.price);
  }, 0);

  const toggleConfirmationModal = () => {
    setConfirmationOpen((prevState) => !prevState);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cartItemsContent = items
      .map((item) => `${item.name} - ${item.price}`)
      .join("\n");

    const templateParams = {
      customerName,
      phoneNumber,
      address,
      cartItems: cartItemsContent,
      description,
    };

    emailjs
      .send("service_fufu9yl", "template_uv6wfby", templateParams, "0k1ikOz8LCyPMcJiE")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    closeConfirmationModal(); // Close the confirmation modal after sending the email
    e.currentTarget.reset();
    // toast.success("Order Placed! Item on the way...");
    removeAll();
  };

  const closeConfirmationModal = () => {
    setConfirmationOpen(false);
  };

  const isCartEmpty = items.length === 0;
  const isFormInvalid = !customerName || !phoneNumber || !address;

  const notify=()=>{
    toast.success('Your order has been placed successfully.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

  }
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
              <input
                required
                type="text"
                name="customerName"
                className="iinput customername_input w-full"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <span>Username</span>
            </label>
          </div>

          <label>
            <input
              required
              name="phoneNumber"
              className="iinput"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span>Phone number</span>
          </label>

          <label className="messages_span">
            <textarea
              required
              name="address"
              className="iinput01"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <span>Address</span>
          </label>

          <label className="messages_span">
            <textarea
              name="description"
              placeholder="Quanity or Description or Messages"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="iinput01"
            ></textarea>
            <span>optional</span>
          </label>

          {/* Display cart items in the form */}
          {items.map((item, index) => (
            <div key={index} className="fflex mt-2">
              <label>
                <input
                  type="submit"
                  name={`cartItems`}
                  className="iinput w-full text-gray-400 bg-gray-50"
                  readOnly
                  value={`${item.name} - ${item.price}`}
                />
              </label>
            </div>
          ))}

          {/* Open the confirmation modal when the user clicks Continue */}
          <button className="ffancy rounded-md" type="button"  disabled={isCartEmpty || isFormInvalid} onClick={toggleConfirmationModal}>
            <span className="ttop-key"></span>
            <input type='button' value="Continue" className="  text-gray-700 hover:bg-[lightgreen] transition-colors text-xl font-semibold" />
            <span className="bbottom-key-1"></span>
            <span className="bbottom-key-2"></span>
          </button>

          {/* Confirmation Modal */}
          <br />
          {isConfirmationOpen && (
            <div className="confirmation-modal">
              <div className="confirmation-modal-content">
                <h2 className='font-semibold text-center text-xl'>Confirm Order</h2>
                <p className="text-center text-gray-600 m-3">We will call you for confirmation and you can receive within an hour ! click  <span className='text-gray-800 my-2'> 'Confirm Order'  </span> to place your order. </p>
                <div className="confirmation-modal-buttons flex justify-center">
                  <button className="cancel-button flex-1 p-2 mr-2 bg-red-200 text-red-500 rounded-md hover:bg-red-300 hover:text-red-800 transition-colors" onClick={closeConfirmationModal}>
                    Cancel
                  </button>
                  <button onClick={notify}  disabled={isCartEmpty || isFormInvalid} className="confirm-button flex-1 cancel-button p-2 bg-green-200 text-green-500 hover:bg-green-300 hover:text-green-800 transition-colors rounded-md" type='submit'>
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"/>
    </div>
  );
};

export default Summary;
