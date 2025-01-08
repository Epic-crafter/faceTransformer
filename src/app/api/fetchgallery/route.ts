import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI

export async function GET() {
  if (!uri) {
    console.error('MONGODB_URI is not defined')
    return new Response(JSON.stringify({ error: 'Database configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db('gallery') 
    const collection = database.collection('images') 
    
    const galleryItems = await collection.find({}, { projection: { imageUrl: 1 } }).toArray()
    
    return new Response(JSON.stringify(galleryItems), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error fetching gallery items:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  } finally {
    await client.close()
  }
}

