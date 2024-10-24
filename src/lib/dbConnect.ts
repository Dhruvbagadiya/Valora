import mongoose, { Connection } from "mongoose";

const MONGO_URI = process.env.MongoDB_URI || "mongodb://localhost:27017/Valora";

if (!MONGO_URI) {
	throw new Error(
		"Please define the MongoDB_URI environment variable inside .env.local"
	);
}

interface MongooseCache {
	conn: Connection | null;
	promise: Promise<typeof mongoose> | null; // Change type to match mongoose.connect's return type
}

let cached: MongooseCache = (global as any).mongoose;

if (!cached) {
	cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Connection> {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};

		cached.promise = mongoose.connect(MONGO_URI, opts);
	}

	cached.conn = (await cached.promise).connection;
	return cached.conn;
}

export default dbConnect;
