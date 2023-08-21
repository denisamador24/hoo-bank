import React from 'react'
import styles from '../styles'

const Button = ({ styles }) => {
  return (
    <button className={`mt-8 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary, outline-none rounded-[8px]`}>
      Get Started
    </button>
  )
}

export default Button