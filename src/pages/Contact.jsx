import React from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <div name='contact' className='w-full h-[95vh] container-color flex justify-center items-center'>
        <form onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className="sm:text-right pb-8 pl-4 flex justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
        </div>
            <input className='text-black bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='text-black bg-[#ccd6f6] my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='text-black bg-[#ccd6f6] p-2' rows="10" placeholder='Message' name="message"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact