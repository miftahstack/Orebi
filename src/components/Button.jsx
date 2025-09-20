import React from 'react'

const Button = (props) => {
  return (
    <button type="button" className='px-7.5 cursor-pointer py-4 bg-black text-white'>{props.txt}</button>
  )
}

export default Button