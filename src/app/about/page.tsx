import React from "react";

const Page = () => {
  return (
    <div className="bg-[#DED0C5] flex flex-col">
      <div className="sectoion-1 flex md:flex-row flex-col-reverse items-center pt-14">
        <div className="container-section-1 md:w-[70%] flex flex-col md:p-14 p-4 ">
          <div className="img-about">
            <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#796355] text-center md:text-start text-[25px] md:text-[35px]">
              meet the doctor
            </h1>
            <h2 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#372E27] text-center md:text-start text-[20px] md:text-[55px]">
              dR. priyanka rana
            </h2>
            <h2 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#372E27] text-center md:text-start text-[16px] md:text-[20px]">
              Consultant Maxillofacial & Facial Plastic Surgeon
            </h2>
          </div>

          <div className="about-text flex flex-col gap-4 text-center md:text-start text-[16px] md:text-[20px] font-medium mt-4">
            <p className="text-[#796355]">
            Passion for Surgical and Cosmetic Improvement of the Face

In addition to separate, further qualifications and dear interest in facial plastic surgery, I am a maxillofacial surgeon of skills and dedication with over eight years of experience. The entire exercise is very patient-centered through listening skills, understanding each one's need, and striving to provide the best possible result, be it through surgical or non-surgical means.

            </p>
            <p>
            I perform first-rate surgical techniques in dealing with maxillofacial trauma, always taking into account that, aside from functional restoration, the repair of aesthetic goals is equally important. I've also honed my abilities at handling complex issues of facial reconstruction, jaw correction, and soft tissue repair, with customized solutions present for every specific need. Taking a holistic approach toward the operation and fulfillment of my work, patients have moved on confidently with an improved zest for life. 

            </p>
            <p>

In addition to technical proficiency, I considered the critical dimension of making the patient's medical experience comforting and one of trust. My attitude towards all my patients and their ailments is cheerful, which helps me create strong bonds as a physician with them. I focus primarily on improving patient satisfaction, maintaining standards of excellence through attention to detail and follow-up after treatment.

            </p>

            <p>
            Throughout my professional journey, I have been driven by a passion for achieving the highest levels of patient satisfaction, constantly putting myself in conditions for happy and joyful patients. I still remain committed to delivering the finest of outcomes while contributing towards the continuous advancement of maxillofacial and facial plastic surgery. 


            </p>
          </div>
        </div>
        <div className="container-section-2 flex justify-center items-center p-8">
          <img
            className="w-full max-w-[421px] h-auto max-h-[494px] rounded-[90px]"
            src="/img/AboutUs/Rectangle 21 (1).png"
            alt=""
          />
        </div>
      </div>

      <div className="section-2 mg:px-10 lg:px-14">
        <div className="qualification mt-20">
          <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#796355] text-center md:text-start text-[28px] md:text-[35px] px-4 md:px-8">
            Qualification
          </h1>
          <div className="qualification-text text-[15px] md:text-[20px] font-semibold flex flex-col px-4 md:px-8 text-[#372E27] gap-6 lg:gap-10">
            {qualifications.map((item, index) => (
              <div
                key={index}
                className={`qualification-text-${
                  index + 1
                } flex md:justify-between md:flex-row gap-4 flex-col lg:items-start items-center`}
              >
                <div
                  className={`${
                    index % 2 !== 0 ? "text-2 md:order-2" : "text-1 md:order-1"
                  } md:w-auto w-full flex justify-center mb-4 md:mb-0`}
                >
                  <img
                    src={item.img}
                    alt={`Qualification ${index + 1}`}
                    className="w-auto h-auto md:w-[30vw]"
                  />
                </div>
                <div
                  className={`${
                    index % 2 !== 0 ? "text-1 md:order-1 md:items-end md:text-end" : "text-2 md:order-2 md:text-start"
                  } md:w-[90%] w-full flex flex-col md:items-start items-center  text-center`}
                >
                  <p>{item.description}</p>
                  <p>{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section mt-10 flex flex-col">
          <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-full text-[#796355] text-center md:text-start text-[28px] md:text-[35px] px-4 md:px-8">
            contact us
          </h1>
          <div className="contact-us text-[16px] md:text-[24px] font-semibold">
            <div className="flex gap-3 items-center justify-center md:justify-start text-[#372E27] font-bold px-4 md:px-8 py-3">
              <img
                src="/img/AboutUs/el_phone-alt.png"
                alt=""
                className="h-6 w-6 md:h-8 md:w-8"
              />
              <p>+91 8780687611</p>
            </div>
            <div className="flex gap-3 items-center justify-center md:justify-start text-[#372E27] font-bold px-4 md:px-8 py-3">
              <img
                src="/img/AboutUs/lets-icons_message-fill.png"
                className="h-6 w-6 md:h-8 md:w-8"
                alt=""
              />
              <p>priyankamaxfax@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center justify-center md:justify-start w-full text-[#372E27] font-bold px-4 md:px-8 py-3">
              <img
                src="/img/AboutUs/dashicons_admin-site-alt3.png"
                className="h-6 w-6 md:h-8 md:w-8"
                alt=""
              />
              <p className="break-all">http://www.drpriyankarana.com/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

export const qualifications = [
  {
    year: "2012",
    description: "BDS - Bachelor of Dental Surgery",
    img: "/img/AboutRoute/img-1.jpg",
  },
  {
    year: "2016",
    description:
      "Fellow of Academy of General Education (FAGE), MDS - Masters of Dental Surgery in Oral & Maxillofacial Surgery (Topper in Branch)",
    img: "/img/AboutRoute/img-2.jpg",
  },
  {
    year: "2017",
    description:
      "Fellowship in Aesthetic Medicine (FAM), University of Greifswald, Germany",
    img: "/img/AboutRoute/img-3.jpg",
  },
  {
    year: "2018",
    description:
      "Practical training for non-surgical aesthetic medicine under Dr. Jamuna Pai (Celebrity cosmetologist). Diplomate of Aesthetic LASER Medicine (DALM), University of Greifswald, Germany",
    img: "/img/AboutRoute/img-4.jpg",
  },
  {
    year: "2020",
    description:
      "Fellowship with International Academy of Aesthetic Training (FIAAT), Sweden. Medical micro-pigmentation Hands-on Training",
    img: "/img/AboutRoute/img-5.jpg",
  },
  {
    year: "2021",
    description:
      "Zygomatic implants - Rehabilitation for atrophic maxilla hands-on workshop",
    img: "/img/AboutRoute/img-6.jpg",
  },
  {
    year: "2022",
    description: "Bombay - Hair Transplant, Hands-on workshop",
    img: "/img/AboutRoute/img-7.jpg",
  },
  {
    year: "2022",
    description:
      "Sao Paulo, Brazil - Facial Plastic Surgery Cadaveric Lab workshop",
    img: "/img/AboutRoute/img-8.jpg",
  },
];
