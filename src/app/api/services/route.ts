import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable');
}

const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const { title, description, imageURL } = await request.json();

    await client.connect();
    const database = client.db('serviceDB');
    const collection = database.collection('services');

    const result = await collection.insertOne({
      title,
      description,
      imageURL,
      createdAt: new Date()
    });

    return NextResponse.json({ 
      success: true, 
      id: result.insertedId,
      message: 'Service posted successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('Error posting service:', error);
    return NextResponse.json({ success: false, error: 'Failed to post service' }, { status: 500 });
  } finally {
    await client.close();
  }
}

