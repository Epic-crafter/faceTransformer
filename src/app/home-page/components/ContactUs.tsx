import React from 'react'

const Gallery = () => {
  return (
    <div className='bg-[#DED0C5] flex flex-col h-max-full md:px-12 px-4'>
        <div className="section-1 flex justify-center md:justify-start px-4 md:px-6">
        <h1
  className="font-bigerside-expanded uppercase font-[900] md:text-[80px] text-[50px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-start mb-10"
>
Contact Us
</h1>
        </div>

        <div className="section-2 w-full bg-[#D6AF96] md:gap-0 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] gap-5 rounded-[10px] border-none flex md:flex-row flex-col justify-between px-6 md:px-12 py-8">
                <div className="form-section-1 md:w-1/2 w-auto text-[20px] font-normal">
                    <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-black text-start text-[25px] md:text-[30px]">Fill up this form to <span className='text-white'>get</span></h1>
                    <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-white text-start text-[25px] md:text-[30px]">a free consultation</h1>
                    <p>Dont forget to check out our socials!! They will be linked right </p>
                    <p>here for yall to get an idea about us!! </p>
                    <p>Go show us some love!</p>
                </div>

                <div className="form-section-2 md:w-1/2 bg-[#F1EFEE] md:p-8 p-3 gap-[10px] flex flex-col rounded-[10px]">
                    <div className="head-img">
                        <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-black text-start text-[20px] sm:text-[34px] md:text-[33px]">Fill it up now!!</h1>
                        </div>
                        <form action="" className='flex flex-col gap-5'>
                            <div className="input-1 w-full gap-5 flex md:flex-row flex-col">
                 <div className='relative md:w-1/2'>
                <input type="text" placeholder="Full name" className="w-[90%] bg-transparent text-[#372E27] focus:outline-none focus:placeholder-transparent border-none placeholder-[#372E27] font-bold"/>                    
<div className="absolute bottom-[-5px] h-[2px] w-full bg-[#372E27]"></div>
</div>

<div className='md:w-1/2'>
<div className='relative'>
                <input type="text" placeholder="Email" className="w-[90%] bg-transparent text-[#372E27] focus:outline-none focus:placeholder-transparent border-none placeholder-[#372E27] font-bold"/>                    
<div className="absolute h-[2px] w-full bottom-[-5px] bg-[#372E27]"></div>
</div>
</div>
                            </div>

                            <div className="input-2 gap-5 flex md:flex-row flex-col">
                                <div className='relative md:w-1/2'>
                                <input type="text" placeholder='Telephone' className='w-[90%] bg-transparent text-[#372E27] focus:outline-none focus:placeholder-transparent placeholder-[#372E27] font-bold '/>
                                <div className='w-full bg-[#372E27] h-[2px] absolute bottom-[-5px]'></div>
                                </div>

                                <div className='relative md:w-1/2'>
                                <input type="text" placeholder='Service' className='w-[90%] bg-transparent text-[#372E27] placeholder-[#372E27] font-bold focus:outline-none focus:placeholder-transparent '/>
                                <div className='w-full h-[2px] bottom-[-5px] bg-[#372E27] absolute'></div>
                                </div>

                            </div>

                            <div className="input-3 flex flex-col gap-2">
                                <label htmlFor="message" className='text-[#372E27] font-bold'>Message</label>
                                <br />
                                <div className='relative w-full'>
                                <input type="text" placeholder='' className='w-[90%] bg-transparent text-[#372E27] focus:outline-none font-bold'/>
                                <div className='w-full h-[2px] bg-[#372E27] absolute'></div>
                                </div>
                            </div>

                            <div className="started-button flex justify-center mb-3 mt-3">
                                <button className='text-white bg-[#796355] flex justify-center items-center font-bold rounded-[50px] md:px-24 px-8 py-4'>Get Started</button>
                            </div>
                        </form>
                </div>
        </div>
    </div>
  )
}

export default Gallery
