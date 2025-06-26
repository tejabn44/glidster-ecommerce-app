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
        <p>Forever was born out of a passion for innovation and a desire to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum pariatur quas temporibus sit optio deleniti dolorem debitis repellendus?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum nulla suscipit quam nesciunt facilis autem dolorum, iusto ex tenetur.</p>
        <p>Since our inception, we've worked tirelessly to curate a diverse selection of products that cater to the evolving needs of our customers. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia eaque voluptatem, quod rem tempora expedita dignissimos facilis temporibus nesciunt eligendi reiciendis quaerat iste quidem. Illo corrupti modi voluptatibus delectus pariatur.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Forever is to empower customers with choice, convenience, and quality. Quidem labore molestias itaque maiores perspiciatis! Quis asperiores accusantium error animi. Cumque sint sapiente sunt voluptatum obcaecati quod quibusdam perspiciatis similique doloremque.</p>
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