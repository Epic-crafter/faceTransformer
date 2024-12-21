import React from 'react'

const Gallery = () => {
  return (
    <div className='bg-[#DED0C5] flex flex-col h-max-full'>
        <div className="section-1 flex justify-center md:justify-start py-5 px-4 md:px-6 md:py-8 ml-8 mt-6">
            <img src="/img/ContactUs/contact us.png" alt="" />
        </div>

        <div className="section-2 bg-[#D6AF96] md:gap-0 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] gap-5 mx-10 my-10 rounded-[10px] border-none flex md:flex-row flex-col justify-between px-6 md:px-12 py-8">
                <div className="form-section-1 md:w-[644px] w-auto text-[20px] font-normal">
                    <img src="/img/ContactUs/Fill up this form to get a free consultation.png" className='h-16' alt="" />
                    <p>Dont forget to check out our socials!! They will be linked right </p>
                    <p>here for yall to get an idea about us!! </p>
                    <p>Go show us some love!</p>
                </div>

                <div className="form-section-2 bg-[#F1EFEE] md:p-8 p-3 gap-[10px] flex flex-col rounded-[10px]">
                    <div className="head-img">
                        <img src="/img/ContactUs/Fill it up now!! (1).png" alt="" />
                        </div>
                        <form action="" className='flex flex-col gap-5'>
                        
                            <div className="input-1 gap-5 flex md:flex-row flex-col">
                 <div className='relative'>
                <input type="text" placeholder="Full name" className="bg-transparent text-[#372E27] focus:outline-none focus:placeholder-transparent border-none placeholder-[#372E27] font-bold"/>                    
<div className="absolute bottom-[-5px] h-[2px] w-full bg-[#372E27]"></div>
</div>

<div>
<div className='relative'>
                <input type="text" placeholder="Email" className="bg-transparent text-[#372E27] focus:outline-none focus:placeholder-transparent border-none placeholder-[#372E27] font-bold"/>                    
<div className="absolute h-[2px] w-full bottom-[-5px] bg-[#372E27]"></div>
</div>
</div>
                            </div>

                            <div className="input-2 gap-5 flex md:flex-row flex-col">
                                <div className='relative'>
                                <input type="text" placeholder='Telephone' className='bg-transparent text-[#372E27] focus:outline-none focus:placeholder-transparent placeholder-[#372E27] font-bold '/>
                                <div className='w-full bg-[#372E27] h-[2px] absolute bottom-[-5px]'></div>
                                </div>

                                <div className='relative'>
                                <input type="text" placeholder='Service' className='bg-transparent text-[#372E27] placeholder-[#372E27] font-bold focus:outline-none focus:placeholder-transparent '/>
                                <div className='w-full h-[2px] bottom-[-5px] bg-[#372E27] absolute'></div>
                                </div>

                            </div>
                            <div className="input-3 flex flex-col gap-2">
                                <label htmlFor="message" className='text-[#372E27] font-bold'>Message</label>
                                <br />
                                <div className='relative'>
                                <input type="text" placeholder='' className='bg-transparent text-[#372E27] focus:outline-none font-bold'/>
                                <div className='w-full h-[2px] bg-[#372E27] absolute'></div>
                                </div>
                            </div>

                            <div className="started-button flex justify-center mb-3 mt-3">
                                <button className='text-white bg-[#796355] flex justify-center items-center font-bold rounded-[50px] md:px-32 px-4 py-4'>Get Started</button>
                            </div>
                        </form>
                </div>
        </div>
    </div>
  )
}

export default Gallery
