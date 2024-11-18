const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB connection URL
const url = process.env.DB_URL;

// Create global db variable
let db;

// Create aysnc function to connect to database
async function connectToDB() {
  // Create client
  const client = new MongoClient(url, { useNewURLParser: true });
  // Connect to the database
  await client.connect();
  db = client.db();
}

function getDb() {
  return db;
}

module.exports = { connectToDB, getDb };
