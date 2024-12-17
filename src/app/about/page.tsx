import React from 'react'

const Page = () => {
  return (
       <div className='bg-[#DED0C5] flex flex-col'>
          <div className="sectoion-1 flex md:flex-row flex-col">
            <div className="container-section-1 md:w-[70%] flex flex-col p-14">
          <img src="/img/AboutUs/about us.png" className='md:w-[669px] md:h-[96px] mb-14 mt-5' alt="" />
          <div className='img-about'>
          <img src="/img/AboutUs/meet the doctor.png" alt="" />
          <img src="/img/AboutUs/dR. priyanka rana.png" className=' pb-3' alt="" />
          <img src="/img/AboutUs/Consultant Maxillofacial & Facial Plastic Surgeon.png" className='pb-3' alt="" />
          </div>
  
          <div className="about-text flex flex-col gap-4 md:text-start text-center">
              <p className="text-[#796355] text-lg">Dynamic Maxillofacial Surgeon with extra qualifications and interest in Facial Plastic surgery with more than 8 years of experience. Strongly focused on listening to and addressing patients&apos; concerns along with providing best possible outcome surgically or non surgically.</p>
              <p className="text-[#796355] text-lg">My expertise includes managing complex maxillofacial trauma cases, and I pride myself on my result-oriented approach and positive attitude. This focus allows me to achieve optimal results and ensure patient satisfaction, fostering happy and content patients.</p>
          </div>  
          </div>
          <div className="container-section-2 flex justify-center items-center p-8">
          <img className='md:w-[421px] md:h-[494px] rounded-[90px]' src="/img/AboutUs/Rectangle 21 (1).png" alt="" />
          </div>
          </div>


        <div className="section-2">
          <div className="qualification">
          <img src="/img/AboutUs/qualification.png" className='pb-3 px-8' alt="" />
          <div className="qualiication-text flex flex-col px-8 text-[#372E27] font-bold gap-6">
            <div className="qualification-text-1 flex justify-between">
              <div className="text-1 w-[90%] text-start">BDS - Bachelor of Dental Surgery</div>
              <div className="text-2 w-[10%] text-center">2012</div>
            </div>

            <div className="qualification-text-2 flex justify-between">
              <div className="text-1 w-[90%] text-start">Fellow of Academy of General Education (FAGE) MDS - Masters of Dental Surgery in Oral & Maxillofacial Surgery. (Topper in Branch)</div>
              <div className="text-2 w-[10%] text-center">2016</div>
            </div>

            <div className="qualification-text-3 flex justify-between">
            <div className="text-1 w-[90%] text-start">
                <p>Fellowship in Aesthetic Medicine (FAM) </p>
              <p>University of Greifswald, Germany</p>
              </div>
              <div className="text-2 w-[10%] text-center">2017</div>
            </div>

            <div className="qualification-text-2 flex justify-between">
              <div className="text-1 w-[90%] text-start">
                <p>Practical training for non-surgical aesthetic medicine under Dr. Jamuna Pai (Celebrity cosmetologist)</p>
                <p>Diplomate of Aesthetic LASER Medicine (DALM) University of Greifswald, Germany</p>
              </div>
              <div className="text-2 w-[10%] text-center">2018</div>
            </div>

            <div className="qualification-text-2 flex justify-between">
              <div className="text-1 w-[90%] text-start">
                <p>Fellowship with International Academy of Aesthetic Training. Sweden (FIAAT)</p>
                <p>Medical micro-pigmentation Hands on Training.</p>
              </div>
              <div className="text-2 w-[10%] text-center">2020</div>
            </div>

            <div className="qualification-text-2 flex justify-between">
              <div className="text-1 w-[90%] text-start">Zygomatic implants-Rehabilitation for atrophic maxilla hands on workshop</div>
              <div className="text-2 w-[10%] text-center">2021</div>
            </div>

            <div className="qualification-text-2 flex justify-between">
              <div className="text-1 w-[90%] text-start">Bombay - Hair Transplant, Hands on workshop</div>
              <div className="text-2 w-[10%] text-center">2022</div>
            </div>

            <div className="qualification-text-2 flex justify-between">
              <div className="text-1 w-[90%] text-start">
                <p>Sao Paulo, Brazil </p>
                <p>Facial Plastic Surgery Cadeveric Lab workshop</p>
              </div>
              <div className="text-2 w-[10%] text-center">2022</div>
            </div>
          </div>
          </div>

          <div className="contact-section flex flex-col">
          <img src="/img/AboutUs/contact us (1).png" className='w-[250px] h-[30px] mx-8 mt-5' alt="" />
          <div className="contact-us">
            <div className='flex gap-3 items-center text-[#372E27] font-bold px-8 py-3'>
              <img src="/img/AboutUs/el_phone-alt.png" alt="" className='h-8 w-8' />
              <p>+91 8780687611</p>
            </div>
            <div className='flex gap-3 items-center text-[#372E27] font-bold px-8 py-3'>
              <img src="/img/AboutUs/lets-icons_message-fill.png" className='h-8 w-8' alt="" />
              <p>priyankamaxfax@gmail.com</p>
            </div>
            <div className='flex gap-3 items-center text-[#372E27] font-bold px-8 py-3'>
              <img src="/img/AboutUs/dashicons_admin-site-alt3.png" className='h-8 w-8' alt="" />
              <p>http://www.drpriyankarana.com/</p>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Page
