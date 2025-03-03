import React from "react";
import Navbar from "../home-page/components/Navbar";
import Image from "next/image";

const Page = () => {
  return (
    <>
    <Navbar />

    <div className="bg-[#DED0C5] flex flex-col">
      <div className="sectoion-1 flex md:flex-row flex-col-reverse items-center pt-14">
        <div className="container-section-1 md:w-[70%] flex flex-col md:p-14 p-4 ">
          <div className="img-about">
            <h1 className="font-bigerside-expanded  font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#796355] text-center md:text-start text-[25px] md:text-[35px]">
              meet the doctor
            </h1>
            <h2 className="font-bigerside-expanded  font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#372E27] text-center md:text-start text-[20px] md:text-[55px]">
              dR. priyanka rana
            </h2>
            <h2 className="font-bigerside-expanded  font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#372E27] text-center md:text-start text-[16px] md:text-[20px]">
              Consultant Maxillofacial & Facial Plastic Surgeon
            </h2>
          </div>

          <div className="about-text flex flex-col gap-4 text-center md:text-start text-[16px] md:text-[20px] font-medium mt-4">
            <p>
            Discover an innovative realm of facial care where science meets art. Dr. Priyanka Rana is an exceptional Maxillofacial and Aesthetic Plastic Surgeon with more than 8 years of experience in providing surgical and non surgical care with excellent results. Her practice is based in Vadodara, Gujarat where she employs advanced surgical and non surgical methods to ensure that all of her patients look and function at their very best.
            </p>
            <p>
            Dr. Rana is always on the pursuit of excellence, therefore, she puts in a lot of effort to ensure that the solutions she provides to the patients are as unique as the patients themselves. With her international training, she uses a patient-first approach to achieve the desired results. From restoring facial balance post trauma to treating highly complicated maxillofacial problems, Dr. Rana provides care that achieves and exceeds the necessary confidence and saticfaction.

            </p>
            <h2 className="font-bigerside-expanded  font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#372E27] text-center md:text-start text-[16px] md:text-[20px]">
            Why Choose Us?
             </h2>
            <p>
            <strong>Expertise You Can Trust:</strong> With advanced qualifications in Maxillofacial Surgery and Facial Plastic Surgery, Dr. Rana specializes in managing complex cases, including maxillofacial trauma, aesthetic enhancements, and reconstructive procedures.<br/><br/>
            <strong>Patient-Centered Care:</strong> Dr. Rana believes in listening to her patients’ concerns and tailoring treatments to meet their unique needs and goals. Her empathetic approach ensures a comfortable and supportive experience.<br/><br/>
            <strong>Proven Results:</strong> A result-oriented professional, Dr. Rana’s positive attitude and attention to detail have earned her a reputation for achieving happy and satisfied patients.<br/><br/>
            <strong>Global Training:</strong> Dr. Rana’s international training and workshops in countries like Brazil, Sweden, and Germany have equipped her with the latest techniques and innovations in facial surgery and aesthetic medicine.<br/><br/>

            </p>
            <h2 className="font-bigerside-expanded  font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#372E27] text-center md:text-start text-[16px] md:text-[20px]">
            Education & Qualifications
             </h2>
             <p>
             Dr. Priyanka Rana’s academic and professional journey reflects her dedication to excellence:<br/><br/>
MDS (Master of Dental Surgery) in Oral & Maxillofacial Surgery – Topper in her branch.<br/><br/>
BDS (Bachelor of Dental Surgery)<br/><br/>
Fellowship in Aesthetic Medicine (FAM) – University of Greifswald, Germany (2017)<br/><br/>
Diplomate of Aesthetic LASER Medicine (DALM) – University of Greifswald, Germany (2018)<br/><br/>
Fellowship with International Academy of Aesthetic Training (FIAAT) – Sweden (2020)<br/><br/>
Fellow of Academy of General Education (FAGE)

             </p>
          </div>
        </div>
        
      </div>

      <div className="section-2 mg:px-10 lg:px-14">
        <h2 className="font-bigerside-expanded  font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#372E27] text-center md:text-start text-[16px] md:text-[20px]">
        contact us
          </h2>
          <div className="contact-us text-[16px] md:text-[24px] font-semibold">
            <div className="flex gap-3 items-center justify-center md:justify-start text-[#372E27] font-bold px-2 py-3">
              <Image width={100} height={100}
                src="/img/AboutUs/el_phone-alt.png"
                alt=""
                className="h-6 w-6"
              />
              <p>+91 8780687611</p>
            </div>
            <div className="flex gap-3 items-center justify-center md:justify-start text-[#372E27] font-bold px-2 py-3">
              <Image width={100} height={100}
                src="/img/AboutUs/lets-icons_message-fill.png"
                className="h-6 w-6"
                alt=""
              />
              <p>priyankamaxfax@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center justify-center md:justify-start w-full text-[#372E27] font-bold px-2 py-3">
              <Image width={100} height={100}
                src="/img/AboutUs/dashicons_admin-site-alt3.png"
                className="h-6 w-6"
                alt=""
              />
              <p className="break-all">https://www.drpriyankarana.com/</p>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default Page;

