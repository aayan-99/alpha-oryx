import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1 className='my-8'>Join the Alpha-Oryx community</h1>
        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4' type="text" placeholder='Enter your email' />
            <button>Sign Up</button>
            <div className='flex items-center justify-center py-2'>
                <input className='mr-2' type="checkbox"/>
                <p className='mr-2'>Yes, I agree to recieve email communication from Alpha-Oryx.</p>
            </div>
        </div>
    </div>
  )
}

export default Subscribe