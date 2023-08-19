import React from 'react'
import styles from '../styles';
import { discount, robot } from '../assets';
import { GetStarted } from '../components'

const Hero = () => {
  return (
    <section id='home' className={`flex flex-col md:flex-row gap-y-20`}>
      <div className='flex-1 xl:px-0 sm:px-16 px-6'>
        <div className=' w-[370px] flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            width="32px"
            src={discount}
            alt="discount"
          />
          <p className={`${styles.paragraph}`}>
            <span className='text-white'> 20% </span>
            Discount For {" "}
            <span className='text-white'>1 Month</span>
            Account
          </p>
        </div>
        <div className='relative'>
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next
            <br />
            <span className='text-gradient'>Generation</span>
            <br />
            Payment Method.
          </h1>
          <div className='md:flex hidden md:mr-4 mr-0 absolute top-0 right-[-68px]'>
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className=' flex-1 justify-center relative'>
        <img width="100%" src={robot} alt="billing" />
        <div className='absolute z-[0] w-[70%] h-[35%] left-[10%] top-0 pink__gradient'></div>
        <div className='absolute z-[0] w-[30%] h-[35%] left-[30%] bottom-[20%] blue__gradient'></div>
      </div>

      <div className={`md:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero