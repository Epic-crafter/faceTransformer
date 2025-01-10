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
    await mongoose.connect(mongoUri); // No options needed for Mongoose 6+
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Database connection failed");
  }
};

// GET method handler
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();
    const id = params.id;

    const blog = await Blogs.findById(id);

    if (!blog) {
      return NextResponse.json(
        { status: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: true, data: blog }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Error fetching blog" },
      { status: 500 }
    );
  }
}

// DELETE method handler
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();
    const id = params.id;

    const deletedBlog = await Blogs.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json(
        { status: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { status: true, message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Error deleting blog" },
      { status: 500 }
    );
  }
}
