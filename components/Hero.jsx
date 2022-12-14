import React from 'react'
import Image from 'next/image'

import GetStarted from './GetStarted';

import { discount, robot } from '../assets'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col md:items-center sm:px-0 px-6 sm:py-16 py-6`}>
    <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px:6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <Image src={discount} alt='discount' width={32} height={32} />
        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px]">
          <span className='text-white '>20%</span> Discount For {" "}
          <span className='text-white '>1 Month</span> Account
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold lg:text-[72px] text-[52px] lg:leading-[100px] leading-[75px] text-white'>
          The Next <br className='sm:block hidden' /> {' '}<span className='text-gradient'>Generation</span> {' '} <br className='sm:block hidden' />
        </h1>
        <div className='sm:block hidden lg:mr-4 mr-0 '>
          <GetStarted />
        </div>
      </div>

      <h1 className='flex-1 font-poppins font-semibold lg:text-[72px] text-[52px] lg:leading-[100px] leading-[75px] text-white'>
        Payment Method
      </h1>
      <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
        We examine annual percentage rates, annual fees.</p>
    </div>

    <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative `}>
      <Image src={robot} alt='Billing' className='w-[100%] h-[100%] relative z-[5] ' />

      <div className='absolute z-[0] w-[40%] opacity-50 h-[30%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] opacity-50 h-[80%] bottom-40 rounded-full white__gradient' />
      <div className='absolute z-[0] w-[50%] opacity-50 h-[50%] right-20 bottom-20 blue__gradient' />
    </div>
    <div className={`sm:hidden flex justify-center items-center`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero