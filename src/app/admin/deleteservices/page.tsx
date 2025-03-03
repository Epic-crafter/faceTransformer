'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface Service {
  _id: string;
  name: string;
  imageURL: string;
  description: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services");
      const data = await response.json();
      if (data.success) {
        setServices(data.services);
      } else {
        console.error("Failed to fetch services:", data.error);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const deleteService = async (id: string) => {
    try {
      const response = await fetch(`/api/services?id=${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (data.success) {
        setServices(services.filter((service) => service._id !== id));
      } else {
        console.error("Failed to delete service:", data.error);
      }
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service._id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="w-full h-64">
              {service.imageURL ? (
                <Image width={100} height={100}
                  src={service.imageURL}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image width={100} height={100}
                  src="/default-image.jpg"
                  alt="default"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => deleteService(service._id)}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}