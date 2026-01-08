import clientPromise from './mongodb';

export async function getDatabase() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB);
}

export async function getCollection(collectionName) {
  const db = await getDatabase();
  return db.collection(collectionName);
}