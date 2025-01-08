import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

export async function GET() {
  if (!uri || !dbName) {
    console.error('Missing environment variables: MONGODB_URI or MONGODB_DB_NAME');
    return NextResponse.json(
      { error: 'Server configuration error. Please contact the administrator.' },
      { status: 500 }
    );
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(dbName);
    const services = database.collection('services');

    const result = await services.find({}).toArray();

    return NextResponse.json(result);
  } catch (e) {
    console.error('Database connection error:', e);
    return NextResponse.json(
      { error: 'Failed to fetch services. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}