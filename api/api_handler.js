const { ApolloServer } = require('apollo-server-express');
const fs = require('fs');
const employees = require('./employees');

// Define Resolvers
/*
    Function that handles the logic for fetching or modifying data
    when a specific query or mutation is called
*/
const resolvers = {
    Query: {
        employeesList: employees.employeesList,
        getEmployee: employees.getEmployee
    },
    Mutation: {
        createEmployee: employees.createEmployee,
        updateEmployee: employees.updateEmployee,
        deleteEmployee: employees.deleteEmployee
    }
};

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
});

function installHandler(app) {
    const enableCors = process.env.ENABLE_CORS === 'true';
    server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };
