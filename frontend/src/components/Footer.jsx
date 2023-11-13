import React from 'react'

function Footer() {
  return (
    <>
    <div className='mt-8 bg-black px-8 md:px-[500px] flex flex-col md:flex-row space-y-4 md:space-y-0 items-start justify-between text-sm md:text-md py-8 md:mt-8'>
      <div className='flex flex-col text-slate-300 '>
        <p>Featured Blog</p>
        <p>Most Viewed</p>
        <p>Readers Choice</p>
      </div>
      <div className='flex flex-col text-slate-300 '>
        <p>Forum</p>
        <p>Support</p>
        <p>Recent Posts</p>
      </div>
      <div className='flex flex-col text-slate-300 '>
        <p>Privacy Policy</p>
        <p>About Us</p>
        <p>Terms and Conditions</p>
        <p>Terms of Service</p>
      </div>
    </div>
    <p className='py-2 pb-2 text-center text-slate-300 bg-black'>All Rights Reserved @Prasanna Shrestha</p>
    </>
  )
}

export default Footer
