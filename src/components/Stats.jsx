import React from 'react'
import { stats } from '../constants'
import styles from '../styles'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6 mt-4`}>
      {stats.map( (stat, index) => (
        <div key={stat.id} className='flex-1 flex gap-4 justify-start items-center'>
          <p className='font-poppins font-semibold sx:text-[40px] text-[30px] sx:leading-[53px] leading-[43px] text-white'>{stat.value}</p>
          <p className='font-poppins font-normal text-[20px] sx:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
          {!(stats.length - 1 === index) && <div className='h-[16px] w-[2px] md:bg-slate-400 m-auto' />}
        </div>
      ))}
    </section>
  )
}

export default Stats