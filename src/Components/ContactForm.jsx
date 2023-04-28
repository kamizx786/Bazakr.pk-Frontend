import React from 'react'

const ContactForm = () => {
  return (
    <form >
          <div className="flex flex-col gap-2 ">
          {/* Field */}
          <div className='"grid grid-cols-2 mb-2'>
        <div className='flex flex-col mb-2'>
          <h4 className="font-sans mb-2">Email</h4>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-12  px-3 border rounded-lg border-neutral-300"
          />
          </div>
          <div className='flex flex-col mb-2'>
           <h4 className="font-sans mb-2">Name</h4>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Enter Your Name"
            className="focus:outline-none
             focus:ring-2 focus:ring-green-600 h-12  px-3 border rounded-lg border-neutral-300"
          />
          </div>


          </div>
             <h4 className="font-sans">Subject</h4>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter Your Subject"
            className="focus:outline-none mb-2
             focus:ring-2 focus:ring-green-600 h-12 w-full px-3 border rounded-lg border-neutral-300"
          />
             <h4 className="font-sans">Description</h4>
          <textarea
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-48 w-full px-3 border rounded-lg border-neutral-300"
          />
              
          {/* Button */}
          <button className="h-12 mt-5 text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
          Submit
          </button>
        </div>
         
        
    </form>
  )
}

export default ContactForm