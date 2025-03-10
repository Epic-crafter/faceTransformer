import { NextResponse, NextRequest } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable');
}

const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const { title, description, imageURL,blogLink } = await request.json();

    await client.connect();
    const database = client.db('serviceDB');
    const collection = database.collection('services');

    const result = await collection.insertOne({
      title,
      description,
      blogLink,
      imageURL,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      id: result.insertedId,
      message: 'Service posted successfully',
    }, { status: 201 });
  } catch (error) {
    console.error('Error posting service:', error);
    return NextResponse.json({ success: false, error: 'Failed to post service' }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function GET() {
  try {
    await client.connect();
    const database = client.db('serviceDB');
    const collection = database.collection('services');

    const services = await collection.find({}).toArray();

    return NextResponse.json({ success: true, services }, { status: 200 });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch services' }, { status: 500 });
  } finally {
    await client.close();
  }
}




export async function DELETE(req: NextRequest) {
  try {
    await client.connect();
    const database = client.db("serviceDB");
    const collection = database.collection("services");

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Service deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json({ success: false, error: "Failed to delete service" }, { status: 500 });
  } finally {
    await client.close();
  }
}