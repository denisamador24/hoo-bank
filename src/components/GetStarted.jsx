import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className='bg-black w-full h-full rounded-full flex justify-center items-center'>
        <p className='text-gradient font-poppins font-medium'>
          <span>Get</span>
          <img width="16px" src={arrowUp} alt="arrow" className='inline-block m-[4px]' />
          <br />
          <span>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted