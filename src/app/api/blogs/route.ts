import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Blogs from "@/model/blog.model";

// Database connection function
const connectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return;
  }
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }
    await mongoose.connect(mongoUri); // Connect to MongoDB
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Database connection failed");
  }
};

// GET handler
export async function GET(req: NextRequest) {
  try {
    await connectDb();
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");

    let blog;
    if (url) {
      blog = await Blogs.findOne({ url: url });
    } else {
      blog = await Blogs.find();
    }

    if (!blog) {
      return NextResponse.json(
        { status: false, message: "Blog(s) not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: true, data: blog }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Error fetching blog(s)" },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const data = await req.json();
    const existingBlog = await Blogs.findOne({ url: data.url });

    if (existingBlog) {
      return NextResponse.json(
        { status: false, message: "URL already in use" },
        { status: 400 }
      );
    }

    const newBlog = await Blogs.create(data);
    return NextResponse.json(
      { status: true, message: "Blog created successfully", data: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Error creating blog" },
      { status: 500 }
    );
  }
}
