"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsList = () => {
  interface Review {
    _id: string;
    rating: number;
    review: string;
    name: string;
    service: string;
  }
  
  const [reviews, setReviews] = useState<Review[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#DED0C5] py-16">
      <div className="mx-auto px-6 md:px-20">
        <header className="mb-16">
        <h1
  className="font-bigerside-expanded  font-[900] text-[40px] sm:text-[60px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-start"
>  Customer reviews
        </h1>      
          <p className="text-[rgb(121,99,85)] max-w-2xl">
            See what our clients have to say about their experiences with our services.
          </p>
        </header>

        <div className="mt-8">

          {reviews.length === 0 ? (
            <div className="bg-white/20 p-8 text-center rounded-sm">
              <p className="text-[#796355]">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <Slider {...settings} className="mt-8">
              {reviews.map((rev) => (
                <div key={rev._id} className="bg-white/20 p-6 rounded-sm text-center">
                  <div className="flex justify-center text-[#796355] mb-2">
                    {"★".repeat(rev.rating)}
                    {"☆".repeat(5 - rev.rating)}
                  </div>
                  <p className="text-[#796355]/90 italic mb-4">{rev.review}</p>
                  <p className="text-[#796355] font-medium">— {rev.name}</p>
                  <p className="text-[#796355]/70 text-sm">{rev.service}</p>
                </div>
              ))}
            </Slider>
          )}

          <div className="mt-12 text-center flex justify-center gap-4">
            <button
              onClick={fetchReviews}
              className="bg-[#796355] text-white px-6 py-3 rounded-sm hover:bg-[#8a7264] transition-colors"
            >
              Refresh Reviews
            </button>
            <button
              onClick={() => router.push("/reviewform")}
              className="bg-[#8a7264] text-white px-6 py-3 rounded-sm hover:bg-[#796355] transition-colors"
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
