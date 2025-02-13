import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGO_URI as string;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db('gallery');
    const collection = db.collection('belowimages');

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
    const { imageUrl } = await req.json();

    if (!imageUrl) {
      return NextResponse.json({ error: 'imageUrl is required' }, { status: 400 });
    }

    await client.connect();
    const db = client.db('gallery');
    const collection = db.collection('belowimages');

    const result = await collection.insertOne({
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

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
    }

    await client.connect();
    const db = client.db('gallery');
    const collection = db.collection('belowimages');

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in DELETE /api/gallery:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
