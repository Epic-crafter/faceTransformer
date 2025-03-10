"use server";
"@/app/global.css";
import Image from "next/image";
import { ImageFormat, ListFormat, ParagraphField, TableField } from "./Formats";
import Navbar from "@/app/home-page/components/Navbar";

const Blogpage = async ({ params }: any) => {
  let blog;
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blog/${params?.url}`, {
      cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) {
      blog = data?.specificBlog;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <div className="absolute top-0">
        <Navbar />
      </div>

      <div className="relative university-ab blogpage flex flex-col w-full mt-20  p-2 lg:py-10 lg:px-16 gap-10">
        <div className="w-full flex justify-center gap-4">
          <div className="lg:w-[75%] mx-auto w-full">
            {blog?.imageUrl && (
              <Image
                width={1200}
                height={600}
                priority
                className="h-auto w-full object-cover  rounded-xl"
                src={blog?.imageUrl || "/image/default.jpg"}
                alt={`${blog?.title} image`}
              />
            )}

            <h1 className="xl:text-4xl lg:text-3xl text-3xl lg:mt-12 mt-6 font-semibold">
              {blog?.title}
            </h1>
            {blog?.sequence?.map((data: any) => (
              <div key={data?.id} className="mt-4">
                {data.type === "text" && <ParagraphField data={data} />}
                {data.type === "list" && <ListFormat data={data} />}
                {data.type === "table" && <TableField data={data} />}
                {data.type === "img" && <ImageFormat data={data} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
