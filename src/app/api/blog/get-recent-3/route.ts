import connectDb from "@/lib/db";
import Blogs from "@/model/blog.model";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export const GET = async () => {
  try {
    await connectDb();

    const blogs = await Blogs.find({}, 'url title meta writer imageUrl upload_time')
      .sort({ upload_time: -1 })
      .limit(3);

    const response = new NextResponse(JSON.stringify(blogs), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
      },
    });

    return response;
  } catch (err) {
    console.error(err);

    return new NextResponse(JSON.stringify({ err, message: "Internal server error" }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
      },
    });
  }
};
