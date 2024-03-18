"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "100%",
      transition: {
        repeat: Infinity,
        repeatType:"",
        duration: 50,
      },
    },
  };
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
          form.current, 
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return ( 
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">

    <motion.div
        className="slidingTextContainer absolute text-slate-400 bottom-0 whitespace-nowrap font-bold text-md md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl w-full md:w-1/2"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
    >
       📧 sagadaljulios35@gmail.com • 📞 +(63) 961 437 3105 • 📧 sagadaljulios35@gmail.com • 📞 +(63) 961 437 3105 • 📧 sagadaljulios35@gmail.com • 📞 +(63) 961 437 3105 •
        
    </motion.div>


        <main
        className="flex items-center justify-center px-2 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
        <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="#">
            </a>

                <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl md:text-5xl">
                Send a message
                </h1>

            <form ref={form} onSubmit={sendEmail} className="mt-8 grid grid-cols-4 gap-4">
            <div className="col-span-6 sm:col-span-4">
                <label for="Firstname" className="block text-sm font-medium text-gray-700">
                Name
                </label>

                <input
                type="text"
                name="user_name"
                id="FirstName"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                placeholder="Your name here"
                />
            </div>

            <div className="col-span-6 sm:col-span-4">
                <label for="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                <input
                type="email"
                name="user_email"
                id="Email"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                placeholder="your_email@gmail.com"
                />
            </div>

            <div className="col-span-6 sm:col-span-4">
            <label for="OrderNotes" className="block text-sm font-medium text-gray-700"> Message </label>

            <textarea
                id="OrderNotes"
                name="user_message"
                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm p-2"
                rows="4"
                placeholder="Your message here..."
            ></textarea>
            </div>

            <div className="col-span-6">
                <label for="MarketingAccept" className="flex gap-4">
                <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and company announcements.
                </span>
                </label>
                <div className="p-2 m-2">
                  {/* Email JS service ID: service_svp0bkb */}
                  {/* Email JS template ID: template_1yctw6u */}
                  {/* Email JS public key: h6Klc_X5oioGB_msk */}
                  {success && (
                    <span className="text-green-600 font-semibold">
                      Your message has been sent successfully!
                    </span>
                    )}
                  {error && (
                    <span className="text-red-600 font-semibold">
                      Something went wrong!
                    </span>
                  )}
                </div>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                {/* <Rounded> */}

                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Submit
                    </button>

                {/* </Rounded> */}

            </div>

            </form>
        </div>
        </main>
    </div>
   );
}
 
export default Contact;