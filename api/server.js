const express = require('express');
const { connectToDB } = require('./db');
const { installHandler } = require('./api_handler');
require('dotenv').config();

const app = express();
installHandler(app);

// Function to start application and initialize database
async function startApp() {
    try {
        // Connect to database
        db = await connectToDB();

        const PORT = process.env.API_PORT;
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });

    } catch (error) {
        console.log("Error starting the application: ", error);
    }
}

startApp();
