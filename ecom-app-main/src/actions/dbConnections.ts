import mongoose from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

async function dbConnection(): Promise<void> {
  try {
    const url = process.env.MONGODB_URL?.toString();
    // const url ="mongodb://localhost:27017/CRUD_DB"
    if (!url) {
      throw new Error("MONGODB_URI is not defined");
    }

    if (connection.isConnected) {
      return;
    }

    const db = await mongoose.connect(url);
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected ssssss");
  } catch (error: any) {
    throw new Error("Database connection failed: " + error.message);
  }
}

export default dbConnection;
