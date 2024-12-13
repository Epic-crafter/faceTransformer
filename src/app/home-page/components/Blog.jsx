import React from 'react'

const Blog = () => {
  return (
    <div className='flex flex-col md:h-auto bg-[#DED0C5]'>
        <div className="section-1 ml-20 my-20">
            <img src="/img/Blog/BLOG.png" alt="" />
        </div>

        <div className="section-2 gap-5 flex flex-col md:flex-row ml-4 mb-8">
            <div className='container-1 flex flex-col bg-[#F1EFEE] p-4'>
            <img src="/img/Blog/Image.png" alt="" />
            <img className='mb-4 mt-6' src="/img/Blog/Subheading.png" alt="" />
            <p className='font-medium'>Linear helps streamline software projects, sprints, tasks, and bug trackLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            <div className="user-info flex flex-row gap-2 p-2">
            <img src="/img/Blog/Avatar.png" alt="" />
            <div className='flex flex-col'>
            <h3>Phoenix Baker</h3>
            <h3>19 Jan 2022</h3>
            </div>
            </div>
            </div>

            <div className='container-2 flex flex-col bg-[#F1EFEE] p-4'>
            <img src="/img/Blog/Image.png" alt="" />
            <img className='mb-4 mt-6' src="/img/Blog/Subheading.png" alt="" />
            <p>Linear helps streamline software projects, sprints, tasks, and bug trackLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            <div className="user-info flex flex-row gap-2 p-2">
            <img src="/img/Blog/Avatar.png" alt="" />
            <div className='flex flex-col'>
            <h3>Phoenix Baker</h3>
            <h3>19 Jan 2022</h3>
            </div>
            </div>
            </div>

            <div className='container-3 flex flex-col bg-[#F1EFEE] p-4'>
            <img src="/img/Blog/Image.png" alt="" />
            <img className='mb-4 mt-6 w-full' src="/img/Blog/Subheading.png" alt="" />
            <p>Linear helps streamline software projects, sprints, tasks, and bug trackLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            <div className="user-info flex flex-row gap-2 p-2">
            <img src="/img/Blog/Avatar.png" alt="" />
            <div className='flex flex-col'>
            <h3>Phoenix Baker</h3>
            <h3>19 Jan 2022</h3>
            </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Blog
