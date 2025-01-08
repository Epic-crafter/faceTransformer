import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI as string;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db('gallery');
    const collection = db.collection('images');

    const images = await collection.find({}).toArray();

    return NextResponse.json(images, { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/gallery:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, imageUrl } = await req.json();

    if (!title || !imageUrl) {
      return NextResponse.json({ error: 'Title and imageUrl are required' }, { status: 400 });
    }

    await client.connect();
    const db = client.db('gallery');
    const collection = db.collection('images');

    const result = await collection.insertOne({
      title,
      imageUrl,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/gallery:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
