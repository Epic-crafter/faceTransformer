
import connectDb from "@/lib/db";
import Blogs from "@/model/blog.model";
import { NextResponse } from "next/server";

export async function GET(req:any, { params }:any) {
    try {
        const url = params.getBlogMetaData;
          if (!url) {
            return NextResponse.json({ message: "URL parameter is missing" });
        }
        await connectDb();
        const blog = await Blogs.findOne({ url: url },{ _id: 0,meta: 1});
        if (blog) {
            return NextResponse.json({blog});
        } else {
            return NextResponse.json({ message: "Meta data not found" });
        }
    }   
    catch (err) {
        console.error(err);
        return NextResponse.json({ error: err, message: "Internal server error" });
    }
}
