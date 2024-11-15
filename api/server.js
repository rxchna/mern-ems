const express = require('express');
const fs = require('fs');
const { ApolloServer } = require('apollo-server-express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB connection URL
const url = process.env.DB_URL;

// Global db variable
let db;

// Async funtion to connect to database
async function connectToDB() {
    // Create client
    const client = new MongoClient(url, { useNewUrlParser:true });
    // Connect to database
    await client.connect();
    return client.db();
}

// Method to get all employees
async function employeesList() {
    // Get list of employees from employees collection
    const employees = await db.collection('employees').find({}).toArray();

    return employees;
}

// Method to insert new employee
async function createEmployee(_, {employee: employee}) {
    // Insert employee into the collection
    // const result = await db.collection('employees').insertOne(employee);

    const result = await db.collection('employees').insertOne({
        ...employee,
        current_status: 1, // Set default value of status (working)
    });
    // Retrieve inserted employee using insertedId
    const savedEmployee = await db.collection('employees').findOne({ _id: result.insertedId });

    // Return saved employee
    return savedEmployee;
}

// Define resolvers
const resolvers = {
    Query: {
        employeesList
    },
    Mutation: {
        createEmployee
    }
};

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
  });

// Function to start the application and initialize database
async function startApp() {
    try {
        // Connect to database
        db = await connectToDB();

        const app = express();
        const enableCors = process.env.ENABLE_CORS === 'true';
        server.applyMiddleware({ app, path: '/graphql', cors: enableCors });

        const PORT = process.env.API_PORT;

        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });

    } catch (error) {
        console.log("Error starting the application: ", error);
    }
}

startApp();
