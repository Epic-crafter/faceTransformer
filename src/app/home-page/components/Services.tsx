'use client'

import React, { useEffect, useState } from 'react';

type Service = {
  imageURL: string;
  title: string;
  description: string;
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };

    fetchServices();
  }, []);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}...`;
  };

  const toggleDescription = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-[#DED0C5]">
      <div className="section-1 flex md:justify-start justify-center px-4 md:ml-8 mt-16">
        <h1 className="font-bigerside-expanded uppercase font-[900] md:text-[80px] text-[50px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-start mb-10">
          Services
        </h1>
      </div>

      <div className="section-2 flex flex-col md:ml-32 mx-4 gap-2">
        <div className="container-1 flex flex-col md:flex-row gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="box-1 flex flex-col justify-center items-center rounded-[20px] py-4 px-3 bg-gradient-to-b shadow-xl from-[#9C8271] to-[#D6AF96] md:w-[30%] w-auto"
            >
              <img src={service.imageURL} alt={service.title} />
              <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-white text-center text-[20px] sm:text-[24px] md:text-[28px]">
                {service.title}
              </h1>
              <p className="text-white text-center text-[16px] mt-2">
                {expandedService === index
                  ? service.description
                  : truncateDescription(service.description, 100)}
              </p>
              {service.description.length > 100 && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-black underline mt-2 text-[14px]"
                >
                  {expandedService === index ? 'Read Less' : 'Read More'}
                </button>
              )}
              <button className="px-6 py-3 bg-transparent border-black border-2 rounded-[50px] font-semibold mt-2 text-black text-[16px]">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

