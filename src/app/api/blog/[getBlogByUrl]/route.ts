
import connectDb from "@/lib/db";
import Blogs from "@/model/blog.model";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'
export async function GET(req:any,{params}:any){
    try{
        const a=req
        console.log(a);
        
        const url = params.getBlogByUrl;
        await connectDb()
        const results = await Blogs.aggregate([
            {
                $facet: {
                    specificBlog: [
                        { $match: { url: url } }
                    ],
                    latestBlogs: [
                        { $sort: { upload_time:-1} },
                        { $limit: 10 },
                        { $project: { url: 1, title: 1, imageUrl: 1, upload_time: 1 } }
                    ]
                }
            }
        ]);

       

    const specificBlog = results[0]?.specificBlog[0];
    let latestBlogs = results[0]?.latestBlogs||[];
    
    if (specificBlog) {
        latestBlogs = latestBlogs.filter((blog:any) => blog.url !== specificBlog.url);
    }
        const response= NextResponse.json({
            specificBlog,
            latestBlogs
        });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }   
    catch (err) { 
    return NextResponse.json({ err,message: "Internal server error" });
    }
} 
