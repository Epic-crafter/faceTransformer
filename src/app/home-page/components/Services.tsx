import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col bg-[#DED0C5] gap-20">
        <div className="section-1 flex md:justify-start justify-center px-4 md:ml-8 mt-16">
            <img src="/img/Services/SERVICES.png" alt="" />
        </div>

        <div className="section-2 flex flex-col md:ml-32 mx-4 gap-2">
            <div className="container-1 flex flex-col md:flex-row gap-2">
                <div className="box-1 flex flex-col justify-center items-center rounded-[20px] py-4 px-3 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] md:w-[30%] w-auto">
                    <img src="/img/Services/Box-img/Group 64.png" alt="" />
                    <img src="/img/Services/box-text/Lip augmentation.png" alt="" />
                    <button className='px-6 py-3 bg-transparent border-black border-2 rounded-[50px] font-semibold mt-2 text-black text-[16px]'>Know More</button>
                </div>
                <div className="box-2 flex flex-col justify-center items-center rounded-[20px] py-4 px-3 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] md:w-[30%] w-auto">
                <img src="/img/Services/Box-img/Group 67.png" alt="" />
                <img src="/img/Services/box-text/face lift (Rhytidectomy).png" alt="" />
                <button className='px-6 py-3 bg-transparent border-black border-2 rounded-[50px] font-semibold text-[16px] mt-2 text-black'>Know More</button>
                </div>
                <div className="box-3 flex flex-col justify-center items-center rounded-[20px] py-4 px-3 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] md:w-[30%] w-auto">
                    <img src="img/Services/Box-img/Group 69.png" alt="" />
                    <img src="/img/Services/box-text/cheek implants (Blepharoplasty).png" alt="" />
                <button className='px-6 py-3 bg-transparent border-black border-2 rounded-[50px] font-semibold text-[16px] mt-2 text-black'>Know More</button>
                </div>
            </div>
            <div className="container-2 flex flex-col md:flex-row gap-2">
            <div className="box-4 flex flex-col justify-center items-center rounded-[20px] py-4 px-3 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] md:w-[30%] w-auto">
            <img src="/img/Services/Box-img/Group 64 (1).png" alt="" />
                    <img src="/img/Services/box-text/chin augmentation.png" alt="" />
                    <button className='px-6 py-3 bg-transparent border-black border-2 rounded-[50px] font-semibold text-[16px] mt-2 text-black'>Know More</button>
                </div>
                <div className="box-5 flex flex-col justify-center gap-4 items-center rounded-[20px] py-4 px-3 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] md:w-[30%] w-auto">
                <img src="/img/Services/box-img/Group 67 (1).png" alt="" />
                    <img src="/img/Services/box-text/BOTOX.png" alt="" />
                    <button className='px-6 py-3 bg-transparent border-black border-2 rounded-[50px] font-semibold text-[16px] mt-2 text-black'>Know More</button>
                </div>
                <div className="box-6 gap-3 flex flex-col justify-center items-center rounded-[20px] py-4 px-3 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] md:w-[30%] w-auto">
                <img src="/img/Services/Box-img/Group 69 (1).png" alt="" />
                    <img src="/img/Services/box-text/NOSE AUGMENTATION (Rhinoplasty).png" alt="" />
                    <button className='px-6 py-3 bg-transparent border-black border-2 rounded-[50px] font-semibold text-[16px] mt-2 text-black'>Know More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
