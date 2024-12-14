import { NextRequest, NextResponse } from "next/server";
import Blogs from "@/model/blog.model";
import connectDb from "@/lib/db";
export const POST =async(req:NextRequest)=>{

  try {
    await connectDb();
    const data = await req.json();
    const Blog=await Blogs.findOne({ url: data.data.url });
    if (Blog) {
      return NextResponse.json({status:false,message:"url already used"});
    }
    const create= await Blogs.create({
      title: data.data.title,
      url: data.data.url,
      imageUrl: data.data.imageUrl,
      writer: data.data.writer,
      meta: data.meta,
      sequence: data.sequence,
    })
    return NextResponse.json({status:true,data:'Blog uploaded',create})
  } catch (error) {
    console.log(error);
    return NextResponse.json({data:'Error'})
  }
}