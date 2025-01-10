import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';


const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable');
}

const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const { fullName, email, telephone, service, message } = await request.json();

    await client.connect();
    const database = client.db('contactFormDB');
    const collection = database.collection('contacts');

    const result = await collection.insertOne({
      fullName,
      email,
      telephone,
      service,
      message,
      createdAt: new Date()
    });

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ success: false, error: 'Failed to save contact' }, { status: 500 });
  } finally {
    await client.close();
  }
}


export async function GET() {
  try {
    await client.connect();
    const database = client.db('contactFormDB');
    const collection = database.collection('contacts');

    const contacts = await collection.find().toArray();  // Fetch all documents in the collection

    return NextResponse.json({ success: true, contacts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch contacts' }, { status: 500 });
  } finally {
    await client.close();
  }
}