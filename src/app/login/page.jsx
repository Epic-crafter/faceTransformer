import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#DED0C5] flex flex-col justify-center items-center'>
      <div className='py-12'>
        <h1 className='font-bigerside-expanded  font-[900] md:text-[70px] text-[50px] text-white mt-10'>Login</h1>
        <div className='flex flex-col py-20 px-10 gap-6 border-[1px] rounded-[10px] border-black bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96]'>
          <div className='relative'>
            <input type="text" placeholder='Your Email' className='bg-transparent focus:outline-none focus:placeholder-transparent placeholder-[#372E27] font-[700]'/>
            <div className='absolute h-[2px] w-full bottom-[-5px] bg-[#372E27]'></div>
            </div>
            <div className='relative'>
            <input type='password' placeholder='Enter Password' className='bg-transparent focus:placeholder-transparent focus:outline-none placeholder-[#372E27] font-[700]'/>
            <div className='absolute h-[2px] w-full bottom-[-5px] bg-[#372E27]'></div>
            </div>
            <div className='flex md:flex-row justify-between gap-3 flex-col'>
            <p>You haven&apos;t an account?</p>
            <a href="/signup" className='hover:underline'>SignUp</a>
            </div>
            <button className='px-6 py-3 bg-transparent border-black border-2 rounded-[50px] font-semibold text-[16px] mt-2 text-black'>Login</button>
            </div>

        </div>
      
    </div>
  )
}

export default Login
