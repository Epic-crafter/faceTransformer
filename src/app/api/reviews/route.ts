import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI as string;

export async function POST(req: Request) {
  try {
    const { name, email, rating, service, review } = await req.json();

    if (!name || !email || !rating || !service || !review) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    const reviewsCollection = db.collection("reviews");

    const newReview = {
      name,
      email,
      rating,
      service,
      review,
      createdAt: new Date(),
    };

    await reviewsCollection.insertOne(newReview);
    await client.close();

    return NextResponse.json({ message: "Review submitted successfully", review: newReview }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    const reviewsCollection = db.collection("reviews");

    const reviews = await reviewsCollection.find().sort({ createdAt: -1 }).toArray();
    await client.close();

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
