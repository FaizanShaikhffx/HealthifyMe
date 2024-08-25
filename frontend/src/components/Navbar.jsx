import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>
        {/* <p>HealthifiMe</p> */}
        <img className='w-72' src="/nav-logo.png" alt="" />

        <div className='flex items-center mr-10'>
          <ul className='flex gap-5 items-center'>
            <li className='text-xl pr-7'>about</li>
            <li className='text-xl pr-7'>about</li>
            <li className='text-xl '>about</li>
          </ul>
        </div>
        


    </div>
  )
}

export default Navbar
