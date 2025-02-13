// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(express.json());

// Use comments router
app.use('/comments', require('./comments'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});