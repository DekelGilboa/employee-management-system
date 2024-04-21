// Import required modules
const express = require('express');

// Create an instance of Express app
const app = express();
const port = 3000; // You can change the port as needed

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World! This is a basic Express app.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});