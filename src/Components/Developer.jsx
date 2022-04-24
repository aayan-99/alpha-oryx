import React from 'react'
import cmd from '../assets/images/cmd.png'

const Developer = () => {
  return (
    <div className='w-full text-white bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
            <div className='py-7'>
                <h1 className='my-4'>Superpowers for AO developers.</h1>
                <p>Checkout the <span className='text-[color:var(--primary-blue)]'>documentation</span>, the <span className='text-[color:var(--primary-blue)]'>quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
            </div>
            <div className='flex justify-center w-full py-5'>
                <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={cmd} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Developer