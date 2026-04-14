// Se va a encargar de conectarse a la base de datos
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

const client = new MongoClient(MONGODB_URI);

export async function connectToDB() {
    await client.connect();
    console.log("Connected to MongoDB");
}

export const dbClient = client.db(process.env.DB_NAME || 'demo');

