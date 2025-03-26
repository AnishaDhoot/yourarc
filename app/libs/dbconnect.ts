import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
}

type CachedMongoose = {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
};

declare global {
    var mongoose: CachedMongoose;
}

let cached: CachedMongoose = global.mongoose || { conn: null, promise: null };

async function dbConnect(): Promise<Mongoose> {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => mongooseInstance);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
