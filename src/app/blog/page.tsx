"use client"
import React from "react";
import BlogPage from "./component/BlogPage";
import Navbar from "../home-page/components/Navbar";

// export const metadata = {
//   title: "Latest blogs for better guidance - College Counsel",
//   description: "Get admission in your dream University and course through College Counsel and get expert counselling and guidance along with scholarship options.",
//   alternates: {
//     canonical:`${process.env.BASE_URL}/blog`,
//   },
// };

const page = () => {
 
  return (
    <>
            <Navbar />

     <BlogPage/>
    </>
  );
};
export default page;
