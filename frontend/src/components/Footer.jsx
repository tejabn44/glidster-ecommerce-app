import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti autem accusantium eum quia, voluptatem labore pariatur consequatur. Eos temporibus autem repudiandae voluptatem sequi ab sit aliquid dignissimos odit cum assumenda maxime quasi laborum  sed asperiores molestiae veritatis.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Ploicy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-meduim mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-983-343-8564</li>
                    <li>contact@Glidster.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Glidster.com - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer
