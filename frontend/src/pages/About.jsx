import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16' >
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Glidster was born out of a passion for innovation and a desire to bring meaningful products to customers across the country. From day one, our goal has been to make shopping more accessible, reliable, and enjoyable for everyone. We blend technology with thoughtful design to ensure a smooth and satisfying experience — from browsing to checkout.</p>
        <p>Since our inception, we've worked tirelessly to curate a diverse selection of products that cater to the evolving needs of our customers. Whether it's everyday essentials or something unique, Glidster is committed to quality, fast delivery, and secure payments. With trusted gateways like Razorpay and Stripe, we’re building a future where online shopping is effortless and rewarding.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Glidster is to empower customers with choice, convenience, and quality. We’re dedicated to simplifying the online shopping experience while delivering trusted products and reliable service. Through continuous innovation and a customer-first approach, we strive to make every purchase seamless, satisfying, and secure.</p>
      </div>
    </div>

    <div>
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
      </div>
    </div>

    <NewsletterBox />

  </div>

  )
}

export default About